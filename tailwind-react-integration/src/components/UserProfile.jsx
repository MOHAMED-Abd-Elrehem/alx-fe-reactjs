function UserProfile() {
  return (
    <div className="user-profile my-20 bg-gray-100 rounded-lg shadow-lg p-8 max-w-xs sm:p-4 sm:max-w-xm md:max-w-sm md:p-8 hover:shadow-xl">
      <img className="rounded-full w-36 h-36 mx-auto sm:h-24 sm:w-24 md:h-36 md:w-36 hover:scale-110 transition-transform duration-300 ease-in-out" src="https://via.placeholder.com/150" alt="User" />
      <h1 className="sm:text-lg md:text-xl text-blue-800 my-4 sm:text-sm md:text-base hover:text-blue-500">John Doe</h1>
      <p className="text-gray-600 text-base">
        Developer at Example Co. Loves to write code and explore new
        technologies.
      </p>
    </div>
  );
}

export default UserProfile;
