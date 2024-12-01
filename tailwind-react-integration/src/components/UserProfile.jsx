function UserProfile() {
  return (
    <div className="user-profile my-20 bg-gray-100 rounded-lg shadow-lg p-8 max-w-sm">
      <img className="rounded-full w-36 h-36 mx-auto" src="https://via.placeholder.com/150" alt="User" />
      <h1 className="text-xl text-blue-800 my-4">John Doe</h1>
      <p className="text-gray-600 text-base">
        Developer at Example Co. Loves to write code and explore new
        technologies.
      </p>
    </div>
  );
}

export default UserProfile;