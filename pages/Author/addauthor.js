import { useForm } from 'react-hook-form';
import axios from "axios"
import { useState } from "react"
import MyLayout from '../Layout/layout';
import { useRouter } from 'next/router'
import SessionCheck from '../Layout/sessioncheck';

export default function AddAuthor() {
    const router = useRouter();
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();
    const validateFile = (value) => {
        const file = value[0];
        const allowedtypes = ["image/jpg", "image/png"];

        if (!allowedtypes.includes(file.type)){
            return false;
        }
        }

    const [success, setSuccess] = useState('')
    const onSubmit = async (data) => {
        console.log(data);
        const formData = new FormData();
        formData.append('name', data.name);
        formData.append('username', data.username);
        formData.append('email', data.email);
        formData.append('password', data.password);
        formData.append('contact', data.contact);
        // formData.append('file', data.filename[0]);
        console.log(formData);
        try {
            const response = await axios.post("http://localhost:3001/author/registration",
                formData, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            });

            setSuccess('Author add successfully');
            reset();

        }
        catch (error) {
            console.log(error.response.data.message);
            
            setSuccess('Author add unsuccessfull ' + error.response.data.message);

        }

    };

    return (
        <>
            <SessionCheck />
            <MyLayout title="Add Author" />
            <h1>Add Author</h1>
            {success}
            <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
                <div>
                    <label htmlFor="name">Name</label><br></br>
                    <input
                        type="text"
                        id="name"
                        {...register('name', { required: true })}
                    />
                    {errors.name && <p>Name is required</p>}
                </div>
                <div>
                    <label htmlFor="username">Username</label><br></br>
                    <input
                        type="text"
                        id="username"
                
                        {...register('username', { required: true })}
                    />
                    {errors.username && <p>Username is required</p>}
                </div>
                <div>
                    <label htmlFor="email">Email</label><br></br>
                    <input
                        type="email"
                        id="email"
                        {...register('email', { required: true, pattern: /\S+@\S+\.\S+/ })}
                    />
                    {errors.email && (
                        <p>
                            {errors.email.type === 'required'
                                ? 'Email is required'
                                : 'Invalid email address'}
                        </p>
                    )}
                </div>
                <div>
                    <label htmlFor="password">Password</label><br></br>
                    <input
                        type="password"
                        id="password"
                        {...register('password', { required: true })}
                    />
                    {errors.password && (
                        <p>
                            {errors.password.type === 'required'
                                ? 'password is required'
                                : 'Invalid password pattern'}
                        </p>
                    )}
                </div>
                <div>
                    <label htmlFor="contact">contact</label><br></br>
                    <input
                        type="text"
                        id="contact"
                    {...register('contact', { required: true })} />
                    {errors.contact && <p>contact is required</p>}
                </div>
                {/* <div>
                    <label htmlFor="filename">Filename</label><br></br>
                    <input
                        type="file"
                        id="filename"
                        {...register('filename', { required: true, validate: validateFile })}
                    />
                    {errors.filename && 
                    <p>
                    {errors.filename.type === 'required'
                        ? 'file is required'
                        : 'invalid file'}
                </p>}
                </div> */}
                <button type="submit">Submit</button>
            </form>
            <button type="button" onClick={() => router.back()}>
      Click here to go back
    </button>
        </>
    );
}