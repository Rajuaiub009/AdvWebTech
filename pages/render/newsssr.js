export default function SSR({ data }) {
    
    return (
        <>
        <h1>This is News SSR request!</h1>
        <ul>
          {data.map(item => (
            <li key={item.id}>
            <p>Title: {item.title}</p>  
             <p>News: {item.news}</p>  
              </li>
          ))}
        </ul>
      </>
    );
    }
    
   export async function getServerSideProps() {
   
        const response = await fetch('http://localhost:3001/author/findnews');
        const data = await response.json();
      
    return { props: { data } }
    }