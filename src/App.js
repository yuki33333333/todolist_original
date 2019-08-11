import React, { Component } from 'react';
import './App.css';
import ToDoList from './ToDoList';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {

      toDoItems: [] //todoのカテゴリとタイトルを保存するstate
    
    }
  };

  handleDelete(props){
    console.log(props);
    this.setState({
      toDoItems: this.state.toDoItems.filter(x => x!== props)
    });
  
  };

  render(){
    return (
      <div className="App">
        <form 
          className="App_form"
          
          onSubmit={ (e) => {
            
            e.preventDefault();

            const categoryElement = e.target.elements["category"];
            const titleElement = e.target.elements["title"];
            
            this.setState(
              {
                toDoItems: this.state.toDoItems.concat(
                  {
                    category: categoryElement.value,
                    title: titleElement.value
                  }
                )
              },
              //stateの変更後に入力した値を空にする
              () => {
                categoryElement.value = "";
                titleElement.value = "";
              }
            );

          }} 
        >
          <input
            className="category_form" 
            type="text"
            placeholder="category"
            id="category"
          />
          <input
            className="title_form"
            placeholder = "title"
            id="title"
          />
          <button type="submit">Add</button>
        </form>
        <div>
          {/*ToDoItems配列の要素数分ToDoListコンポーネントを展開*/}
          {this.state.toDoItems.map(todo => (
            <ToDoList 
            key={todo.title}
            category={todo.category}
            title={todo.title} 
            handleDelete={this.handleDelete}
            />
          ))}
        </div>
        
      </div>
    );
  }
}

export default App;
