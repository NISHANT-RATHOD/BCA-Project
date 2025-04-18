import React from 'react'
import Home from './pages/Home'
import Collection from './pages/Collection'
import About from './pages/About'
import Contact from './pages/Contact'
import Product from './pages/Product'
import Cart from './pages/Cart'
import Login from './pages/Login'
import PlaceOrder from './pages/PlaceOrder'
import Orders from './pages/Orders'
import Navbar from './components/Navbar'
import { createBrowserRouter, Outlet, RouterProvider, useNavigate } from 'react-router-dom';
import Footer from './components/Footer'
import SearchBar from './components/SearchBar'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Verify from './pages/Verify'




const App = () => {


  function Layout() {
    return (
        <>
          <ToastContainer/>
          <Navbar/>
          <SearchBar/>
          <Outlet/>
          <Footer/>
        </>
    );
  }

   const router = createBrowserRouter([
    {
      element : <Layout/>,
      children :[
    {
      path: '/',
      element: <Home/>,
    },
    {
      path: '/collection',
      element: <Collection/>,
    },    
    {
      path: '/about',
      element: <About/>,
    },    
    {
      path: '/contact',
      element: <Contact/>,
    },    
    {
      path: '/product/:productId',
      element: <Product/>,
    },    
    {
      path: '/cart',
      element: <Cart/>,
    },    
    {
      path: '/login',
      element: <Login/>,
    },    
    {
      path: '/place-order',
      element: <PlaceOrder/>,
    },    
    {
      path: '/orders',
      element: <Orders/>,
    },    
    {
      path: '/verify',
      element: <Verify/>,
    }
    
  ]}]);
  
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
         <RouterProvider router={router} />
    </div>
    

  )
}

export default App;
