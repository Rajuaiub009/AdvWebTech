import Link from "next/link"
import Image from 'next/image'

export default function MyLayout()   
{
    return(
        <>
        {/* <Header title={props.title} /> */}
        <nav>
        <Link href="/"> Home</Link>
        
        
        </nav>
        <Image src="/ico.png" alt="me" width="64" height="64" />
    
        </>
    )
}