import React from 'react';

import './style.css';

class Task extends React.Component {
    render() {
        const {
            text = 'Tarefa',
            username = '',
            toggleTodo = () => {},
            removeTodo = () => {},
            complete = false,
        } = this.props;

        return (
            <div className="task-item" style={{ backgroundColor: complete ? '#90ee90' : '#ff6347' }}>
                <span>{text}</span>
                <div className="task-item-controllers">
                    <button type="button" onClick={() => toggleTodo(username, text, complete)}>{ complete ? 'Cancel' : 'Done' }</button>
                    <button type="button" onClick={() => removeTodo(username, text)}>Remove</button>
                </div>
            </div>
        );
    }
}

export default Task