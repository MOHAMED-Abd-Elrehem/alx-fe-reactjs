import {Routes , Route, Link, useRouteMatch } from 'react-router-dom'
import ProfileDetails from './ProfileDetails';
import ProfileSettings from './ProfileSettings';

const Profile = () => {
    let { path, url } = useRouteMatch();
    return (
        <Routes>
        <div>
            <h2>Profile</h2>
            <ul>
                <li><Link to={`${url}/ProfileDetails`}>Profile Details</Link></li>
                <li><Link to={`${url}/ProfileSettings`}>Profile Settings</Link></li>
            </ul>
            
                <Route path={`${path}/profile`}>
                    <ProfileDetails />
                </Route>
                <Route path={`${path}/settings`}>
                    <ProfileSettings />
                </Route>
            
            </div>
            </Routes>
    );
};
export default Profile;

