import { Routes, Route } from 'react-router-dom'
// CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
// pages
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import ListingPage from './pages/ListingPage';
import BookDetails from './pages/BookDetails';
import Home from './pages/Home';
import Order from './pages/Order';
// component
import MyNavbar from './components/Navbar'

function App() {

  return (
    <div>
      <MyNavbar></MyNavbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/register' element={<RegisterPage></RegisterPage>}></Route>
        <Route path='/login' element={<LoginPage></LoginPage>}></Route>
        <Route path='/book/list' element={<ListingPage></ListingPage>}></Route>
        <Route path='/book/view/:bookId' element={<BookDetails></BookDetails>}></Route>
        <Route path='/book/order' element={<Order></Order>}></Route>
      </Routes>
    </div>

  )
}

export default App
