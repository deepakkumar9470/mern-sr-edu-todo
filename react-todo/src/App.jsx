import React, { useState, useEffect } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import axios from "axios"
const API_URL = `http://localhost:5000`

function App() {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState("");


  useEffect(() => {
   const fetchTodos = async () =>{
    try {
      const res = await axios.get(`${API_URL}/api/todo`)
      setTodos(res.data)
    } catch (error) {
     console.log(error) 
    }

   }
   fetchTodos()
  }, [])
  

  const addTodoHandler =  async (e) => {
    e.preventDefault()
    try {
      const res = await axios.post(`${API_URL}/api/todo/create`, {
        title : title
      })
      console.log('Todo created..', res)
      alert("Todo created..")
      window.location.reload()
    } catch (error) {
      console.log(error)
    }
  };

  const editHandler = async (id) => {
    try {
      const res = await axios.put(`${API_URL}/api/todo/${id}`)
      alert("Todo completed..")
      window.location.reload()
    } catch (error) {
      console.log(error)
    }
  };
  const deleteHandler = async (id) => {
    try {
      await axios.delete(`${API_URL}/api/todo/${id}`)
      alert("Todo has been deleted..")
      window.location.reload()
    } catch (error) {
      console.log(error)
    }
  };


  const cleartodos = () => {
    setTodos([]);
  };


 

  return (
    <div
      className={`hero bg-white h-screen md:min-h-[700px]  w-full m-auto flex flex-col items-center mt-14 transition-all duration-500`}
    >
      <div
        className={`flex flex-col space-y-6 w-[600px] md:w-[100%] z-10 p-4 "text-white"`}
      >
        <div className=" w-full flex items-center justify-between">
          <h1 className=" uppercase text-4xl font-bold text-white tracking-widest mb-4 md:text-3xl">
            My todos
          </h1>

       
        </div>
        <div className=" shadow-md">
          <TodoForm 
              title={title}
              setTitle={setTitle}
              onaddTodoHandler={addTodoHandler} />
        </div>
        <div className="mb-4 ">
        {todos.length ? (
            <TodoList
              todos={todos}
              onEditTodo={editHandler}
              onDeleteTodo={deleteHandler}
            />
          ) : (
            <div className=" w-full h-[80%] flex items-center justify-center overflow-hidden">
              <p className=" text-gray-200 text-center z-10">No Todos Found..</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
