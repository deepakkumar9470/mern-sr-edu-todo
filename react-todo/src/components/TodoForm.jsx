import React, { useState } from "react";
import { CiCirclePlus } from "react-icons/ci";

const TodoForm = ({title, setTitle ,onaddTodoHandler}) => {


 

  return (
    <form onSubmit={onaddTodoHandler}>
      <div
        className={`bg-transparent w-full  flex space-x-2 items-center shadow-lg  rounded-lg px-4`}
      >
        <CiCirclePlus size={28} className="px-0 text-white" />
        <input
          className=" bg-transparent w-full h-fit p-1 py-4 text-lg text-white placeholder:text-gray-200"
          type="text"
          placeholder="Add a new task..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button className=" px-4 uppercase text-white" type="submit">
          Add
        </button>
      </div>
    </form>
  );
};

export default TodoForm;
