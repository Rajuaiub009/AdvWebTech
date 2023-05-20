import Link from "next/link";
// import MyLayout from "./layout";
import Session from "./session";
import MyHeader from "./header";
export default function AuthorDrawer() {
  return (
    <>
    <div class="flex flex-col bg-slate-700 flex-grow">
            <div class="flex items-center flex-shrink-0 h-16 px-8 border-b border-blue-700">
                <MyHeader title="Author Dashboard"/>
                <h1 class="text-lg font-medium"> <Session/></h1>&nbsp; &nbsp; &nbsp;
               
               
               
                <h2 className="font-semibold text-xl text-white tracking-tight">Newsportal Management System</h2>
                <button class="flex items-center justify-center h-10 px-4 ml-auto text-white font-medium rounded hover:bg-black"><Link href="/Author/updateauthor/">Edit Profile</Link>
                    
                </button>
            </div>
        </div>
  
     <div class="flex w-screen h-screen text-gray-700">
        
        <div class="flex flex-col w-56 bg-slate-700 border-r border-blue-700">
           
                <div class="flex items-center justify-between w-full h-16 px-4 border-b border-blue-700 "><h1  className="flex items-center flex-shrink-0 h-10 px-2 text-emerald-100 font-bold">Author Dashboard</h1> </div>  
            <div class="flex flex-col flex-grow p-4 overflow-auto">
                <Link href="/Author/getauthor/" className="flex items-center flex-shrink-0 h-10 px-2 text-emerald-100 font-medium  rounded hover:bg-black">
                    <span class="leading-none">Show All Author</span>
                </Link>
               
                <Link href="/Author/getnews/" className="flex items-center flex-shrink-0 h-10 px-2 text-emerald-100 font-medium  rounded hover:bg-black">
                    <span class="leading-none">Show All News</span>
                </Link>

                <Link href="/Author/geteditor/" className="flex items-center flex-shrink-0 h-10 px-2 text-emerald-100 font-medium  rounded hover:bg-black">
                    <span class="leading-none">Show All Editors</span>
                </Link>
               
                <Link href="/Author/addnews/" className="flex items-center flex-shrink-0 h-10 px-2 text-emerald-100 font-medium  rounded hover:bg-black">
                    <span class="leading-none">Add News</span>
                </Link>
                <Link href="/Author/updatenews/" className="flex items-center flex-shrink-0 h-10 px-2 text-emerald-100 font-medium  rounded hover:bg-black" >
                    <span class="leading-none">Edit News</span>
                </Link>
                <Link href="/Author/deletenews/" className="flex items-center flex-shrink-0 h-10 px-2 text-emerald-100 font-medium  rounded hover:bg-black">
                    <span class="leading-none">Delete News</span>
                </Link>
                <Link href="/Author/inserteditor/" className="flex items-center flex-shrink-0 h-10 px-2 text-emerald-100 font-medium  rounded hover:bg-black">
                    <span class="leading-none">Add Editor</span>
                </Link>
                
                <Link href="/Author/updateeditor/" className="flex items-center flex-shrink-0 h-10 px-2 text-emerald-100 font-medium  rounded hover:bg-black">
                    <span class="leading-none">Update Editors</span>
                </Link>
                <Link href="/Author/deleteeditor/" className="flex items-center flex-shrink-0 h-10 px-2 text-emerald-100 font-medium  rounded hover:bg-black">
                    <span class="leading-none">Delete Editor</span>
                </Link>
                <Link href="/Author/findnews/" className="flex items-center flex-shrink-0 h-10 px-2 text-emerald-100 font-medium  rounded hover:bg-black">
                    <span class="leading-none">Search News</span>
                </Link>
                <Link href="/Author/findeditor/" className="flex items-center flex-shrink-0 h-10 px-2 text-emerald-100 font-medium  rounded hover:bg-black">
                    <span class="leading-none">Search Editors</span>
                </Link>
               
              
            </div>
        </div>
        <div class="flex-grow p-4 overflow-auto bg-gray-200">   
        <div className="grid grid-cols-1  gap-2">
        <div className="bg-white p-4 shadow-md rounded-lg">
        <img src="https://images.presentationgo.com/2020/11/NEWSPAPER-PowerPoint-Google-Slides-Template.jpg" alt="Team Member" class="w-70 h-70 object-cover"/>
    
          <p className="text-gray-700"></p>
        </div>
         
                </div>
                </div>
                </div>        
    </>
  )
}
