import { BrowserRouter, Router, Route } from "react-router-dom"
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
        <Router>
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
        </Router>
      </BrowserRouter>
    </>
  );
}
export default App
