import React, { Component } from 'react';
import './App.css';
import ToDoList from './ToDoList';

class App extends Component {
  constructor(){
    super();

    this.state = {

      toDoItems: [] //todoのカテゴリとタイトルを保存するstate
    
      }
  }


  render(){
    return (
      <div className="App">
        <form 
          className="App_form"
          onSubmit={e => {

            e.preventDefault();

            const categoryElement = e.target.elements["category"]
            const titleElement = e.target.elements["title"];
            
            console.log(categoryElement.value);

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
            type="text"
            placeholder="category"
            id="category"
          /><br/>
          <input 
            placeholder = "title"
            id="title"
          /><br/>
          <button type="submit">Add</button>
        </form>
        <div>
          {/*ToDoItems配列の要素数分ToDoListコンポーネントを展開*/}
          {this.state.toDoItems.map(todo => (
            <ToDoList 
            key={todo.title}
            category={todo.category}
            title={todo.title}
            />
          ))}
        </div>
        
      </div>
    );
  }
}

export default App;
