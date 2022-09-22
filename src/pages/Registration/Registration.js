import React from 'react';
import { useForm } from "react-hook-form";

const Registration = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <div className='w-50 mx-auto'>
            <h2>This is registration and LogIn Page.</h2>

            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-2' placeholder='Name' {...register("name", { required: true, maxLength: 20 })} />
                <input className='mb-2' placeholder='Email' {...register("email", { pattern: /^[A-Za-z]+$/i })} />
                <input className='mb-2' placeholder='University ID' {...register("varsityID", { required: true, maxLength: 20 })} />
                <input className='mb-2' type='password' placeholder='password' {...register("password", { required: true, maxLength: 20 })} />

                <select {...register("Role")} className='mb-2'>
                    <option value="Student">Student</option>
                    <option value="Teacher">Teacher</option>
                    <option value="Admin">Admin</option>
                </select>
                <input type="submit" className='btn btn-primary' />
            </form>
        </div>
    );
};

export default Registration;