import React, { Component } from 'react'
import { Provider } from 'react-redux'
import {modelFactory} from '../../configurations/configureFactories';
import {appActions, errorBoundaryActions} from '../../configurations/configureActions';
import configureStore from '../../configurations/configureStore';
import AppComponent from '../app/AppComponent';
import ErrorBoundaryComponent from '../errorBoundary/errorBoundaryComponent';

const store = configureStore();

export default class RootComponent extends Component {
    render() {
        return (
            <Provider store={store}>
                <ErrorBoundaryComponent actions={errorBoundaryActions} sourceComponent="App">
                <AppComponent actions={appActions} errorActions={errorBoundaryActions} modelFactory={modelFactory} />
                </ErrorBoundaryComponent>
            </Provider>
        )
    }
}