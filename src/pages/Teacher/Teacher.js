import React from 'react';
import { Link } from 'react-router-dom';
import './Teacher.css';


const Teacher = (props) => {
    const { name, phone, email, website, address, id } = props.teacher;
    return (
        <div className='teacher col-lg-4 col-md-6 col-sm-12 rounded'>
            <h5>Name: {name}</h5>
            <p>ID: {id}</p>
            <a href={"tel:" + phone}>Call: {phone}</a>
            <p>Email: {email}</p>
            <small>Website: {website}</small>
            <small>Address: {address.city}</small><br />
            <Link to={`/teacher/${id}`}>Visit</Link>
        </div>
    );
};

export default Teacher;
