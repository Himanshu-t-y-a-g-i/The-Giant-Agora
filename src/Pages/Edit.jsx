import { useSelector } from "react-redux";
import { Link, Navigate, useParams } from "react-router-dom";
import { logout } from "../Redux/AuthReducer/action";
import { useEffect, useState } from "react";
import axios from "axios";
import { Flex, FormControl, FormLabel, Grid, HStack, Input } from "@chakra-ui/react";

export const Edit = () => {
    const adminDetail = useSelector(store => store.authReducer.admin);
    const [data, setData] = useState({});
    const params = useParams().id;
    useEffect(() => {
        axios.get(`https://jsonserver-revision.onrender.com/products/${params}`).then(res => setData(res.data));
    }, []);
    if (!adminDetail.email || !adminDetail.password) {
        return <Navigate to={"/login"} />
    }
    return (
        <div>
            <nav id="adminNav">
                <p id="welcomeBackground">Welcome {adminDetail.name.split(" ")[0]}</p>
                <img src="https://zeevector.com/wp-content/uploads/LOGO/Amazon-India-Logo-PNG-White2.png" alt="Amazon Logo" />
                <Link to={"/admin"}>Admin Home</Link>
                <Link to={"/"}>Back to main website</Link>
                <div>
                    <img src={adminDetail.image} alt="Admin image" />
                    <p>{adminDetail.name}</p>
                    <div>
                        <p onClick={() => logout()}>Sign-Out</p>
                    </div>
                </div>
            </nav >
            <main id="edit">
                <FormLabel>Product id Primary</FormLabel><Input type="text" value={data.id} name="id" required disabled />
                <FormLabel>Product id Secondary</FormLabel><Input type="number" value={data._id} name="_id" required disabled />
                <FormLabel>Category</FormLabel><Input type="text" value={data.category} name="category" required />
                <FormLabel>Image</FormLabel><Input type="url" value={data.imglink} name="imglink" required />
                <FormLabel>Name</FormLabel><Input type="text" value={data.name} name="name" required />
                <FormLabel>Brand</FormLabel><Input type="text" value={data.brand} name="brand" required />
                <Grid alignItems={"center"} templateColumns={"1fr 3fr 1fr 3fr"}>
                    <FormLabel>MRP</FormLabel><Input type="number" value={data.MRP} name="MRP" required />
                    <FormLabel ml={"10px"}>MRPx</FormLabel><Input type="text" value={data.MRPx} name="MRPx" required />
                </Grid>
                <Grid alignItems={"center"} templateColumns={"1fr 3fr 1fr 3fr"}>
                    <FormLabel>Dealprice</FormLabel><Input type="number" value={data.dealprice} name="dealprice" required />
                    <FormLabel ml={"10px"}>Dealpricex</FormLabel><Input type="text" value={data.dealpricex} name="dealpricex" required />
                </Grid>
                <Grid alignItems={"center"} templateColumns={"1fr 3fr 1fr 3fr"}>
                    <FormLabel>Discount</FormLabel><Input type="number" value={data.discount} name="discount" required />
                    <FormLabel ml={"10px"}>Discountx</FormLabel><Input type="text" value={data.discountx} name="discountx" required />
                </Grid>
                <Grid alignItems={"center"} templateColumns={"1fr 3fr 1fr 3fr"}>
                    <FormLabel>saveprice</FormLabel><Input type="number" value={data.saveprice} name="saveprice" required />
                    <FormLabel ml={"10px"}>savepricex</FormLabel><Input type="text" value={data.savepricex} name="savepricex" required />
                </Grid>
                <FormLabel>cashback</FormLabel><Input type="text" value={data.cashback} name="cashback" required />
                <Input type="Submit" value={"Save changes"} />
            </main>
            <footer id="adminFooter">
                <p>All Rights Reserved</p>
            </footer>
        </div>
    )
}
const obj = {
    "id": "639894d09860a2192e7c85bc",
    "_id": 23,
    "category": "watches",
    "imglink": "https://www.reliancedigital.in/medias/Fire-Boltt-Ninja-Pro-Max-Smart-Watch-492574963-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyMzg1NDV8aW1hZ2UvanBlZ3xpbWFnZXMvaDdlL2hlMy85ODE3NTExODIxMzQyLmpwZ3w3NDUzYzgzYzA4MWY2MTBlODk4Nzg5M2I2MjVjMTFiYjA1N2JkYmY1MDBiMjA2MzQyNjI3NzEwZmZkNjY5NjFi",
    "name": "Fire-Boltt Ninja Pro Max Smart Watch, Black",
    "MRP": 24999,
    "MRPx": "₹24,999",
    "brand": "Fire-Boltt",
    "dealprice": 14999,
    "dealpricex": "₹14,999",
    "discount": 40,
    "discountx": "40%",
    "saveprice": 10000,
    "savepricex": "₹10,000",
    "cashback": "no",
    "img1": "https://www.reliancedigital.in/medias/Fire-Boltt-Ninja-Pro-Max-Smart-Watch-492574963-i-1-1200Wx1200H-96Wx96H?context=bWFzdGVyfGltYWdlc3wyNjAyNnxpbWFnZS9qcGVnfGltYWdlcy9oNjYvaDNhLzk4MTc1MTE4ODY4NzguanBnfGYyMWMyNzJjNjQzOTE0YTY2OWRjZmQ3Y2NiY2UxMWViNWRlNDFkMWE5YzZiOGY1NjQzNzM0N2E2MmEyMTU3ZTI",
    "img2": "https://www.reliancedigital.in/medias/Fire-Boltt-Ninja-Pro-Max-Smart-Watch-492574963-i-2-1200Wx1200H-96Wx96H?context=bWFzdGVyfGltYWdlc3wzMTk0NHxpbWFnZS9qcGVnfGltYWdlcy9oN2UvaDk2Lzk4MTc1MTM1MjUyNzguanBnfDg1NDdkNDA1YWE4YjhmNjkzZTJkNzI3ZmVkMjc3Nzg3ZTlhOWE5ZWQ0YzNlNDExYjQ5ZGM3ZmQ3OGIwYjY0YzM",
    "img3": "https://www.reliancedigital.in/medias/Fire-Boltt-Ninja-Pro-Max-Smart-Watch-492574963-i-3-1200Wx1200H-96Wx96H?context=bWFzdGVyfGltYWdlc3wzMDI5NHxpbWFnZS9qcGVnfGltYWdlcy9oZjEvaDliLzk4MTc1MTQxODA2MzguanBnfGU1NDJjNWJjNDM0YjQwNmU5ZDBmMDI1Y2NmYjlmNzU2NzU2MDI5NzlhZjRmMzYyNGZkZDliZjQ3YzU0ZjUxYzY"
}