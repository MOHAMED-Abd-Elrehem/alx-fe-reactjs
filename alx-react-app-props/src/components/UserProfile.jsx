import UserContext from "./UserContext";
import UserInfo from "./UserInfo";
import { useContext } from "react";
function ProfilePage() {
  const user = useContext(UserContext)

  return <UserInfo user={ user } />;
}

export default ProfilePage;
