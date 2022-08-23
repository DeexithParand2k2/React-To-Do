import React from "react";
import Button from "./Button";

const Header = ({ title,showTask,setShowTask }) =>{

    //what button will do onclick
    const onClick = () =>{
        setShowTask(!showTask)
    }

    return(
        <div className="head">
            <h1>{title}</h1>

            {/*Your button component*/}
            {
                showTask===true ? (<Button onMyClick={onClick} color='tomato' text='Close' />) 
                :   
                (<Button onMyClick={onClick} color='green' text='Add' />)   
            }
        </div>
    );
}

export default Header;