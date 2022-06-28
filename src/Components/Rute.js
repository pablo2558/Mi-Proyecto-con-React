import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import CartMap from './Cart/CartMap'
import PaymentMap from './Cart/PaymentMap'
import ProductsMap from './Cart/ProductsMap'
import Footer from './Footer/Footer'
import Navbar from './Header/Navbar'
import Main from './Main/Main'
import Historia from './Nosotros/Historia'
import LaEmpresa from './Nosotros/LaEmpresa'
import Productos from './Productos/Productos'
import Iluminacion from './Sectores/Iluminacion'
import Industrial from './Sectores/Industrial'
import Renovables from './Sectores/Renovables'
import Storage from './Sectores/Storage'


const Rute = () => {
  return (
    <div>
        <Router>
            <Navbar/>
            <Routes>
                <Route path='/' element={<Main/>} />
                <Route path='LaEmpresa' element={ <LaEmpresa/> } />
                <Route path='Historia' element={ <Historia/> } />
                <Route path='Renovables' element={ <Renovables/> } />
                <Route path='Iluminacion' element={ <Iluminacion/> } />
                <Route path='Industrial' element={ <Industrial/> } />
                <Route path='Almacenamiento' element={ <Storage/> } />
                <Route path='Productos' element={ <Productos/> } />
                <Route path='Carrito' element={ <CartMap/> } />
                <Route path='Carrito/Information' element={ <PaymentMap/> } />
                <Route path='Productos/Informacion' element={ <Main/> } />
                <Route path='Productos/Todos-1' element="" />
                <Route path='Productos/Renovables-1' element="" />
                <Route path='Productos/Todos' element="" />
                <Route path='Productos/Todos' element="" />
                <Route path='Productos/Todos' element="" />
            </Routes>
            <Footer/>
        </Router>
    </div>
  )
}

export default Rute