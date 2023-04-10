import Link from "next/link"
import axios from "axios";
import MyLayout from "../Layout/layout";

export default function GetAuthor({ data }) {
    
  return (
      <>
      <center>
        <MyLayout/>
      <h1>All Authors</h1>
      <ul>
        {data.map(item => (
          <li key={item.id}>
      
        <Link href={"/Author/author/"+item.id}>{item.name}</Link>
            </li>
        ))}
      </ul>
      </center>
    </>
  );
  }
  
 export async function getServerSideProps() {
 
      const response = await axios.get('http://localhost:3001/author/authordashboard');
      const data = await response.data;
    
  return { props: { data } }
  }