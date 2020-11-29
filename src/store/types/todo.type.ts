import { Action } from "redux";

import { ITodo } from "../../shared/interfaces/todo.interface";
import { ITodoState } from "../reducers/todo.reducer";

export const GET_TODOS = "GET_TODOS";
export const GET_TODOS_SUCCESS = "GET_TODOS_SUCCESS";
export const UPDATE_TODO = "UPDATE_TODO";

interface IGetTodoaction extends Action<typeof GET_TODOS> {}

interface IGetTodoSuccessAction extends Action<typeof GET_TODOS_SUCCESS> {
  payload: ITodoState;
}

interface IUpdateTodoAction extends Action<typeof UPDATE_TODO> {
  payload: ITodo;
}

export type TodoActionTypes =
  | IGetTodoSuccessAction
  | IGetTodoaction
  | IUpdateTodoAction;
