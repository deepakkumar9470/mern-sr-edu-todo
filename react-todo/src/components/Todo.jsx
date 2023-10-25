import React, { useState } from "react";
import { CiEdit } from "react-icons/ci";

const Todo = ({ task, onEditTodo,onDeleteTodo, onToggleCompleted }) => {
 

  const handleTodoCompleted = (id) => {
    onEditTodo(id);
  };

  const handleDeleteTodo = (id) => {
    // e.preventDefault();
    onDeleteTodo(id);
  };

  const handleToggleCompleted = (id) => {
    onToggleCompleted(id);
  };


  return (
   <div className="">
       
   </div>
  );
};

export default Todo;
