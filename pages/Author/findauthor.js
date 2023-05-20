import { useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import UserLayout from '../Layout/userdata';
import MyLayout from '../Layout/layout';
import SessionCheck from '../Layout/sessioncheck';
export default function MyPage({ data }) {

const [inputValue, setInputValue] = useState();

 const router = useRouter();
 const handleInputChange = (e) => {
setInputValue(e.target.value);
}
 const handleFormSubmit = (e) => {

 e.preventDefault();

router.push({
pathname: 'findauthor',
 query: { inputValue: inputValue }
 });

}
return (
 <>
 <SessionCheck/>
<MyLayout title="Find Users"/>
<div className="bg-gray-100">
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="flex justify-center">
 <form onSubmit={handleFormSubmit} className="w-full max-w-sm">
 {/* <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label> */}
 <div className="flex items-center border-b border-b-2 border-teal-500 py-2">
        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        </div>
            <input type="search"  className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" value={inputValue} onChange={handleInputChange}
              id="default-search" class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search user by id" required />
        <button type="submit" className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded">Search</button>
        </div>
        
  
</form>
 </div>
 </div>
 </div>

{data.status == null?
<UserLayout data={data}/>

: data.status }

</>
 );

}
export async function getServerSideProps({ query }) {

const inputValue = query.inputValue;

 try {

 const response = await axios.get('http://localhost:3001/author/findauthor/'+inputValue);

 const data = await response.data;

return {

 props: {

data
}
   };

 } catch (error) {

 return {

props: {
 data: {status:"Enter valid Id"}
}
  };
 }
}