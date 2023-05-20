import axios from "axios";
import { useRouter } from 'next/router'
import Image from "next/image";
import MyHeader from "@/pages/Layout/header";

export default function UserProfile({ data } ) {
const router = useRouter();
    return (
      <>
      <title>Author Details</title>
      <div className="bg-blue-500 py-4">
        <div className="container mx-auto px-6">

            <h1 className="text-3xl text-center font-semibold text-white">Author Details</h1>
            </div>
            </div>
      <center>
      <MyHeader title = "Author Details"/>
      <div className="container mx-auto  px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-8">
      <div className="bg-slate-700 text-white text-bold rounded shadow p-4"><h1>Id: {data.id}</h1></div>
      <div className="bg-slate-700 text-white text-bold rounded shadow p-4"><h1>Name: {data.name}</h1></div>
      <div className="bg-slate-700 text-white text-bold rounded shadow p-4"><h1>Username: {data.username}</h1></div>
      <div className="bg-slate-700 text-white text-bold rounded shadow p-4"><h1>Contact: {data.contact}</h1></div>
      <div className="bg-slate-700 text-white text-bold rounded shadow p-4"><h1>Email: {data.email}</h1></div>
      <div className="bg-slate-700 text-white text-bold rounded shadow p-4"><h1>Picture: </h1>
      <Image src={"http:/localhost:3001/author/getimage/"+data.filename} alt="me" width="150" height="150" />
       <br></br>
       </div>
       </div>
    </div>
      <button type="button" className="inline-block text-sm px-4 py-2 leading-none border rounded text-slate-700 border-white hover:border-transparent hover:text-blue-500 hover:white mt-4 lg:mt-0" onClick={() => router.back()}>
      Click here to go back
    </button>
   
     </center>
  
      </>
    )
  }
  
 export async function getServerSideProps(context) {
 const id=context.params.id;

    const response = await axios.get('http://localhost:3001/author/findauthor/'+id);
    const data = await response.data;
   
return { props: { data } }
}