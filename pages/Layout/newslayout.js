import Image from "next/image"
export default function Layout({data})   
{
    return(
        <>
      <h1>Id: {data.id}</h1>
      <h1>Title: {data.title}</h1>
      <h1>News: {data.news}</h1>
      <h1>Picture: </h1>
      <Image src={"http:/localhost:3001/author/getnimage/"+data.filename} alt="me" width="150" height="150" />
        </>
    )
}