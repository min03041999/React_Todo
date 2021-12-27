import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TodoList from './components/TodoList';

TodoFeature.propTypes = {
    
};

function TodoFeature(props) {
    const initTodoList = [
        {
            id: 1,
            title: 'Eat',
            status: 'new'
        },
        {
            id: 2,
            title: 'Sleep',
            status: 'completed'
        },
        {
            id: 3,
            title: 'Code',
            status: 'new'
        }
    ];

    const [todoList, setTodoList] = useState(initTodoList);
    //initTodoList: mảng giá trị khởi tạo
    //state: là todoList
    //Hàm: setTodoList

    const handleTodoClick = (todo, idx) => {

        // clone current array to the new one
        const newTodoList = [...todoList];

        console.log(todo, idx);
        //toggle state

        // hoặc sử dụng const newTodo = {...}
        newTodoList[idx] = {
            ...newTodoList[idx],
            status: newTodoList[idx].status === 'new' ? 'completed' : 'new',
        }

        //newTodoList[idx] = newTodo
        //update todo list
        setTodoList(newTodoList);

    }

    const [filterStatus, setFilteredStatus] = useState('all');
    //all: lọc theo trạng thái mặc định

    const handleShowAllClick = () => {
        setFilteredStatus('all');
    }

    const handleShowCompletedClick = () => {
        setFilteredStatus('completed');
    }

    const handleShowNewClick = () => {
        setFilteredStatus('new');
    }

    const renderTodoList = todoList.filter(todo => filterStatus === 'all'|| filterStatus === todo.status);
    // console.log(renderTodoList);

    return (
        <div>
            <h3>Todo List</h3>
            <TodoList todoList={renderTodoList} onTodoClick={handleTodoClick}/>

            <div>
                <button onClick={handleShowAllClick}>Show All</button>
                <button onClick={handleShowCompletedClick}>Show All</button>
                <button onClick={handleShowNewClick}>Show All</button>
            </div>
        </div>
    );
}


export default TodoFeature;