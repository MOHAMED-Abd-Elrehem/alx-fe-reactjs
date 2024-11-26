import { Route, Redirect } from "react-router-dom";
import Profile from "./Profile";

const isAuthenticated = () => {
    return localStorage.getItem('authToken') !== null;
};

const ProtectRoute = () => {
  <Route
        
        render={props =>
            isAuthenticated() ? (
                <Profile {...props} />
            ) : (

                <Redirect to="/login" />
            )
        }
    />
    
};
export default ProtectRoute;