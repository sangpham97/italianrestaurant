import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import About from './pages/About'
import AdminContactPage from './pages/AdminContactPage'
import AdminFoodPage from './pages/AdminFoodPage'
import AdminOrderPage from './pages/AdminOrderPage'
import AdminUserPage from './pages/AdminUserPage'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Login from './pages/Login'
import Menu from './pages/Menu'
import Register from './pages/Register'
import Error from './pages/Error'
import OrderPage from './pages/OrderPage'

function App() {
  // const { user } = useContext(AuthContext)
  return (
    <Layout>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/about-us' element={<About />} />
        <Route exact path='/menu' element={<Menu />} />
        <Route exact path='/contact' element={<Contact />} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/register' element={<Register />} />

        <Route exact path='/admin/user' element={<AdminUserPage />}></Route>
        <Route exact path='/admin/contact' element={<AdminContactPage />} />
        <Route exact path='/error' element={<Error />} />
        <Route exact path='/admin/order' element={<AdminOrderPage />} />
        <Route exact path='/admin/food' element={<AdminFoodPage />} />
        <Route exact path='/myorder/:id' element={<OrderPage />} />
      </Routes>
    </Layout>
  )
}

export default App
