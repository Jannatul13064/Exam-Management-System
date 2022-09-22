import React from 'react';
import {
    Link
} from "react-router-dom";
import './Header.css';

const Header = () => {
    return (
        <div className='header-m row sticky-top'>
            {/* <nav>
                <Link to="/">Home</Link>
                <Link to="/admin">Admin</Link>
                <Link to="/invigilator">Invigilator</Link>
                <Link to="/rooms">Rooms</Link>
                <Link to="/students">Students</Link>
                <Link to="/teachers">Teachers</Link>
                <Link to="/registration">SignUp or LogIn</Link>
            </nav> */}
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <Link className="navbar-brand fw-bold" to="/">DIU EMS</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/admin">Admin</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/invigilator">Invigilator</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/rooms">Rooms</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/students">Students</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/teachers">Teachers</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/registration">SignUp or LogIn</Link>
                            </li>
                            <li className='nav-item'>
                                <form action="" className='py-2 px-2'>
                                    <input type="text" placeholder='Search-Here' />
                                    <input type="submit" value="Search" />
                                </form>
                            </li>
                        </ul>
                        <span className="navbar-text">
                            User:
                        </span>
                    </div>
                </div>
            </nav>

        </div>
    );
};

export default Header;