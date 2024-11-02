const TodoData = (props) => {
  //const TodoData = ({ name }) => {
  //props is var object{}
  const { todoList } = props; // by other const name=props.name; const age=props.age;
  //console.log(">>> Check props:", props);
  return (
    <div className="todo-data">
      {todoList.map((item, index) => {
        console.log(">>> Check map:", item, index);
        return (
          <div className={`todo-Item`} key={item.id}>
            <div> {item.name}</div>
            <button>Delete</button>
          </div>
        );
      })}
    </div>
  );
};
export default TodoData;
