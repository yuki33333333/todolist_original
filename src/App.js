import React, { Component } from 'react';
import './App.css';
import ToDoList from './ToDoList';

class App extends Component {
  constructor(){
    super();

    this.state = {

      ToDoItems: [], //todoのカテゴリとタイトルを保存するstate
    
      }
  }

  handleAddToDo(e){ //新たなtoDoItemをつくる
    const category = e.target.value["category"];
    const title = e.target.value["title"];
    console.log(category, title);
  }

  render(){
    return (
      <div className="App">
        <form >
          <input 
            type = "text"
            id = "category"
            placeholder = "category"
            onChange = { (e) => { this.handleAddToDo(e)}}
          />
          <textarea 
            id = "title"
            placeholder = "title"
            onChange = { (e) => { this.handleAddToDo(e)}}
          />
          <input 
          type = "button" 
          value ="登録" 
          />
        </form>
        <ToDoList 
          category = "aaa"
          title = "aaa"
        />
      </div>
    );
  }
}

export default App;
