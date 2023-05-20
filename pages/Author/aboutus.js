import MyLayout from "../Layout/layout"
export default function AboutUs() {
  return (
   <>
   <MyLayout title="AboutUS"/>
<div class="container mx-auto py-8">
  <h1 class="text-4xl bg-stone-700 text-center text-stone-200 font-bold mb-4">About Our News Portal</h1>
  </div>
  
  <div class="flex flex-wrap items-center">
    <div class="w-full md:w-full md:pr-8">
      <p class="text-stone-800 text-center font-bold">Welcome to our News Portal Management System! We are a team of dedicated journalists and technology experts who strive to bring you the latest news and information from around the world.

Our goal is to provide a comprehensive platform that connects you with the most important stories, trends, and events happening in your community and beyond. We believe that access to reliable and timely information is critical in today's fast-paced world, and we are committed to delivering the news in a way that is both informative and engaging.

</p>
    </div>
    
    {/* <div class="w-full md:w-1/2">
      <img src="https://www.shutterstock.com/image-illustration/about-us-concept-hand-pressing-260nw-203514820.jpg" alt="About Us" class="rounded-lg shadow-md"/>
    </div> */}
  </div>
  
  <div class="my-8">
    <h2 class="text-2xl bg-stone-700 text-center text-stone-200 font-bold mb-4">Our Team</h2>
    </div>
    
    <div class="flex flex-wrap -mx-4">
      <div class="w-full md:w-1/4 px-4 mb-8">
        <div class="rounded-lg overflow-hidden shadow-md">
          <img src="https://scontent.fdac14-1.fna.fbcdn.net/v/t39.30808-6/260725837_3014742122114640_806337211912909966_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=174925&_nc_eui2=AeFQMOvBevCyMf61tkm0XOqT6eV7r2Mf0fbp5XuvYx_R9kH_HQunKO-TrNBKAh4Cwq0aN1XDXg4PRbUlFzdaSAaQ&_nc_ohc=edjZ0ypf6NEAX-zBGFD&_nc_ht=scontent.fdac14-1.fna&oh=00_AfB9JLiaVx3jS168-enFFaf265TvmfyjUYraUzu5VPuR9Q&oe=6459F5E6" alt="Team Member" class="w-full h-64 object-cover"/>
          
          <div class="p-4">
            <h3 class="text-lg font-bold mb-2">Dipto Roy</h3>
            <p class="text-black font-bold">Admin In Charge</p>
          </div>
        </div>
      </div>
      
      <div class="w-full md:w-1/4 px-4 mb-8">
        <div class="rounded-lg overflow-hidden shadow-md">
          <img src="https://scontent.fdac14-1.fna.fbcdn.net/v/t39.30808-6/331876034_905736680768135_7151718679403902023_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeHvvtzyPWyiBJd-ilCuATSEEMZ0YnzirPAQxnRifOKs8O-UKZIis1NC8sWpuXnlWDrcYk_-nLTvm-ZyKNl9myh0&_nc_ohc=wASWdfzQYIkAX8SBa4e&_nc_ht=scontent.fdac14-1.fna&oh=00_AfB4ouP8j7Cbl-1XcgNxKig6t17XqThB9oJIlx52GLCQ0g&oe=64599903" alt="Team Member" class="w-full h-64 object-cover"/> 
          <div class="p-4">
            <h3 class="text-lg font-bold mb-2">Raju Dey</h3>
            <p class="text-black font-bold">Author In Charge</p>
          </div>
        </div>
      </div>

      <div class="w-full md:w-1/4 px-4 mb-8">
        <div class="rounded-lg overflow-hidden shadow-md">
          <img src="https://scontent.fdac14-1.fna.fbcdn.net/v/t1.6435-9/39605723_662779170757212_7437395086079426560_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=174925&_nc_eui2=AeFaKLZ3aHQ76CCosHzQi_nh9aFZaAULpKH1oVloBQukoa5hBHe7I0ApIRX3ddpfBbIFnEv3xWMaRgEzUsNZS7SR&_nc_ohc=VM_vjB6vf0QAX9H-IRq&_nc_ht=scontent.fdac14-1.fna&oh=00_AfD-uU56nzl9X_NvPlrNiyFJv2Rj3CkRSVSQRHoqM2j-Eg&oe=647CA482" alt="Team Member" class="w-full h-64 object-cover"/> 
          <div class="p-4">
            <h3 class="text-lg font-bold mb-2">Anik Kumar Dasgupta</h3>
            <p class="text-black font-bold ">Editor In Charge</p>
          </div>
        </div>
      </div>
    
      <div class="w-full md:w-1/4 px-4 mb-8">
      <div class="rounded-lg overflow-hidden shadow-md">
        <img src="https://scontent.fdac14-1.fna.fbcdn.net/v/t39.30808-6/298063217_432278395626967_8125191090361075476_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=174925&_nc_eui2=AeHDUXzyPRnzsCj5ONWCVWcyRaxdIfLTZApFrF0h8tNkCrrFdBUBu98lY4MZHJQ6FiseOTThU6q7obkfb1YQidWB&_nc_ohc=wbYq_8EtSC0AX9BCQEP&_nc_oc=AQmx2FEpxUFx-A-7EAfNv4C_LxuhiWaHU2OACSsZb0um_EtGW55wO3HFTEWHEHNeXsU&_nc_ht=scontent.fdac14-1.fna&oh=00_AfCWEm9sqkcFiZjlnlKeaQyV1Qi02OwdYfXrhmq4IZ8nwQ&oe=645AF262" alt="Team Member" class="w-full h-64 object-cover"/> 
        <div class="p-4">
          <h3 class="text-lg font-bold mb-2">MD Imran Hossain</h3>
          <p class="text-black font-bold">User</p>
        </div>
      </div>
    </div>
    
    </div>
    
</>
 )
 }
