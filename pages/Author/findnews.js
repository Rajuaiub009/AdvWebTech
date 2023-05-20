import { useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import Layout from '../Layout/newslayout';
// import MyLayout from '../Layout/layout';
import SessionCheck from '../Layout/sessioncheck';
import MyHeader from '../Layout/header';

export default function MyPage({ data }) {

const [inputValue, setInputValue] = useState();

 const router = useRouter();
 const handleInputChange = (e) => {
setInputValue(e.target.value);

}
 const handleFormSubmit = (e) => {
 e.preventDefault();

router.push({

pathname: 'findnews',
 query: { inputValue: inputValue }

 });

}
return (
 <>
 <MyHeader title = "Search News"/>
 <SessionCheck/>
<center>
{/* <MyLayout /> */}
 <form onSubmit={handleFormSubmit}>
 <div className="max-w-100 bg-slate-700 py-20 ">
<input type="text" placeholder='Search News By Id' class="w-80 px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" value={inputValue} onChange={handleInputChange} /> &nbsp;
 <button type="submit"  className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded">Search</button>
 </div>
 </form>

{data.status == null?
<Layout data={data}/>
: data.status}
</center>
</>
 );

}
export async function getServerSideProps({ query }) {

const inputValue = query.inputValue;

 try {

 const response = await axios.get('http://localhost:3001/author/findnews/'+inputValue);

 const data = await response.data;

return {

 props: {

data

}
  };

 } catch (error) {

 return {
props: {
 data: {status:"Enter valid id"}
}
 };
}
}