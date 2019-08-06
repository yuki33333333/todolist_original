import React, {Component} from 'react';

class ToDoList extends Component {
    render(){

        const {category, title} = this.props;

        return(
            <div>
             
                <p>{category}</p>
                <p>{title}</p>
                
            </div>
        );
    
    }
}

export default ToDoList;