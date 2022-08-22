import React, { useEffect, useState } from "react";

//why the state variable must be the same

const AddTask = ({ addon }) =>{

    const [text,setTask] = useState('');
    const [day,setDay] = useState('');
    const [reminder,setReminder] = useState(false);

    // useEffect is working
    // useEffect(()=>{
    //     console.log(`state variable ${text} changed`);
    // },[text])

    const onSubmit = (e) =>{

        e.preventDefault();

        if(!text){
            alert('Please add a new task');
            return 
        }

        addon({ text, day, reminder });

        setTask('');
        setDay('');
        setReminder(false);
    }

    return(
        <form className="form-box" onSubmit={onSubmit}>
            <label>Add Task</label>
            <input placeholder="add new task" value={text} onChange={(e) => setTask(e.target.value)} type="text"></input>
            
            <br></br>
            
            <label>Day & Date</label>
            <input placeholder="Day & time" value={day} onChange={(e) => setDay(e.target.value)} type="text"></input>
            
            <br></br>
            
            <label>reminder</label>
            <input value={reminder} checked={reminder} onChange={(e) => setReminder(e.currentTarget.checked)} type="checkbox" ></input>

            <br></br>

            <input type='submit' value='save' />
        </form>
    );
}

export default AddTask;