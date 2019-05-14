import {all} from 'redux-saga/effects';
import {watchTurnOnApp} from "./turnOnAppSaga";


export default function* rootSaga() {
    yield all([
        watchTurnOnApp(),
    ]);
}