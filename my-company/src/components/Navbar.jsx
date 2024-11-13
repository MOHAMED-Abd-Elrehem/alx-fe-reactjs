import { Link } from "react-router-dom";
function Navbar() {
  return (
    <nav
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        padding: "20px",
      }}
    >
      <ul style={{ listStyle: "none", display: "flex" }}>
        <li style={{ paddingRight: "10px" }}>
          <Link to="/" style={{ textDecoration: "none" }}>
            Home
          </Link>
        </li>
        <li style={{ paddingRight: "10px" }}>
          <Link style={{ textDecoration: "none" }} to="/About">
            About
          </Link>
        </li>
        <li style={{ paddingRight: "10px" }}>
          <Link style={{ textDecoration: "none" }} to="/Services">
            Services
          </Link>
        </li>
        <li style={{ paddingRight: "10px" }}>
          <Link style={{ textDecoration: "none" }} to="/Contact ">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}
export default Navbar;
