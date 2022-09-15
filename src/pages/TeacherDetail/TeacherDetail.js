import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const TeacherDetail = () => {
    const { teacherId } = useParams();
    const [teacher, setTeacher] = useState({});
    const navigate = useNavigate()


    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/users/${teacherId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setTeacher(data));
    }, [])

    const handleTeachersButton = () => {
        navigate('/teachers')
    }
    return (
        <div>
            <h4>This is Teacher details ID : {teacherId}</h4>
            <h4>Name{teacher.name}</h4>
            <p>Website:{teacher.website}</p>
            <p>Email:{teacher.email}</p>
            <p>Company:{teacher.company?.name}</p>
            <button onClick={handleTeachersButton}>See All Teachers</button>
        </div>
    );
};

export default TeacherDetail;