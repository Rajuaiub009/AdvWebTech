import { useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import Link from 'next/link';
import SessionCheck from '../Layout/sessioncheck';
import MyHeader from '../Layout/header';

export default function DeleteEditor() {
    const [success, setSuccess] = useState('')
    const [error, setError] = useState('')

    const [inputValue, setInputValue] = useState();
    const router = useRouter();


    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();

        router.push({
            pathname: 'deleteeditor',
            query: { inputValue: inputValue }
        });
    }


    return (
        <>
        <MyHeader title = "Delete Editor"/>
        <SessionCheck/>
         <div className="bg-blue-500 py-4">
        <div className="container mx-auto px-6">

            <h1 className="text-3xl text-center font-semibold text-white">Delete Editor </h1>
            </div>
            </div>
            <form onSubmit={handleFormSubmit}>
            <div className="bg-gray-100" >
        <div className="max-w-10xl mx-auto py-8 sm:px-8 lg:px-10">
          
                <label htmlFor="id" className="font-bold">Enter ID: </label> <></>
                <input type="text" placeholder='Delete Editor By Id' value={inputValue} onChange={handleInputChange} class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" /><br></br><br></br>
                <button type="submit" className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded">Delete</button> &nbsp;&nbsp;&nbsp;&nbsp;
                <Link href="/Author/authordashboard" className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"> Return</Link> <br></br>
                </div>
                </div>

            </form>

        </>
    );
}

export async function getServerSideProps({ query }) {

    const inputValue = query.inputValue;
    try {
        const response = await axios.delete('http://localhost:3001/author/deleteeditor/' +inputValue);
        const data = await response.data;

        console.log("success22: "+success.message)
        setSuccess('Editor Deleted successfully');

        // return {
        //     props: {
        //         data
        //     }
        // };

    } catch (error) {
        // setError("Invalid ID")

        return {
            props: {
                data: { status: "enter valid user id" }
            }
        };
    }
}