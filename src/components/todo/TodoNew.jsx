const Todonew = (props) => {
  console.log(">>> Check: ", props);
  const { addNewTodo } = props;
  return (
    <div className="todo-new">
      <input type="text" />
      <button>Add</button>
    </div>
  );
};
export default Todonew;
