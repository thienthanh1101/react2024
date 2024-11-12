import TodoNew from "./TodoNew";
import TodoData from "./TodoData";
import "./todo.css";
import reactLogo from "../../assets/react.svg";
import { useState } from "react";
const TodoApp = () => {
  const [todoList, setTodoList] = useState([
    // { id: 1, name: "Learning React" },
    // { id: 2, name: "Watching Youtube" },
  ]);
  //const huynv = "Huynv";
  //const age = 25;
  //const data = {
  // address: "Ho Chi Minh",
  // contry: "Viet Nam",
  //};
  const addNewTodo = (name) => {
    const newTodo = { id: randomIntFromInterval(1, 1000000), name: name };
    setTodoList([...todoList, newTodo]);
  };
  const randomIntFromInterval = (min, max) => {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
  };
  const deleteTodo = (id) => {
    const newTodo = todoList.filter((item) => item.id !== id);
    setTodoList(newTodo);
  };
  return (
    <div className="todo-container">
      <div className="todo-title">Todo List</div>
      <TodoNew addNewTodo={addNewTodo} />
      {todoList.length > 0 ? (
        <TodoData //name={huynv} age={age} data={data}
          todoList={todoList}
          deleteTodo={deleteTodo}
        />
      ) : (
        <div className="todo-image">
          <img src={reactLogo} className="logo" />
        </div>
      )}
      {/* {todoList.length > 0 && (
      <TodoData //name={huynv} age={age} data={data}
        todoList={todoList}
      />
    )}
    {todoList.length === 0 && (
      <div className="todo-image">
        <img src={reactLogo} className="logo" />
      </div>
    )} */}
    </div>
  );
};
export default TodoApp;
