import React from 'react'
import  ReactDOM  from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ShopContextProvider from './context/ShopContext.jsx'
import 'preline'


ReactDOM.createRoot(document.getElementById('root')).render(
    <ShopContextProvider>
        <App/>
    </ShopContextProvider>
)
