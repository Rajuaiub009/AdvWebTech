import Link from "next/link"
import axios from "axios";
import MyLayout from "../Layout/layout";

export default function GetNews({ data }) {
    
  return (
      <>
      <center>
        <MyLayout/>
      <h1>All News</h1>
      <ul>
        {data.map(item => (
          <li key={item.id}>
      
        <Link href={"/Author/news/"+item.id}>{item.title}</Link>
            </li>
        ))}
      </ul>
      </center>
    </>
  );
  }
  
 export async function getServerSideProps() {
 
      const response = await axios.get('http://localhost:3001/author/findnews');
      const data = await response.data;
    
  return { props: { data } }
  }