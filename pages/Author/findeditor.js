import { useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import UserLayout from '../Layout/userdata';
import MyLayout from '../Layout/layout';

export default function MyPage({ data }) {

const [inputValue, setInputValue] = useState();

 const router = useRouter();
 const handleInputChange = (e) => {
setInputValue(e.target.value);

}

 const handleFormSubmit = (e) => {

 e.preventDefault();

router.push({

pathname: 'findeditor',

 query: { inputValue: inputValue }

 });

}

return (
 <>
 <center>
<MyLayout />
 <form onSubmit={handleFormSubmit}>
<input type="text" value={inputValue} onChange={handleInputChange} />
 <button type="submit">Search</button>
 </form>

{data.status == null?
<UserLayout data={data}/>

: data.status }
</center>
</>
 );

}

export async function getServerSideProps({ query }) {

const inputValue = query.inputValue;

 try {

 const response = await axios.get('http://localhost:3001/author/findeditor/'+inputValue);

 const data = await response.data;

return {

 props: {

data

}

   };


 } catch (error) {

 return {

props: {

 data: {status:"enter valid user id"}

}
 };
}
}