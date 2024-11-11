import ProfilePage from "./components/ProfilePage";
import UserContaxt from "./components/UserContext";

function App() {
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };
  return (
    
      <UserContaxt.Provider value={userData}>
        <ProfilePage />
      </UserContaxt.Provider>
  );
}

export default App;
