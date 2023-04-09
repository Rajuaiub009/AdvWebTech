import axios from "axios";
import { useRouter } from 'next/router'

export default function UserProfile({ data } ) {
const router = useRouter();
    return (
      <>
   
      <h1>Id: {data.id}</h1>
      <h1>Title: {data.title}</h1>
      <h1>News: {data.news}</h1>

      <button type="button" onClick={() => router.back()}>
      Click here to go back
    </button>
     
      </>
    )
  }
  
 export async function getServerSideProps(context) {
 const id=context.params.id;

    const response = await axios.get('http://localhost:3001/author/findnews/'+id);
    const data = await response.data;
   
return { props: { data } }
}