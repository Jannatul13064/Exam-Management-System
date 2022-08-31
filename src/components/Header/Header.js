import React from 'react';
import {
    Link
} from "react-router-dom";
import './Header.css';

const Header = () => {
    return (
        <div className='header-m row'>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/admin">Admin</Link>
                <Link to="/invigilator">Invigilator</Link>
                <Link to="/rooms">Rooms</Link>
                <Link to="/students">Students</Link>
                <Link to="/teachers">Teachers</Link>
                <Link to="/registration">SignUp or LogIn</Link>
            </nav>

        </div>
    );
};

export default Header;