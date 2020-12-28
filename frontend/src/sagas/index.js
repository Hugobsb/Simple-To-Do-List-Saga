import { all, takeEvery } from 'redux-saga/effects';

import { loadTasks } from './loadTasks';
import { addTask } from './addTask';
import { toggleTask } from './toggleTask';
import { removeTask } from './removeTask';

import { Types } from '../store/ducks/todos';

function* rootSaga() {
    yield all([
        takeEvery(Types.LOAD_TODOS, loadTasks),
        takeEvery(Types.ADD_TODO, addTask),
        takeEvery(Types.TOGGLE_TODO, toggleTask),
        takeEvery(Types.REMOVE_TODO, removeTask)
    ]);
}

export default rootSaga;