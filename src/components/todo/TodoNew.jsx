import { useState } from "react";
const TodoNew = (props) => {
  console.log(">>> Check: ", props);
  const { addNewTodo } = props;
  //useState hook (getter/setter)
  //const valueInput = "huynv";
  const [valueInput, setValueInput] = useState("huynv");
  //addNewTod("huynv")//fire
  const handleClick = () => {
    addNewTodo(valueInput);
  };
  const handleOnChange = (name) => {
    setValueInput(name);
  };
  return (
    <div className="todo-new">
      <input
        type="text"
        onChange={(event) => {
          handleOnChange(event.target.value);
        }}
      />
      <button style={{ cursor: "pointer" }} onClick={handleClick}>
        Add
      </button>
      <div>My text input is = {valueInput} </div>
    </div>
  );
};
export default TodoNew;
