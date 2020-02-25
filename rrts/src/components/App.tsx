import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Todo, fetchTodos, deleteTodo } from '../actions';
import { StoreState } from '../reducers';
import logo from '../logo.svg';
import './App.css';

interface AppProps {
  todos: Todo[];
  fetchTodos: Function;
  deleteTodo: typeof deleteTodo;
}

class _App extends Component<AppProps> {

  state = { fetching: false };

  componentDidUpdate(prevProps: AppProps): void {
    if (!prevProps.todos.length && this.props.todos.length) {
      this.setState({ fetching: false });
    }
  }

  onTodoClick = (id: number): void => {
    this.props.deleteTodo(id);
  }

  onButtonClick = (): void => {
    this.props.fetchTodos();
    this.setState({ fetching: true });
  }

  render() {
    return (
      <div className="App">
      <header className="App-header">
        { this.state.fetching ? <img src={logo} className="App-logo" alt="logo" /> : null }
        <button onClick={this.onButtonClick} disabled={this.state.fetching} hidden={this.state.fetching}>Fetch</button>
        <h2>Todo List: </h2>
        { this.props.todos.map((todo: Todo) => (<p onClick={() => this.onTodoClick(todo.id) } key={todo.id}>{todo.title}</p>))}
      </header>
    </div>
    )
  }
}

const mapStateProps = ({ todos }: StoreState): { todos: Todo[] } => {
  return  { todos };
}
 

export default connect(mapStateProps, { fetchTodos, deleteTodo })(_App);