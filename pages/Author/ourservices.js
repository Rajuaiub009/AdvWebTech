import MyLayout from "../Layout/layout"
export default function Services() {
  return (
   <>
   <MyLayout title ="Services"/>
     <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl text-center bg-blue-500 text-white font-bold mb-4 p-4">Our Services</h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2  gap-8">
        {/* Service 1 */}
        <div className="bg-white p-4 shadow-md rounded-lg">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWqUbz8DrWAUEyuy12bEA79aVM3rE-FECxlQ&usqp=CAU" alt="Team Member" class="w-70 h-70 object-cover"/>
          <h2 className="text-lg font-semibold mb-2">User Management</h2>
          <p className="text-gray-700">The system offers user registration, login, and profile management functionalities. It allows users to create accounts, customize their profiles, and manage their preferences.</p>
        </div>

        {/* Service 2 */}
        <div className="bg-white p-4 shadow-md rounded-lg">
        <img src="https://static.vecteezy.com/system/resources/thumbnails/000/089/760/small/newspaper-media-icons-vectors.jpg" alt="Team Member" class="w-200 h-64 object-cover"/>
          <h2 className="text-lg font-semibold mb-2">News Categorization and Tagging</h2>
          <p className="text-gray-700">The system enables the categorization of news articles into different sections or categories (e.g., politics, sports, entertainment). It also supports the tagging of articles with relevant keywords, making it easier for users to discover related content.</p>
        </div>

        {/* Service 3 */}
        <div className="bg-white p-4 shadow-md rounded-lg">
        <img src="https://cdn-icons-png.flaticon.com/512/4319/4319308.png" alt="Team Member" class="w-120 h-64 object-cover"/>
          <h2 className="text-lg font-semibold mb-2">Publishing and Scheduling</h2>
          <p className="text-gray-700">The system provides options to publish articles immediately or schedule them for future publication. This allows news organizations to plan and automate their content release, ensuring a consistent flow of fresh news.</p>
        </div>
        <div className="bg-white p-4 shadow-md rounded-lg">
        <img src="https://cdns.iconmonstr.com/wp-content/releases/preview/2018/240/iconmonstr-speech-bubble-comments-thin.png" alt="Team Member" class="w-100 h-64 object-cover"/>
          <h2 className="text-lg font-semibold mb-2">Comments and User Interactions</h2>
          <p className="text-gray-700">he system includes features for user comments and interactions. Readers can leave comments on articles, engage in discussions, and share their opinions. Moderation tools may be available to manage and filter user comments for inappropriate content.</p>
        </div>
        </div>

   </>
  )
}