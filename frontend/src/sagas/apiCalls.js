import api from '../services/api';

export const loadTasks = async username => {
    const res = await api.get('/getTasks', {
        params: { username }
    });
    console.log('Getting tasks from backend...');
    return res;
};

export const addTask = async (username, text) => {
    const res = await api.post('/task', { username, task: { text, complete: false } });
    console.log('Posting task on backend...');
    return res;
};

export const toggleTask = async (username, text, complete) => {
    const res = await api.post('/task', { username, task: { text, complete: !complete } });
    console.log('Toggling task on backend...');
    return res;
};

export const removeTask = async (username, text) => {
    const res = await api.post('/removeTask', { username, task: { text } });
    console.log('Removing task on backend...');
    return res;
};