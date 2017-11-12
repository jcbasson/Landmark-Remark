import {createStore, applyMiddleware} from 'redux'
import reduxCatch from 'redux-catch';
import Raven from 'raven-js';
import {SENTRY_KEY} from './constants/configSettings';
import reducer from './configureReducers';
import {epicMiddleware, loggerMiddleware}  from './configureMiddelware';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
Raven.config(`https://${SENTRY_KEY}@sentry.io/209498`).install();


const errorHandler = (error, getState, action) => {
    if (Raven) {
        Raven.context({
            state: getState(),
            action,
        });
        Raven.captureException(error);
    }
};


export default function configureStore(preloadedState) {

    return createStore(reducer, preloadedState, composeEnhancers(
        applyMiddleware(
            epicMiddleware,
            loggerMiddleware,
            reduxCatch(errorHandler)
        )
    ));
}

