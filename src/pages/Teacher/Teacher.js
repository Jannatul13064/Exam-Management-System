import React from 'react';
import './Teacher.css';


const Teacher = (props) => {
    const { name, phone, email, website, address } = props.teacher;
    return (
        <div className='teacher col-lg-4 col-md-6 col-sm-12 rounded'>
            <h5>Name: {name}</h5>
            <a href={"tel:" + phone}>Call: {phone}</a>
            <p>Email: {email}</p>
            <small>Website: {website}</small>
            <small>Address: {address.city}</small>
        </div>
    );
};

export default Teacher;