import React, { Component } from 'react'
import { Provider } from 'react-redux'
import {modelService} from '../../configureDependencies';
import configureStore from '../../configureStore';
import AppComponent from '../app/AppComponent';

const store = configureStore();

export default class RootComponent extends Component {
    render() {
        return (
            <Provider store={store}>
                <AppComponent modelService={modelService} />
            </Provider>
        )
    }
}