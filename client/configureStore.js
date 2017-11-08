import {createStore, applyMiddleware} from 'redux'
import {createLogger} from 'redux-logger'
import {createEpicMiddleware} from 'redux-observable';
import {ajax} from 'rxjs/observable/dom/ajax';
import {Observable} from 'rxjs';
import reduxCatch from 'redux-catch';
import Raven from 'raven-js';
import {SENTRY_KEY} from './constants/configSettings';
import LandmarkRemarkService from './services/landmarkRemarkService';
import ResponseTransformer from './transformers/responseTransformer';
import ModelsFactory from './factories/modelsFactory';
import rootReducer from './components/root/rootReducer';
import {rootEpic} from './components/root/rootEpic';

const loggerMiddleware = createLogger();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
Raven.config(`https://${SENTRY_KEY}@sentry.io/209498`).install();

//Create redux-observable Epic
const epicMiddleware = createEpicMiddleware(rootEpic, {
    dependencies: {landmarkRemarkService: new LandmarkRemarkService(ajax.getJSON, 60726, new ResponseTransformer(new ModelsFactory())), Observable}
});

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

    return createStore(rootReducer, preloadedState, composeEnhancers(
        applyMiddleware(
            epicMiddleware,
            loggerMiddleware,
            reduxCatch(errorHandler)
        )
    ));
}

