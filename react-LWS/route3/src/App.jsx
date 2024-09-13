import { BrowserRouter, Route, Routes, Link, Navigate } from 'react-router-dom'
import './App.css'
import Home from './component/Home'
import About from './component/About'
import NavBar from './component/NavBar'
import Page404 from './component/Page404'
import User from './component/User'
import Filter from './component/Filter'
import Contact from './component/Contact'
import Company from './component/Company'
function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar></NavBar>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/home' element={<Home></Home>}></Route>
          <Route path='/about' element={<About></About>}></Route>
          <Route path='/user/:name' element={<User></User>}></Route><Route path='/filter' element={<Filter></Filter>}></Route>
          <Route path='/contact' element={<Contact></Contact>}></Route>
          {/* <Route path='/*' element={<Page404></Page404>}></Route> */}
          {/* url vul hoyle abr home a chole asbe */}
          <Route path='/*' element={<Navigate to="/"></Navigate>}></Route>
          {/* Nested route */}
          <Route path='/contact/' element={<Contact></Contact>}>
            <Route path='company' element={<Company></Company>}></Route>
          </Route>
        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App
