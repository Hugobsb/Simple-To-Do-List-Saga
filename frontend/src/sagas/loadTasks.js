import { call, put } from 'redux-saga/effects';
import { loadTasks as getTasks } from './apiCalls';

export function* loadTasks(payload) {
    try {
        const response = yield call(() => getTasks(payload.username));
        yield put({ type: 'FETCH_TODOS_SUCCESS', payload: response.data });
    } catch (error) {
        yield put({ type: 'FETCH_FAILED', error });
    }
}