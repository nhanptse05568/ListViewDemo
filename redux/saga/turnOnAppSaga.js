import {takeEvery} from 'redux-saga/effects'

function* updateListNoteFromServer() {
    alert('fetching data');
}

export function* watchTurnOnApp() {
    yield takeEvery('updateListNoteFromServer', updateListNoteFromServer);
}