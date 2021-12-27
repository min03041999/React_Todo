import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './style.scss';

TodoList.propTypes = {
    todoList: PropTypes.array,
    onTodoClick: PropTypes.func,
};

TodoList.defaultProps = {
    todoList: [],
    onTodoClick: null,
};

function TodoList({todoList, onTodoClick}) { // sử dụng cho ít cái props //object props
    //có 2 cách khai báo
    //const {} = props -> sử dụng cho nhiểu cái props
    //onTodoClick: là thằng cha truyền xuống

    const handleTodoClick = (todo, idex) => {
        if(!onTodoClick) return;

        onTodoClick(todo,idex);
    }
    return (
        <ul className='todo-list'>
            {todoList.map((todo, idx) => (
                <li key={todo.id} className={classnames({
                    'todo-item': true,
                    completed: todo.status === 'completed'
                })}
                //sử dụng onclick
                onClick={() => handleTodoClick(todo, idx)} 
                >{todo.title}</li>
            ))}
        </ul>
    );
}

export default TodoList;