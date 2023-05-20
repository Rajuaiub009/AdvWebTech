export default function SSG({ data }) {
    
    return (
        <>
        <h1>This is News SSG request!</h1>
        <ul>
        {data.map(item => (
            <li key={item.id}>
             <p>News: {item.news}</p> 
              </li>
          ))}
        </ul>
      </>
    );
    }
    
   export async function getStaticProps() {
   
        const response = await fetch('http://localhost:3001/author/findnews');
        const data = await response.json();
      
    return { props: { data } }
    }