import React from 'react';
import './ToDoList.css';

const ToDoList = props => (
    <div className="toDoCards">
        <div className="category">
            <p>{props.category}</p>
        </div>
        <div className="title">
            <p>{props.title}</p>
        </div>
        <div>
        <button
            onClick={()=>{
                props.handleDelete(props);
            }}
        >Delete
        </button>
        </div>
    </div>
);


export default ToDoList;
