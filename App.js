import React from 'react';
import {Component} from 'react';
import {AppContainer} from './nav/navigator';
import {Provider} from 'react-redux';
import {store} from "./redux/store/store";

type Props = {};
export default class App extends Component<Props> {

    render() {
        return (
            <Provider store={store}>
                <AppContainer/>
            </Provider>
        );
    }
}
