import "../styles/App.css";
import Layout from "./Layout";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Quiz from "./pages/Quiz";
import Result from "./pages/Result";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Layout>
      <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/home' element={<Home></Home>}></Route>
      <Route path='/signup' element={<Signup></Signup>}></Route>
      <Route path='/login' element={<Login></Login>}></Route>
      <Route path='/quiz' element={<Quiz></Quiz>}></Route>
      <Route path='/result' element={<Result></Result>}></Route>
        {/* <Signup />
        <Login />
        <Quiz></Quiz>
        <Result></Result> */}
      </Routes>
    </Layout>
  );
}

export default App;
