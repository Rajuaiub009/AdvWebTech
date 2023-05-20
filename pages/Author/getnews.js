import Link from "next/link"
import axios from "axios";
import SessionCheck from "../Layout/sessioncheck";
import MyHeader from '../Layout/header';

export default function GetNews({ data }) {
    
  return (
      <>
      <SessionCheck/>
      <MyHeader title = "All News"/>
     <div className="bg-blue-500 py-4">
        <div className="container mx-auto px-6">
          <h1 className="text-3xl text-center font-semibold text-white">All News</h1>
        </div>
        </div>
        
        <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"></div>
        {data.map(item => (
          <div key={item.id} className="p-8 text-white font-bold bg-slate-700 rouded gray text-center rounded hover:bg-black" >
        <Link href={"/Author/news/"+item.id}>{item.title}</Link>
           </div>
        ))}
        </div>
    </>
  );
  }
  
 export async function getServerSideProps() {
 
      const response = await axios.get('http://localhost:3001/author/findnews');
      const data = await response.data;
    
  return { props: { data } }
  }