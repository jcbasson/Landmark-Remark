import React, { Component } from 'react'
import { Provider } from 'react-redux'
import {modelService} from '../../configureServices';
import appActions from '../../configureActions';
import configureStore from '../../configureStore';
import AppComponent from '../app/AppComponent';

const store = configureStore();

export default class RootComponent extends Component {
    render() {
        return (
            <Provider store={store}>
                <AppComponent actions={appActions} modelService={modelService} />
            </Provider>
        )
    }
}