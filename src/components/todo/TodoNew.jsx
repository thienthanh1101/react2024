const Todonew = (props) => {
  console.log(">>> Check: ", props);
  const { addNewTodo } = props;
  //addNewTod("huynv")//fire
  const handleClick = () => {
    alert("Click me");
  };
  const handleOnChange = (name) => {
    console.log(">>>handleOnChange", name);
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
    </div>
  );
};
export default Todonew;
