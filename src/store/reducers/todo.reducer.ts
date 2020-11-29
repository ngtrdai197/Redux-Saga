import { ITodo } from "../../shared/interfaces/todo.interface";
import {
  GET_TODOS,
  GET_TODOS_SUCCESS,
  TodoActionTypes,
} from "../types/todo.type";

export interface ITodoState {
  todos: ITodo[];
  error?: { [key: string]: any };
  loading: boolean;
}

const initialState: ITodoState = {
  todos: [],
  error: undefined,
  loading: false,
};

export default function todoReducer(
  state: ITodoState = initialState,
  action: TodoActionTypes
): ITodoState {
  switch (action.type) {
    case GET_TODOS:
      return {
        ...state,
        todos: [],
        error: undefined,
        loading: true,
      };
    case GET_TODOS_SUCCESS:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
}
