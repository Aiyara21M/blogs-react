import { Outlet, Link } from "react-router-dom";
import "./Navbar.css"
export default function Navbar() {
  return (
    <>
      <nav>
        <Link to="/" className="logo">
          <h3>Blog App</h3>
        </Link>
        <Link to="/">หน้าแรก</Link><br/>
        <Link to="/blogs">บทความทั้งหมด</Link><br/>
        <Link to="/About">เกี่ยวกับเรา</Link><br/>
      </nav>

      <Outlet />
    </>
  );
}
