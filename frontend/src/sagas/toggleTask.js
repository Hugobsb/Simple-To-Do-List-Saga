import { call, put } from 'redux-saga/effects';
import { toggleTask as taskToggler } from './apiCalls';

export function* toggleTask(payload) {
    try {
        const response = yield call(() => taskToggler(payload.username, payload.text, payload.complete));
        yield put({ type: 'TOGGLE_TODO_SUCCESS', payload: response.data });
    } catch (error) {
        yield put({ type: 'FETCH_FAILED', error });
    }
}