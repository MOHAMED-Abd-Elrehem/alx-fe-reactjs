import { useParams, Router, Link, Switch, Route } from "react-router-dom";
const UsersId = () => {
    const { userId } = useParams();
    return <h2> User ID: {userId}</h2>
};
const UserProfiles = () => (
  <Router>
    <div>
      <nav>
        <Link to="/user/1">User 1</Link>
        <Link to="/user/2">User 2</Link>
      </nav>
      <Switch>
        <Route path="/user/:userId" component={UsersId} />
        <Route path="/">
          <h2>Home</h2>
        </Route>
      </Switch>
    </div>
  </Router>
);
export default UserProfiles;