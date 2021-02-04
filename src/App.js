import React, { useState } from "react";
import { connect } from "react-redux";

const App = ({ todos }) => {
  const [task, setTask] = useState("");
  return (
    <div>
      <h1>To Do App Redux Template</h1>
      <form onSubmit={(e) => e.preventDefault()}>
        <input value={task} onChange={(e) => setTask(e.target.value)} />
        <button>Add</button>
      </form>
      {!todos
        ? []
        : todos.map((todo) => {
            return <p key={todo.id}>{todo.task}</p>;
          })}
    </div>
  );
};

const mapStateToProps = ({ todos }) => {
  console.log(todos);
  return { todos };
};

export default connect(mapStateToProps)(App);
