import React from 'react';

import { useState, useEffect } from 'react';
import Student from '../Student/Student';

const Students = () => {
    const [students, setStudents] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/students')
            .then(res => res.json())
            .then(data => setStudents(data))
    }, [])

    return (
        <div>

            <h2>Total Students {students.length}</h2>
            <h2>{students.name}</h2>
            <div className="container">
                <div className="row">
                    {
                        students.map(student => <Student
                            key={student._id}
                            student={student}
                        ></Student>)
                    }

                </div>
            </div>


        </div>
    );
};

export default Students;