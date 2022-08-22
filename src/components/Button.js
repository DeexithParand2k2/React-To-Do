import React from "react";

const Button = ({color,text,onMyClick}) =>{

    return(
        <button onClick={onMyClick} style={{backgroundColor:color}} className="btn">{text}</button>
    );
}

export default Button; 