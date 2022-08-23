import React from "react";
import { Link } from "react-router-dom";

const About = () =>{
    return(
        <>
            <p>Version:2.1.0</p>
            <p><Link to='/'>Go Back</Link></p>
        </>
    )
}

export default About;