import { Routes, Route, Link } from "react-router-dom";
import { Login } from "./componenets/Login";
import { Register } from "./componenets/Register";
import { Home } from "./componenets/Home";
import { NotFound } from "./componenets/NotFound";
import { CheckList } from "./componenets/CheckList";

function App() {
  return (
    <>
      <>
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
        <Link to="/checkList">CheckBox</Link>
      </>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/*" element={<NotFound />} />
        <Route path="/checkList" element={<CheckList />} />
      </Routes>
    </>
  );
}

export default App;
