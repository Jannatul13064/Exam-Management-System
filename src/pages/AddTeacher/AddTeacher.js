import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";

const AddTeacher = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        const url = `http://localhost:5000/teachers`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
            })
        console.log(data)
    };
    return (
        <div className='w-50 mx-auto'>
            <h2>This is Add Teacher</h2>

            <form onSubmit={handleSubmit(onSubmit)} className="d-flex flex-column">
                <input className='mb-2' placeholder='Enter Your Name'{...register("name")} />
                <input className='mb-2' placeholder='Your Varsity ID'{...register("id")} />
                <input className='mb-2' placeholder='Your Phone Number'{...register("phone")} />
                <input className='mb-2' placeholder='Email'{...register("email")} />
                <input className='mb-2' placeholder='Personal Website Address'{...register("website")} />
                <textarea className='mb-2' placeholder='Description'{...register("description")} />
                <input className='mb-2' placeholder='Insert your Photo URL'{...register("photoUrl")} />
                <input type='password' className='mb-2' placeholder='Password'{...register("password")} />
                <select {...register("gender")} className='mb-2'>
                    <option value="female">female</option>
                    <option value="male">male</option>
                    <option value="other">other</option>
                </select>
                <input type="submit" value='Add Teacher' />
            </form>



            <Link to='/admin'>Go Back</Link>

        </div>
    );
};

export default AddTeacher;