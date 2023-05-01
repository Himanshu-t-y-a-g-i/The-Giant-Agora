import { Footer } from "../Components/Footer"
import Homepage from "../Components/Home/Homepage"
import { Navbar } from "../Components/Navbar"
import Dashboard from "../Dashboard_Nav/Dashboard"
import { SinglePages } from "../Dashboard_Nav/Pages/SinglePages"
import { Cart } from "../Pages/Cart_&_Payment/Cart"
import { Payment } from "../Pages/Cart_&_Payment/Payment"
import { Login } from "../Pages/Login"
import { Products } from "../Pages/Products"
import { Search } from "../Pages/Search"

export const wrapper = (Component) => {
    return () => (
        <>
            <Navbar />
            <Dashboard />
            <Component />
            <Footer />
        </>
    )
}

export const Pages = {
    homepage: wrapper(Homepage),
    singlePage: wrapper(SinglePages),
    product: wrapper(Products),
    search: wrapper(Search),
    cart: wrapper(Cart),
    payment: wrapper(Payment),
    login: wrapper(Login),
    notFound: wrapper(<h1>404 Page not found</h1>)
}