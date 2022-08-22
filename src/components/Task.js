import React from "react";
import { FaTimes } from 'react-icons/fa';

const Task = ({taskVal,style,delfunc}) =>{

    return(
        <div style={style}>
            <h5>{taskVal.text} <FaTimes onClick={()=>delfunc(taskVal.id)} style={{color:'red',cursor:'pointer'}}/></h5>
            <p style={{opacity:0.5,fontFamily:"monospace"}}>{taskVal.day}</p>
        </div>
    );
}

export default Task;