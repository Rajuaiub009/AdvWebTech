import React from "react"
import { useEffect } from "react"

export default function CSRPage() {
  const [data, setData] = React.useState([])
  useEffect(() => {
    const getData = async () => {
      const response = await fetch('http://localhost:3001/author/findnews');
      const data = await response.json();
      setData(data);
    }
    getData();
  })
  return (
    <>
      <h1>This is News CSR request!</h1>
      <ul>
        {data.map(item => (
          <li key={item.id}>
         <h1>Title: {item.title}</h1>  
          <h1>News: {item.news}</h1> 
            </li>
        ))}
      </ul>
    </>
  )
}