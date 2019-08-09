import React, {Component} from 'react';
import './ToDoList.css';
import PropTypes from 'prop-types';

const propTypes = {
    handleDelete: PropTypes.func,
};

class ToDoList extends Component {

    clickButton(button){
        console.log(this.state);
        console.log(button);
        return this.props.handleDelete(button);
    }

    render(){

        const {category, title} = this.props;

        return(
            <div className="toDoCards">
                <div className="category">
                    <p>{category}</p>
                </div>
                <div className="title">
                    <p>{title}</p>
                </div>
                <div>
                    <button 
                        onClick={ ()=>{this.clickButton(this);}}
                    >
                    Delete
                    </button>
                </div>
            </div>
        );
    
    }
}

export default ToDoList;