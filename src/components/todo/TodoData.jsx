const TodoData = (props) => {
  //const TodoData = ({ name }) => {
  //props is var object{}
  const { name, age, data } = props; // by other const name=props.name; const age=props.age;
  //console.log(">>> Check props:", props);
  return (
    <div className="todo-data">
      <div>My name is {name}</div>
      <div> Learning React </div>
      <div> Watching Youtube </div>
      <div>{JSON.stringify(props.todoList)}</div>
    </div>
  );
};
export default TodoData;
