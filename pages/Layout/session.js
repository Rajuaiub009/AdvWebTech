import Link from 'next/link';
import { useState, useEffect } from 'react';
import axios from 'axios'
import { useRouter } from 'next/router';

export default function Session() {
  const [username, setUsername] = useState(null);
    const router = useRouter();
    
  useEffect(() => {
      if (typeof window !== 'undefined')// checks if the code is running on the client-side and not on the server-side.
      {
          const session = sessionStorage.getItem('username');
          if (session) {
            setUsername(sessionStorage.getItem('username'));
           
          }          
      }
   
  }, []);

    const handleSignOut = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.get('http://localhost:3001/author/logout')
            console.log(response.data)
            sessionStorage.removeItem('username');
            setUsername(null);
            router.push('/login');
          } catch (error) {
            console.error(error)
          }
    
  };

  return (
    <>
          {username !== null ? (
              <>
               <div class="flex flex-col bg-slate-200 flex-grow">
            <div class="flex items-center flex-shrink-0 h-16 px-8 border-b border-blue-700">
          <><h3 class="text-lg text-blue-700 font-medium" >Welcome {username}</h3></> 
         
          <button class="flex items-center justify-center h-10 px-4 ml-2 text-sm font-medium bg-gray-200 rounded hover:bg-gray-300" onClick={handleSignOut}>Logout</button>
          </div>
          </div>
        {/* <Link href="/Author/authordashboard">DashBoard</Link> */}
            </>
      ) : (
        <Link href="/login">
        </Link>
      )}
     
    </>
  );
}