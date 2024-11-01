import "./components/todo/todo.css";
import TodoNew from "./components/todo/TodoNew";
import TodoData from "./components/todo/TodoData";
import reactLogo from "./assets/react.svg";

const App = () => {
  const huynv = "Huynv";
  const age = 25;
  const data = {
    address: "Ho Chi Minh",
    contry: "Viet Nam",
  };
  const addNewTodo = () => {
    alert("Call me");
  };
  return (
    <div className="todo-container">
      <div className="todo-title">Todo List</div>
      <TodoNew addNewTodo={addNewTodo} />
      <TodoData name={huynv} age={age} data={data} />
      <div className="todo-image">
        <img src={reactLogo} className="logo" />
      </div>
    </div>
  );
};

export default App;
