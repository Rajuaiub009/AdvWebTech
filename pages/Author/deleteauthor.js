import { useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import Link from 'next/link';
import SessionCheck from '../Layout/sessioncheck';
import MyHeader from '../Layout/header';

export default function Delete() {
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
            pathname: 'deleteauthor',
            query: { inputValue: inputValue }
        });
    }


    return (
        <>
        <MyHeader title = "Delete Author"/>
        <SessionCheck/>
            <h1>Delete Author </h1>
            {success}
            <form onSubmit={handleFormSubmit}>
                <label htmlFor="id">Enter ID: </label> <></>
                <input type="text" value={inputValue} onChange={handleInputChange} />
                <br></br>
                <button type="submit">Delete</button> <br></br>
                <Link href="/Author/authordashboard"> Return</Link> <br></br>

            </form>

        </>
    );
}

export async function getServerSideProps({ query }) {

    const inputValue = query.inputValue;
    try {
        const response = await axios.delete('http://localhost:3001/author/deleteauthor/' +inputValue);
        const data = await response.data;
        setSuccess("Deleted Successfuly")

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