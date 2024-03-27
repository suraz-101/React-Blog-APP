import { Link, Outlet } from "react-router-dom";
export const AppNavbar = () => {
  return (
    <div>
      <>
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
        <Link to="/blogs">Blogs</Link>
        <Link to="/blogs/:id">Blog</Link>
        <Link to="/checkList">CheckBox</Link>
        <Link to="/checkTemperature">Check Temperature</Link>
      </>
      <br />
      <Outlet />
    </div>
  );
};
