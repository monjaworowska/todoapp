import React from "react";
import { connect } from "react-redux";

const App = ({ todos }) => {
  return (
    <div>
      <h1>To Do App Redux Template</h1>
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
