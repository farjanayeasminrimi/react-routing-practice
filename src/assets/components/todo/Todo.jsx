import React from "react";
import { use } from "react";

const Todo = ({ usersDataRes }) => {
  const todos = use(usersDataRes);
  console.log(todos);
  return (
    <div>
      <h2>ToDo List Section</h2>
    </div>
  );
};

export default Todo;
