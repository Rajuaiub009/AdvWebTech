import { useForm } from 'react-hook-form';
import axios from "axios"
import { useState } from "react"
import { useRouter } from 'next/router'
import SessionCheck from '../Layout/sessioncheck';
import MyHeader from '../Layout/header';
import Link from 'next/link';

export default function AddNews() {
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
    const [error, setError] = useState('')
    const onSubmit = async (data) => {
        console.log(data);
        const formData = new FormData();
        formData.append('title', data.title);
        formData.append('news', data.news);
        formData.append('filename', data.filename[0]);
        console.log(formData);
        try {
            const response = await axios.post("http://localhost:3001/author/insertnews",
            
                formData, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
                
            });

            setSuccess('News added successfully');
            reset();

        }
        catch (error) {
            console.log(error.response.data.message);
            console.log("error22: "+error.message)
            setError('News add unsuccessfull ');
        }
    };
    return (
        <>
        <MyHeader title ="Add News"/>
            <SessionCheck />
            <div class="flex items-center justify-center min-h-screen bg-red">
    <div class="px-8 py-6 mt-4 text-left bg-white shadow-lg">
    
    <div class="mt-4">
    <div>
              <h3 class="text-2xl font-bold text-center">Add News</h3>
       <p id="filled_success_help" class="mt-2 text-xs text-green-600 dark:text-green-400"><span class="font-medium"> {success}</span></p>
      
              <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data" class="space-y-4 md:space-y-6" action="#">
              <div>
                      <label for="title" class="block">Title</label>
                        <input type="text" id="title" class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"  placeholder="name" required=""
                            {...register('title', { required: true })}                
                                        />
{errors.title &&
        <p id="outlined_error_help" class="mt-2 text-xs text-red-600 dark:text-red-400"><span class="font-medium">Title is required</span></p>
}
                  </div>

                  <div>
                 
<label for="news"class="block" >News</label>
<input type='text' id="news"  rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Full Contact here...." {...register('news', { required: true })} />
                        
        {errors.news &&
        <p id="outlined_error_help" class="mt-2 text-xs text-red-600 dark:text-red-400"><span class="font-medium">News is required</span></p>
                        
                    }
                  </div>
                 <div> 
                   
<label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="file_input">Upload file</label>
<input type="file" id="filename" class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
{...register('filename', { })}
/>
{errors.filename && 
                    <p>
           
                </p>}      
                </div>
                          <button type="submit" class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Submit</button>
                          <Link href="/Author/authordashboard" class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"> Return </Link>
              </form>
          </div>
      </div>
  </div>
                        
            </div>
        </>
    );
}