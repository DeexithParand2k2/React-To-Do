import React from "react";
import Task from "./Task";

const Tasks = ({taskList,delfunc}) =>{

    return(
        <>
            {
                taskList.map((eachTask)=>(
                    <Task key={eachTask.id} delfunc={delfunc} taskVal={eachTask} style={{borderRadius:"10px",backgroundColor:"whitesmoke",padding:'10px',margin:'5px'}} />
                    // <p key={eachTask.id}>{eachTask.text}</p>
                ))
            }
        </>
    );
}

export default Tasks;