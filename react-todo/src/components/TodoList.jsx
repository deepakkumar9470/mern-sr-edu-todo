import React from "react";
import { BsCheckCircleFill, BsCircleFill } from "react-icons/bs";
import { AiOutlineDelete } from "react-icons/ai";
import { FcOk } from "react-icons/fc";

const TodoList = ({ todos, onEditTodo, onDeleteTodo }) => {

  return (
<div className="bg-mainbg min-h[500px] rounded-md p-5">
    
            { 
            todos?.map((todo)=>(
                 <div key={todo._id} className="flex items-center border-b-2 py-2 border-b-gray-600  justify-between ">

                    <div 
                      onClick={()=>onEditTodo(todo._id)}
                       className="flex items-center justify-between gap-10">
                      {
                        todo.isCompleted ?
                        <FcOk fontSize={20} className=" text-white  cursor-pointer"/>
                        :
                        <BsCircleFill fontSize={20} className="text-white cursor-pointer"/>
                      }
                      <p className={`${todo.isCompleted ? "line-through" : ""} text-xl font-semibold text-gray-100 cursor-pointer`}>{todo.title}</p>
                    </div>
                    <div className="cursor-pointer">
                      <AiOutlineDelete 
                      onClick={()=>onDeleteTodo(todo._id)}
                      className="text-gray-200 hover:text-red-500 cursor-pointer "/>
                    </div>

                 </div>
            ))
          }
             
   
</div>
  );
};

export default TodoList;
