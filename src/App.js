import React from "react";
import TodoList from "./components/TodoComponents/TodoList";
import { withStyles } from "@material-ui/core/styles";
import "./App.css";

const styles = theme => ({
  container: {
    maxWidth: "800px",
    margin: "0 auto",
    padding: "40px 40px",
    color: "#5F5F5F",
    fontFamily: "Roboto, sans-serif"
  },
  title: {
    textAlign: "center",
    fontSize: "36px",
    fontFamily: "Titillium Web, sans-serif",
    color: "#2F2F2F"
  }
});

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [
        { task: "Learn Figma", id: 1, completed: true },
        { task: "Start side project", id: 2, completed: false }
      ]
    };
  }

  handleSubmit = item => {
    this.setState({
      todos: [
        { task: item, id: Date.now(), completed: false },
        ...this.state.todos
      ]
    });
  };

  handleToggle = id => {
    this.setState({
      todos: this.state.todos.map(item => {
        if (item.id === id) {
          return {
            ...item,
            completed: !item.completed
          };
        } else {
          return item;
        }
      })
    });
  };

  handleClear = () => {
    this.setState({
      todos: this.state.todos.filter(item => item.completed === false)
    });
  };

  handleDelete = id => {
    this.setState({ todos: this.state.todos.filter(item => item.id !== id) });
  };

  render() {
    const { classes } = this.props;
    console.log(this.props);
    return (
      <div className={classes.container}>
        <h2 className={classes.title}>Welcome to your Todo App!</h2>
        <TodoList
          handleSubmit={this.handleSubmit}
          handleToggle={this.handleToggle}
          handleClear={this.handleClear}
          handleDelete={this.handleDelete}
          todos={this.state.todos}
        />
      </div>
    );
  }
}

export default withStyles(styles)(App);
