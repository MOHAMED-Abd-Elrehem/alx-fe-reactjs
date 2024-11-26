import { BrowserRouter, Routes, Route } from "react-router-dom"
import ProfileDetails from "./components/ProfileDetails";
import ProfileSettings from "./components/ProfileSettings";
import Profile from "./components/Profile";
import './App.css'
import UserProfiles from "./components/UserProfiles";
import ProtectRoute from "./components/ProtectedRoute";
import Login from "./components/login";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/profile"
            element={
              <ProtectRoute>
                <Profile />
              </ProtectRoute>
            }
          >
            <Route path="details" element={<ProfileDetails />} />
            <Route path="settings" element={<ProfileSettings />} />
          </Route>
          <Route path=":userId" element={<UserProfiles />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App
