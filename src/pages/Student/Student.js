import React from 'react';
import { Link } from 'react-router-dom';

const Student = (props) => {
    const { _id, name, diuid, email, dept, description, semester } = props.student;

    return (

        <div className='col-lg-4 col-md-6 col-sm-12 border rounded my-2'>
            <h5>Name: {name}</h5>
            <p>ID: {diuid}</p>
            <p>Email: {email}</p>
            <p>Department: {dept}</p>

            <small>Semester {semester}</small><br />
            <Link to={`/students/${_id}`}>See Profile</Link>
        </div>

    );
};

export default Student;