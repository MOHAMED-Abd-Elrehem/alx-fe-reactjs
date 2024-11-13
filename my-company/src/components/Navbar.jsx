import { Link } from "react-router-dom";
function Navbar() {
  return (
    <nav
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        padding: "20px",
        backgroundColor: "#fff",
      }}
    >
      <ul style={{ listStyle: "none", display: "flex" }}>
        <li style={{ paddingRight: "10px" }}>
          <Link to="/" style={{ textDecoration: "none", color: "black" }}>
            Home
          </Link>
        </li>
        <li style={{ paddingRight: "10px" }}>
          <Link style={{ textDecoration: "none", color: "black" }} to="/About">
            About
          </Link>
        </li>
        <li style={{ paddingRight: "10px" }}>
          <Link
            style={{ textDecoration: "none", color: "black" }}
            to="/Services"
          >
            Services
          </Link>
        </li>
        <li style={{ paddingRight: "10px" }}>
          <Link
            style={{ textDecoration: "none", color: "black" }}
            to="/Contact "
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}
export default Navbar;
