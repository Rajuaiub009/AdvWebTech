import Link from "next/link"
import axios from "axios";
import MyLayout from "../Layout/layout";

export default function GetEditor({ data }) {
    
  return (
      <>
      <center>
      <MyLayout/>
      <h2>All Editors</h2>
      <ul>
        {data.map(item => (
          <li key={item.id}>
      
        <Link href={"/Author/editor/"+item.id}>{item.name}</Link>
            </li>
        ))}
      </ul>
      </center>
      
    </>
  );
  }
  
 export async function getServerSideProps() {
 
      const response = await axios.get('http://localhost:3001/author/findeditor');
      const data = await response.data;
    
  return { props: { data } }
  }