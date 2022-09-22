import React from 'react';
import { Link } from 'react-router-dom';

const Admin = () => {
    return (
        <div>
            <h2>This is from Admin</h2>
            <div className="container p-4">
                <div className="row g-4">

                    <div className="addRoom col-lg-4 col-md-6 col-sm-12 p-5 bg-success bg-gradient border rounded">
                        <Link to='/addRoom' className='text-decoration-none  text-light fw-bold fs-2'>Add Room</Link>
                    </div>
                    <div className="addInvigilator col-lg-4 col-md-6 col-sm-12 p-5 bg-warning bg-gradient  border rounded">
                        <Link to='/addInvigilator' className='text-decoration-none  text-light fw-bold fs-2'>Add Invigilator</Link>
                    </div>
                    <div className="addStudent col-lg-4 col-md-6 col-sm-12 p-5 bg-secondary bg-gradient  border rounded">
                        <Link to='/addStudent' className='text-decoration-none  text-light fw-bold fs-2'>Add Student</Link>
                    </div>
                    <div className="generateRoutine col-lg-4 col-md-6 col-sm-12 p-5 bg-danger bg-gradient  border rounded">
                        <Link to='/generateRoutine' className='text-decoration-none  text-light fw-bold fs-2'>Generate Routine</Link>
                    </div>
                    <div className="addTeacher col-lg-4 col-md-6 col-sm-12 p-5 bg-primary bg-gradient  border rounded">
                        <Link to='/addTeacher' className='text-decoration-none  text-light fw-bold fs-2'>Add Teacher</Link>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Admin;