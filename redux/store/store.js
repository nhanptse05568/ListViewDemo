import {createStore, applyMiddleware} from "redux";
import {reducer} from '../reducer/reducer';
import {ListView} from "react-native";
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../saga/rootSaga';

export const defaultState = {
    seachValue: '',
    dataSource: new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2}),
    selectedPickerValue: 'row',
};

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(reducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);