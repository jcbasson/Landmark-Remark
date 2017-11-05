import React, { Component } from 'react'
import { Provider } from 'react-redux'
import configureStore from '../../configureStore';
import AppComponent from '../app/AppComponent';
import ModelsFactory from '../../factories/modelsFactory'

const store = configureStore();
const modelFactory = new ModelsFactory();

export default class RootComponent extends Component {
    render() {
        return (
            <Provider store={store}>
                <AppComponent modelFactory={modelFactory} />
            </Provider>
        )
    }
}