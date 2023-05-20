import Link from "next/link";
export default function Home() {
  return (
 <>

     <div className="bg-gray-100 font-sans leading-normal tracking-normal"></div>
      <div>
        <title>News Portal</title>
      </div>
      
      <nav className="flex items-center justify-between flex-wrap bg-blue-500 p-10">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <svg className="fill-current h-8 w-8 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 2.5a7.5 7.5 0 100 15 7.5 7.5 0 000-15zm0 12.5a5 5 0 110-10 5 5 0 010 10z"/></svg>
          <span className="font-semibold text-xl tracking-tight">Welcome to News Portal Management System</span>
        </div>
        <div className="block lg:hidden">
          <button className="flex items-center px-3 py-2 border rounded text-blue-200 border-blue-400 hover:text-white hover:border-white">
            <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><g><rect width="20" height="2" x="0" y="4"></rect><rect width="20" height="2" x="0" y="9"></rect><rect width="20" height="2" x="0" y="14"></rect></g></svg>
          </button>
        </div>
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="text-sm lg:flex-grow">
          <Link href="/Author/ourservices" className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-blue-500 hover:bg-white mt-4 lg:mt-0">
              Our Services
            </Link> 
            &nbsp; &nbsp;
            <Link href="/login" className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-blue-500 hover:bg-white mt-4 lg:mt-0">
              Login From Here
            </Link>
          
          </div>
          <div>
            <Link href="/Author/aboutus" className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-blue-500 hover:bg-white mt-4 lg:mt-0">About US</Link>
          </div>
        </div>
      </nav>

      <section className="bg-white py-8">
        <div className="container mx-auto flex flex-wrap">
          {/* <div className="w-full md:w-3/3 flex flex-col items-center px-3"> */}
            <div className="flex flex-col w-full bg-white h-full">
              {/* <div className="flex justify-center items-center h-41 w-full"> */}
                <img className="h-full w-full object-cover rounded-lg" src="https://st4.depositphotos.com/1006318/22024/v/600/depositphotos_220240596-stock-illustration-people-working-news-portal-concept.jpg" alt="News Image" />
              </div>
            
              <div className="px-8 py-6">
                </div>
                </div>
            
                </section>
                
    </>
    )
    }