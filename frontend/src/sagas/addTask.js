import { call, put } from 'redux-saga/effects';
import { addTask as taskAdder } from './apiCalls';

export function* addTask(payload) {
    try {
        const response = yield call(() => taskAdder(payload.username, payload.text));
        yield put({ type: 'ADD_TODO_SUCCESS', payload: response.data });
    } catch (error) {
        yield put({ type: 'FETCH_FAILED', error });
    }
}