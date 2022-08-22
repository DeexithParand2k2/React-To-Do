import React,{ useState } from "react";
import AddTask from "./components/AddTask";
import Header from './components/Header';
import Tasks from './components/Tasks';


function App() {

  //each task is acts as a seperate state
  const [taskList,changeTask] = useState(()=>{
    return [
      {
        "id": 1,
        "text": "Doctors Appointment",
        "day": "Feb 5th at 2:30pm",
        "reminder": true
      },
      {
        "id": 2,
        "text": "Meeting at School",
        "day": "Feb 6th at 1:30pm",
        "reminder": true
      },
      {
        "id": 3,
        "text": "Bhu's appointment",
        "day": "Jan 3rd at 2:30pm",
        "reminder": true
      },
      {
        "id": 4,
        "text": "Sanjay Appointment",
        "day": "Dec 4th at 1:30pm",
        "reminder": true
      },
    ]
  })

  //delete function for tasks
  const deleteTask = (id) =>{
    changeTask(taskList.filter((eachTask)=>eachTask.id !== id));
    console.log(taskList.length)
  }

  //add task
  const addNewTask = (task) =>{
    //just now in object format
    console.log(task);

    const id = Math.floor(Math.random() * 10000) + 1;

    const newOBj = {...task,id} 

    console.log(newOBj);

    changeTask([...taskList,newOBj]);
  }

  return (
    <div className="container">
      
      <Header title="To-Do" />

      <AddTask addon={addNewTask}/>
      
      {taskList.length>0 ? (<Tasks taskList={taskList} delfunc={deleteTask}/> )
        : ('No tasks to show')}
    </div>
  );
}

export default App;
