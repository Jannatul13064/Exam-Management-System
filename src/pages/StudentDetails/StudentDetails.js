import React, { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const StudentDetails = () => {
    const { studentId } = useParams();
    const [stu, setStu] = useState({});
    const navigate = useNavigate()
    useEffect(() => {
        fetch(`http://localhost:5000/students/${studentId}`)
            .then(res => res.json())
            .then(data => setStu(data))
    }, []);
    const handleStudentButton = () => {
        navigate('/students')
    }

    return (
        <div>
            <h2>{studentId}</h2>
            <h4>Name : {stu.name}</h4>
            <p>ID : {stu.diuid}</p>
            <p>Email: {stu.email}</p>
            <small>Description {stu.description}</small><br />
            <button onClick={handleStudentButton}>See All Students</button>

        </div>
    );
};

export default StudentDetails;