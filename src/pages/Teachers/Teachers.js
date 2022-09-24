import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Teacher from '../Teacher/Teacher';

const Teachers = () => {
    const [teachers, setTeachers] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/teachers')
            .then(res => res.json())
            .then(data => setTeachers(data))
    }, [])
    return (
        <div>
            <h2 className=''>This is from Teachers</h2>
            <h3>Total Number of Teachers : {teachers.length}</h3>
            <div className="container">
                <div className="row p-4">
                    {
                        teachers.map(teacher => <Teacher
                            key={teacher._id}
                            teacher={teacher}
                        ></Teacher>)
                    }

                </div>
            </div>
        </div>
    );
};

export default Teachers;