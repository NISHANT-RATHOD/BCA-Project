import { useContext, useState } from 'react'
import React from 'react'
import {assets} from '../assets/assets'
import { NavLink,Link, useNavigate } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'

const Navbar = () => {
  const [visible,setVisible] = useState(false);
  const { setShowSearch, getCartCount, token, setToken, setCartItems} = useContext(ShopContext);
  const navigate = useNavigate();

  const logout = ()=>{
    navigate('/login');
    localStorage.removeItem('token');
    setToken('');
    setCartItems({});
  }
  return (
    <div className='flex  items-center justify-between py-5 font-medium'>
        
     <Link to='/'><img src={assets.logo} alt=""  className='w-36'/></Link>

     <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
  {[
    { to: '/', label: 'HOME' },
    { to: '/collection', label: 'COLLECTION' },
    { to: '/about', label: 'ABOUT' },
    { to: '/contact', label: 'CONTACT' },
  ].map(({ to, label }) => (
    <NavLink
      key={to}
      to={to}
      className={({ isActive }) =>
        `flex flex-col items-center gap-1 group transition-colors duration-300 ${
          isActive ? 'text-black' : ''
        }`
      }
    >
      <p>{label}</p>
      <span
        className={`
          h-0.5 w-3/5 bg-gray-700 transform transition-transform duration-300
          origin-left scale-x-0 group-hover:scale-x-100
          ${
            window.location.pathname === to
              ? 'scale-x-100'
              : ''
          }
        `}
      ></span>
    </NavLink>
  ))}
</ul>

        <div className='flex items-center gap-6'>
          <a href='https://fashionforever-admin.vercel.app/' target='blank' rel="noopener noreferrer" className=" hidden sm:block rounded-md border-2  border-black bg-white px-6 py-3 font-semibold uppercase text-black transition-all duration-300 shadow-[4px_4px_0px_black] hover:translate-x-[-0.5px] hover:translate-y-[-0.5px] hover:rounded-md  active:translate-x-[0px] active:translate-y-[0px] active:rounded-md active:shadow-none">ADMIN</a>
          <Link to={'/collection'}>
          <img onClick={()=>setShowSearch(true)} src={assets.search_icon} className='w-5 cursor-pointer' alt="" />
          </Link>
          <div className='group relative'>
           <img onClick={()=>token?null:navigate('/login')} src={assets.profile_icon} className='w-5 cursor-pointer' alt="" /> 
             {/* Dropdown Menu */}
             {token && 
             <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
                  <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded'>
                        {/* <p className='cursor-pointer hover:text-black'>My Profile</p> */}
                        <p onClick={()=>{navigate('/orders')}} className='cursor-pointer hover:text-black'>Orders</p>
                        <p onClick={()=>logout()} className='cursor-pointer hover:text-black'>Logout</p>
                 </div>
             </div>}
             
          </div>

          <Link to='/cart' className='relative'>
               <img src={assets.cart_icon} className='w-5 min-w-5' alt="" />
               <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]'>{getCartCount()}</p>
          </Link>
          <img onClick={()=>{setVisible(true)}} src={assets.menu_icon} className='w-5 cursor-pointer sm:hidden' alt="" />
        </div>

               {/* { Sidebar menu for small screen}  */}
               <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${ visible ? 'w-full':'w-0'}`}>
                   
                   <div className='flex flex-col text-gray-600'>
                    <div onClick={()=>setVisible(false)} className='flex items-center gap-4 p-3 cursor-pointer'>
                      <img className='h-4 rotate-180 ' src={assets.dropdown_icon} alt="" />
                      <p>Back</p>
                    </div>
                    <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border' to='/'>Home</NavLink>
                    <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border' to='/collection'>Collection</NavLink>
                    <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border' to='/about'>About</NavLink>
                    <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border' to='/contact'>Contact</NavLink>
                    <a href='https://fashionforever-admin.vercel.app/' target='blank' rel="noopener noreferrer" className=" block sm:hidden rounded-md border-2  border-black bg-white px-6 py-3 font-semibold uppercase text-black transition-all duration-300 shadow-[4px_4px_0px_black] hover:translate-x-[-0.5px] hover:translate-y-[-0.5px] hover:rounded-md  active:translate-x-[0px] active:translate-y-[0px] active:rounded-md active:shadow-none">ADMIN</a>

                   </div>

               </div>

    </div>
  )
}

export default Navbar
