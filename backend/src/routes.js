const { Router, response } = require('express');
const routes = Router();

const users = [{ username: 'Hugobsb', tasks: [] }];

routes.get('/getTasks', (req, res) => {
    const { username } = req.query;

    if (typeof username !== 'string') return res.status(400).json('This request has missing or wrong type parameters');

    if (username) {
        const user = (users.find(el => el.username === username))

        return (user) ? res.status(200).json(user.tasks) : res.status(404).json('No users were found');
    }

    return res.status(400).json('This request has missing params');
});

routes.post('/task', (req, res) => {
    const { username, task } = req.body;
    
    if (
        typeof username !== 'string' ||
        typeof task !== 'object' ||
        username.length === 0 ||
        task.text.length === 0 ||
        typeof task.complete === 'undefined' ||
        !task
    ) return res.status(400).json('This request has missing or wrong type parameters');

    const index = users.findIndex(el => el.username === username);
    const taskIndex = users[index].tasks.findIndex(el => el.text === task.text);

    if (taskIndex >= 0) users[index].tasks[taskIndex] = task;
    else users[index].tasks.push(task);

    return res.status(200).json(task);
});

routes.post('/removeTask', (req, res) => {
    const { username, task } = req.body;

    if (!username || username.length === 0 || !task || !task.text) return res.status(400).json('This request has missing or wrong type parameters');

    const index = users.findIndex(el => el.username === username);
    const taskIndex = users[index].tasks.findIndex(el => el.text === task.text);

    users[index].tasks.splice(taskIndex, 1);

    return res.status(200).json(task)
});

module.exports = routes;