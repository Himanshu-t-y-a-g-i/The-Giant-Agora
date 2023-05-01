import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Pages } from './useWrapper'
import { Admin } from '../Pages/Admin'
import { PrivateRoute } from '../Components/PrivateRoute'
import { Edit } from '../Pages/Edit'

export const AllRoutes = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Pages.homepage />} />
                <Route path='/admin' element={<Admin />} />
                <Route path='/edit/:id' element={<Edit />} />
                <Route path={"/product/:id"} element={<PrivateRoute><Pages.singlePage /> </PrivateRoute>} />
                <Route path={"/search/:query/:id"} element={<PrivateRoute><Pages.singlePage /> </PrivateRoute>} />
                <Route path="/:product" element={<Pages.product />} />
                <Route path={"/search/:query"} element={<Pages.search />} />
                <Route path="/cart" element={<Pages.cart />} />
                <Route path="/pay" element={<Pages.cart />} />
                <Route path='/login' element={<Pages.login />} />
                <Route path="*" element={<Pages.notFound />} />
            </Routes>
        </div>
    )
}

