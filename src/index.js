import React from "react";
import ReactDOM from "react-dom";
import ToDo from "./ToDo";
import ToDoList from "./ToDoList";
import "./styles.css";
import Form from "./Form";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      last: null
    };
    this.addToDo = this.addToDo.bind(this);
    this.removeToDo = this.removeToDo.bind(this);
  }

  addToDo(title, description, habilidade) {
    const newItem = {
      title: title,
      description: description,
      habilidade: habilidade
    };
    this.setState(function(state) {
      return {
        list: state.list.concat([newItem]),
        last: newItem
      };
    });
  }

  removeToDo(index) {
    this.setState(function(state) {
      return {
        list: state.list.filter(function(item, idx) {
          return index !== idx;
        })
      };
    });
  }

  render() {
    return (
      <div>
        <ToDoList list={this.state.list} handler={this.removeToDo} />
        <Form handler={this.addToDo} />
        {this.state.last && (
          <ToDo
            title={this.state.last.title}
            description={this.state.last.description}
            habilidade={this.state.last.habilidade}
          />
        )}
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
