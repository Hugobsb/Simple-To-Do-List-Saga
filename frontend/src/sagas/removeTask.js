import { call, put } from 'redux-saga/effects';
import { removeTask as taskRemover } from './apiCalls';

export function* removeTask(payload) {
    try {
        const response = yield call(() => taskRemover(payload.username, payload.text));
        yield put({ type: 'REMOVE_TODO_SUCCESS', payload: response.data });
    } catch (error) {
        yield put({ type: 'FETCH_FAILED', error });
    }
}