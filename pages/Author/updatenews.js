import Link from "next/link"
import axios from "axios"
import { useState } from "react"
import SessionCheck from "../Layout/sessioncheck";
import MyHeader from '../Layout/header';
// import { useRouter } from "next/router"

const config = {
    headers: {
        'Content-Type': 'application/json'
    }
};

export default function UpdateNews() {
    const [news, setNews] = useState('')
    const [id, setid] = useState('')
    const [success, setSuccess] = useState('')
    const [error, setError] = useState('')
    // const router = useRouter();

    const handleSubmit = async (event) => {
        event.preventDefault()
        console.log(news)
        console.log(id)
        
        try {
            const response = await axios.put("http://localhost:3001/author/editnews/", { id,news }, config)
            console.log("res: " + response.data)
            // console.log("update successful")
            console.log("success22: "+success.message)
            setSuccess("Updated Successfully")

            sessionStorage.setItem('news', response.data);

        } catch (error) {
            console.log("error22: " + error.message)
            setError("invalid")
            
        }
    }
    return (
        <>
        <SessionCheck/>
        <MyHeader title = "Update News"/>
        

            <div class="flex items-center bg-slate-700 justify-center min-h-screen bg-red">
    <div class="px-8 py-6 mt-4 text-left bg-slate-200 shadow-lg">
    <h2 class="text-2x1 font-bold text-center">Update News</h2>
    <div class="mt-4">
       
       <p id="filled_success_help" class="mt-2 text-xs text-green-600 dark:text-green-400"><span class="font-medium"> {success}</span></p>
       <form onSubmit={handleSubmit}>
                            
                             <div>
                            
                                <label for="id" className="block font-bold" > Enter ID </label>

                                <input type="text" value={id} onChange={(e) => setid(e.target.value)}  class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" placeholder="Please enter news Id" />

                                </div>
                                <br></br>
        
                            <div>
                                <label for="news" className="block font-bold">Enter News</label>
                                <input type="text" value={news} onChange={(e) => setNews(e.target.value)} class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" placeholder="Please enter news"/>
                           </div>
                           
                            <br></br>
                            <button type="submit" class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" >Submit</button>
                            <Link href="/Author/authordashboard" class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"> Return </Link>
                
                            {/* {error &&
                  <div>
                    
                    <p id="outlined_error_help" class="mt-2 text-xs text-red-600 dark:text-red-400"><span class="font-medium">{error}</span></p>
                  </div>} */}
                  
                  </form>
                  </div>
                  </div>
                  </div>
        </>
    )
}
