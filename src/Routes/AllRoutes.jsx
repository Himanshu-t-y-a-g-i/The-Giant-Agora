import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Homepage from '../Components/Home/Homepage'
import { PrivateRoute } from '../Components/PrivateRoute'
// import Appliancaes from '../Dashboard_Nav/Pages/Appliances'
// import Laptop from '../Dashboard_Nav/Pages/Laptop'
// import Soundbar from '../Dashboard_Nav/Pages/Soundbar'
// import Television from '../Dashboard_Nav/Pages/Television'
// import Watch from '../Dashboard_Nav/Pages/Watch'
import { SinglePages } from "../Dashboard_Nav/Pages/SinglePages";
import { Cart } from '../Pages/Cart_&_Payment/Cart'
import { Payment } from '../Pages/Cart_&_Payment/Payment'
import { Login } from '../Pages/Login'
import { Products } from '../Pages/Products'
import { Search } from '../Pages/Search';

export const AllRoutes = () => {

    return (
        <div>
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path={"/:product/:id"} element={<PrivateRoute><SinglePages /> </PrivateRoute>} />
                <Route path="/:product" element={<Products />} />
                <Route path={"/search/:query"} element={<Search />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/pay" element={<Payment />} />
                <Route path='/login' element={<Login />} />
                <Route path="*" element={<h1>404 Page not found</h1>} />
            </Routes>
        </div>
    )
}

