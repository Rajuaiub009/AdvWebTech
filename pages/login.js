import { useState } from 'react'
import axios from 'axios'
import MyLayout from './Layout/layout';
import { useRouter } from 'next/router';
import Link from 'next/link';
export default function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const router = useRouter();
  const handleSubmit = async (event) => {
    event.preventDefault()
    
    try {
      const response = await axios.post("http://localhost:3001/author/login", { username, password } )
      console.log("res: "+response.data)
      console.log("login Successful")
        sessionStorage.setItem('username', response.data);
        router.push('/Author/authordashboard');

    } catch (error) {
        console.log("error22: "+error.message)
      setError("invalid Username or Password")
    }
  }

    return (
    <div class="flex items-center justify-center min-h-screen bg-red">
    <div class="px-8 py-6 mt-4 text-left bg-white shadow-lg">
    <MyLayout title="Login" /> 
    
            <form onSubmit={handleSubmit}>
    <div class="mt-4">
    <div>
    <h3 class="text-2xl font-bold text-center">Login to your account</h3>
    <label class="block" for="username">Username</label>
    
        <input type="text" placeholder='Enter Username'  class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" value={username} onChange={(e) => setUsername(e.target.value)}  /><br></br>
        </div>
        <div class="mt-4">
      
      <label class="block" for="password">Password</label>
        
        <input type="password" placeholder='Enter Password'  class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" value={password} onChange={(e) => setPassword(e.target.value)}  />
        </div>
      
      <div class="flex items-baseline justify-between"></div>
      <button class="px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900">Login</button> &nbsp; &nbsp; &nbsp;
      < Link href="/Author/registration" class="px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900">Registration</Link>
      {error &&
                  <div>
                    
                    <p id="outlined_error_help" class="mt-2 text-xs text-red-600 dark:text-red-400"><span class="font-medium">{error}</span></p>
                  </div>}
                  <div class="flex items-baseline justify-between"></div>
      
      </div>
      </form>
      </div>
      </div>           
  )
}