import { createActions, createReducer } from 'reduxsauce';

export const { Types, Creators } = createActions({
    fetchTodosSuccess: ['tasks'],
    addTodoSuccess: ['task'],
    toggleTodoSuccess: ['task'],
    removeTodoSuccess: ['task'],

    loadTodos: ['username'],
    addTodo: ['username', 'text'],
    toggleTodo: ['username', 'text', 'complete'],
    removeTodo: ['username', 'text']
});

const INITIAL_STATE = [];

export default createReducer(INITIAL_STATE, {
    [Types.FETCH_TODOS_SUCCESS]: (state = INITIAL_STATE.todos, action) => action.payload ? action.payload : state,
    [Types.ADD_TODO_SUCCESS]: (state = INITIAL_STATE.todos, action) => action.payload ? state.merge(action.payload) : state,
    [Types.TOGGLE_TODO_SUCCESS]: (state = INITIAL_STATE.todos, action) => action.payload ? state.merge(action.payload) : state,
    [Types.REMOVE_TODO_SUCCESS]: (state = INITIAL_STATE.todos, action) => action.payload ? state.merge(action.payload) : state,
    
    [Types.LOAD_TODOS] : (state = INITIAL_STATE.todos) => state,
    [Types.ADD_TODO] : (state = INITIAL_STATE.todos) => state,
    [Types.TOGGLE_TODO]: (state = INITIAL_STATE.todos) => state,
    [Types.REMOVE_TODO]: (state = INITIAL_STATE.todos) => state
});