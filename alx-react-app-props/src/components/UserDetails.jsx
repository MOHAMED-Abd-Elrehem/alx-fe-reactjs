import UserContaxt from "./UserContext";
import { useContext } from "react";

function UserDetails() {
  const user = useContext(UserContaxt);
  return (
    <div>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
    </div>
  );
}

export default UserDetails;
