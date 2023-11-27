import React from "react";
import TodoList from "../components/Todolist";

function TodoFeature(props) {
  const todoList = [
    {
      id: 1,
      title: "Do something 1",
    },
    {
      id: 2,
      title: "Do something 2",
    },
    {
      id: 3,
      title: "Do something 3",
    },
  ];
  return (
    <>
      <div>TodoFeature</div>
      <TodoList todoList={todoList} />
    </>
  );
}

TodoFeature.propTypes = {};

export default TodoFeature;
