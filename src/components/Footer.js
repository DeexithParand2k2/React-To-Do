import React from "react";
import { Link } from 'react-router-dom';

const Footer = () =>{

    return(
        <footer className="footer">
            <p>Author: Hege Refsnes</p>
            <p><Link to='/About'>About us</Link></p>
        </footer>
    );
}

export default Footer;