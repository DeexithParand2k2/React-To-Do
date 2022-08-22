import React from "react";
import Button from "./Button";

const Header = (props) =>{

    //what button will do onclick
    const onClick = () =>{
        console.log('This is on my click');
    }

    return(
        <div className="head">
            <h1>{props.title}</h1>

            {/*Your button component*/}
            <Button onMyClick={onClick} color='green' text='Add' />
        </div>
    );
}

export default Header;