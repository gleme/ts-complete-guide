import axios from 'axios';
import { Dispatch } from 'redux';
import { ActionTypes } from './types';

const url = 'https://jsonplaceholder.typicode.com/todos';

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

export interface FetchTodosAction {
  type: ActionTypes.FETCH_TODOS;
  payload: Todo[];
}

export interface DeleteTodoAction {
  type: ActionTypes.DELETE_TODO;
  payload: number;
}

function delay(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export const fetchTodos = () => {
  return async (dispatch: Dispatch) => {
    const response = await axios.get<Todo[]>(url);
    await delay(5000);
    dispatch<FetchTodosAction>({
      type: ActionTypes.FETCH_TODOS,
      payload: response.data
    });
  };
}

export const deleteTodo = (id: number): DeleteTodoAction => {
  return {
    type: ActionTypes.DELETE_TODO,
    payload: id
  };
};