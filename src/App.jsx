import { useEffect, useState } from 'react'
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { v4 as uuidv4 } from 'uuid';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import './App.css'

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [showFinished, setShowFinished] = useState(true);

  useEffect(()=>{
    let todoString = localStorage.getItem("todos")
    if(todoString){
      let todosData = JSON.parse(localStorage.getItem("todos")); 
      setTodos(todosData);
    }
  },[]);

  const handleSubmit = ()=>{
    if(todo === ""){
      alert("Please write smething to add in to do list")
      return;
    }
    setTodos([{id: uuidv4(), todoItem:todo, isCompleted:false}, ...todos]);
    localStorage.setItem("todos", JSON.stringify([{id: uuidv4(), todoItem:todo, isCompleted:false}, ...todos]));
    setTodo("");
  }

  const handleOnChange = (e, id)=>{
    setTodo(e.target.value);
  }

  const handleEdit = (e, id)=>{
    let nonMatchItem = [];
    let matchItem = todos.filter((item)=> {
      if(item.id === id){
        return item;
      }
      else{
        if(nonMatchItem.length <= 0){
          nonMatchItem = [item];
        }
        else{
          nonMatchItem = [...nonMatchItem, item];
        }
      }
    });

    setTodo(matchItem[0].todoItem);
    setTodos(nonMatchItem);
    localStorage.setItem("todos", JSON.stringify(nonMatchItem));
  }

  const handleDelete = (e, id)=>{
    let matchItem = todos.filter((item)=>item.id !== id);
    setTodos(matchItem);
    localStorage.setItem("todos", JSON.stringify(matchItem));
  }

  const handleCheckbox = (e)=>{
    let id = e.target.name;
    let index = todos.findIndex((item)=> item.id === id);
    let newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos);
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  const handleShowCompleted = ()=>{
    setShowFinished(!showFinished);
  }

  return (
    <>
      <Navbar/>   
      <div className=" max-[639px]:w-[95vw] mx-auto my-2 bg-black h-[620px] w-[90vw] text-yellow-300 sm:w-[95vw] md:w-[95vw] lg:w-[80vw] max-[490px]:top-20 max-[300px]:top-16 top-24 max-[490px]:mb-24 max-[300px]:mb-20 mb-28 relative">
        <div className="top-1/4">
          <div className="heading mx-auto p-4 flex justify-center font-bold ">
            <h2 className="text-4xl max-[639px]:text-3xl tracking-wider">TODO APP</h2>
          </div>
          <div className='max-[639px]:flex-col max-[639px]:mx-2 max-[639px]:items-center max-[639px]:mb-3 flex justify-center text-black mb-5'>
            <input placeholder='Enter your task here.....' onChange={handleOnChange} type="text" value={todo} className='max-[639px]:w-10/12 w-[500px] rounded-2xl pl-3 sm:w-[400px]'/>
            <button onClick={handleSubmit} className="max-[639px]:ml-0 max-[639px]:text-sm max-[639px]:p-1 max-[639px]:w-5/12 max-[639px]:mt-2 bg-yellow-300 ml-5 p-3 py-1 rounded-2xl font-bold hover:bg-orange-400">Add Todo</button>
          </div>
          <div className="flex justify-center text-center items-center">
            <input className="max-[639px]:h-3 max-[639px]:w-3 h-4 w-4 mr-7 cursor-pointer" type="checkbox" onChange={handleShowCompleted} checked={showFinished}/>
            {showFinished ? <p className='max-[639px]:text-sm'>Hide Completd Task </p> : <p>Show Completed Task</p>}
          </div>
          <div className="max-[639px]:w-11/12 sm:w-[90vw] md:w-[85vw] lg:w-[65vw] bg-yellow-300 h-1 rounded-md mx-auto m-2"></div>
        </div>

        <div className="overflow-scroll overflow-x-hidden h-[420px] max-[639px]:h-4/6">
          {todos.length <= 0 ? <p className="flex justify-center items-center">Todo list is empty.</p> : 
            todos.map((item)=>{
              return (showFinished || !item.isCompleted) && <div key={item.id} className="todo-list flex justify-between sm:w-[80vw] md:w-[80vw] lg:w-[55vw] mx-auto max-[639px]:w-10/12 max-[639px]:pb-2">
                <div className='flex items-center '>
                  <input className="h-4 w-4 cursor-pointer max-[639px]:h-3 max-[639px]:w-3" onChange={handleCheckbox} type="checkbox" name={item.id} checked={item.isCompleted} />
                  <p className={item.isCompleted ? "line-through text-white ml-4  text-left text-lg max-[639px]:text-sm max-[639px]:ml-2" : " todo text-white ml-4  text-left text-lg max-[639px]:text-sm max-[639px]:ml-2"}>{item.todoItem}</p>
                </div>
                <div className="flex text-center items-center">
                  <button onClick={(e)=>handleEdit(e, item.id)} className="ml-5 p-3 py-1 text-2xl font-bold hover:text-green-500 max-[639px]:ml-1 max-[639px]:text-lg max-[639px]:p-0 max-[639px]:py-0"><FaEdit /></button>
                  <button onClick={(e)=>handleDelete(e, item.id)} className="ml-5 p-3 py-1 text-3xl font-bold hover:text-red-600 max-[639px]:ml-2 max-[639px]:text-xl max-[639px]:p-0 max-[639px]:py-0"><MdDeleteForever /></button>
                </div>
              </div>;
            })
          }
        </div>
        
      </div>
      <Footer/>
    </>
  )
}

export default App
