import { Routes, Route, Link } from "react-router-dom";
import { Login } from "./componenets/Login";
import { Register } from "./componenets/Register";
import { Home } from "./componenets/Home";
import { NotFound } from "./componenets/NotFound";
import { CheckList } from "./componenets/CheckList";
import { TemperatureMesurement } from "./componenets/TemperatureMesurement";
import { Blogs } from "./componenets/Blogs";
import { Blog } from "./componenets/Blog";
import AdminNavbar from "./layout/AdminNavbar";
import { CurrrencyConverter } from "./componenets/CurrrencyConverter";

function App() {
  return (
    <>
      {/* <>
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
        <Link to="/blogs">Blogs</Link>
        <Link to="/blogs/:id">Blog</Link>
        <Link to="/checkList">CheckBox</Link>
        <Link to="/checkTemperature">Check Temperature</Link>
      </> */}
      <CurrrencyConverter />
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="blogs">
            <Route index element={<Blogs />} />
            <Route path=":id" element={<Blog />} />
          </Route>

          <Route path="checkList" element={<CheckList />} />
          <Route path="checkTemperature" element={<TemperatureMesurement />} />
        </Route>

        <Route path="/admin" element={<AdminNavbar />}>
          <Route index element={<Home />} />
          <Route path="blogs">
            <Route index element={<Blogs />} />
            <Route path=":id" element={<Blog />} />
          </Route>
          <Route path="checklist" element={<CheckList />}></Route>
          <Route path="*" element={<NotFound />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
