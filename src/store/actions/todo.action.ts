import { ITodoState } from "../reducers/todo.reducer";
import {
  TodoActionTypes,
  GET_TODOS,
  GET_TODOS_SUCCESS,
} from "../types/todo.type";

export const getTodosAction = (): TodoActionTypes => ({
  type: GET_TODOS,
});

export const getTodosActionSuccess = (payload: ITodoState): TodoActionTypes => ({
  type: GET_TODOS_SUCCESS,
  payload,
});
