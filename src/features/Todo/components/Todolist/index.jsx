import React from "react";
import PropTypes from "prop-types";
import "./style.css";
function TodoList(props) {
  const { todoList } = props;
  return (
    <ul>
      {todoList.map((todo) => (
        <li key={todo.id}>{todo.title}</li> // Can break to Todo Item component when item is too complicated.
      ))}
    </ul>
  );
}

TodoList.propTypes = {
  todoList: PropTypes.array.isRequired,
};

export default TodoList;
