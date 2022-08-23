import React,{ useEffect, useState } from "react";
import {BrowserRouter as Router,Route, Routes} from 'react-router-dom'

import AddTask from "./components/AddTask";
import Header from './components/Header';
import Tasks from './components/Tasks';
import Footer from "./components/Footer";
import About from "./components/About";

function App() {

  const[showTask,setShowTask] = useState(()=>{
    return false;
  })

  //each task is acts as a seperate state
  const [taskList,changeTask] = useState([])

  //***fetch tasks from json server***
  useEffect(()=>{

    //call the getResponse function
    //which returns a promise
    //so create a async function => so that i can have promise as a return type
    const getWorkDone = async () => {
      const retPromise = await getResponse();
      //now you can setState
      changeTask(retPromise)
    }

    getWorkDone();

  },[])

  //get data function
  const getResponse = async () =>{
    const response = await fetch('http://localhost:5000/taskList')
    const data = await response.json()
    return data;
  }

  //delete function for tasks
  const deleteTask = (id) =>{

    //modify the json server using method:DELETE
    //use fetch and get the element with that id
    //returns promise so use async function
    const getTaskFromServer = async () =>{
      await fetch(`http://localhost:5000/taskList/${id}`,{method:'DELETE'})
    }

    getTaskFromServer();

    changeTask(taskList.filter((eachTask)=>eachTask.id !== id));
    console.log(taskList.length)
  }

  //add task
  const addNewTask = async (task) =>{
    //just now in object format
    //console.log(task);

    //after passing task has three state variable passed
    //id is added after coming here const => `newObj = {...task,id}`

    /* TO add task in UI only
    const id = Math.floor(Math.random() * 10000) + 1;
    const newOBj = {...task,id} 
    console.log(newOBj);*/

      
    const res = await fetch(`http://localhost:5000/taskList`,{
      method : 'POST',
      headers : {
        'content-type':'application/json'
      },
      body : JSON.stringify(task)
    })
    
    const data = await res.json()

    changeTask([...taskList,data]);
  }

  return (

    <Router>

      <div className="container">
        
        <Header title="To-Do" showTask={showTask} setShowTask={setShowTask} />

        <Routes>
          {/* <Route path='/' exact render={(props)=>(
            <>
              {showTask && <AddTask addon={addNewTask}/>}
              
              {taskList.length>0 ? (<Tasks taskList={taskList} delfunc={deleteTask}/> )
                : ('No tasks to show')}
            </>
          )} /> */}

          <Route path='/' exact element={
            <>
              {showTask && <AddTask addon={addNewTask}/>}
              
              {taskList.length>0 ? (<Tasks taskList={taskList} delfunc={deleteTask}/> )
                : ('No tasks to show')}

              <Footer />
            </>
          } />

        </Routes>

        <Routes>
          <Route path='/about' element={<About />} />
        </Routes>

      </div>

    </Router>

  );
}

export default App;
