import React, { Component } from 'react';
import './App.css';
import ToDoList from './ToDoList';

class App extends Component {
  constructor(props){
    super(props);
    this.handleDelete = this.handleDelete.bind(this)
    this.getUniqueStr = this.getUniqueStr.bind(this)
    this.state = {
      toDoItems: [] //todoのカテゴリとタイトルを保存するstate
    }
  };

  handleDelete(props){
    console.log(props);
    console.log(this.state.toDoItems);

    this.setState({
      toDoItems: this.state.toDoItems.filter(x => x.id !== props.id)
    });
  };

  getUniqueStr(myStrong){
    var strong = 1000;
    if (myStrong) strong = myStrong;
    return new Date().getTime().toString(16)  + Math.floor(strong*Math.random()).toString(16)
  }

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
                    id: this.getUniqueStr(),
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
            key={todo.id}
            id={todo.id}
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
