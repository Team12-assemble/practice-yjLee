import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      // console.log("action", action);
      return [...state, action.payload.newTodo];
    },
    deleteTodo: (state, action) => {
      // console.log(action);
      // payload => id
      return state.filter((todo) => todo.id !== action.payload);
    },
    doneTodo: (state, action) => {
      //payload => {id,done}
      return state.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, done: !action.payload.done }
          : todo
      );
    },
  },
});

export const { addTodo, deleteTodo, doneTodo } = todosSlice.actions;
export default todosSlice.reducer;
