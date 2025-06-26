import { useState } from "react";

function Todo() {
const [task, setTask] = useState([
  "Assignment",
  "Coffee",
]);
const [input, setInput] = useState("");
function handleInput(event){
    setInput(event.target.value)
}

function addTask(){
setTask(t=> [...t,input]);
setInput("");
  }

function deleteTask (idx) {
    const updateTask = task.filter((_,i)=> i!==idx) ;
    setTask(updateTask);
}


    return (

    <>
    <div className="Nav bg-red-600 flex justify-center p-2">
        <h1 className="text-white text-2xl">Todo List</h1>
    </div>

<div className="container mx-auto mt-5 bg-gray-300 mh-[400px] p-5">
    <div className="flex justify-center">
        <input type="text" placeholder="Enter Task" value={input} onChange={handleInput} className="bg-white p-1 h-10 mr-2"/>
    <button onClick={addTask} className="bg-red-500 text-white p-1 h-10">Add Task</button>

    </div>
<div className="TaskList mt-3 p-5">
    <ul className="text-xl list-disc">
        {task.map((title,idx)=> (
            <li key={idx}>{title} <button onClick={() => deleteTask(idx)} className="bg-white ml-2 p-1 hover:bg-red-600">X</button></li>
        ))}
    </ul>
</div>

</div>
    </>
      );
}

export default Todo ;