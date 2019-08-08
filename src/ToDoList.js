import React, {Component} from 'react';
import './ToDoList.css';

class ToDoList extends Component {
    render(){

        const {category, title} = this.props;

        return(
            <div className="toDoCards">
                <p>{category}</p>
                <p>{title}</p>
            </div>
        );
    
    }
}

export default ToDoList;