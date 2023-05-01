import { Link, Navigate, useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../Redux/AuthReducer/action";
import "../Styles/Admin.css";
import { useEffect } from "react";
import { getDataF } from "../Redux/AdminReducer/action";
import { AdminCard } from "../Components/AdminCard";
import { Text } from "@chakra-ui/react";

export const Admin = () => {
    const adminDetail = useSelector(store => store.authReducer.admin);
    const loading = useSelector(store => store.adminReducer.isLoading);
    const error = useSelector(store => store.adminReducer.isError);
    const dispatch = useDispatch();
    const data = useSelector(store => store.adminReducer.data);
    const response = useSelector(store => store.adminReducer.response);
    useEffect(() => {
        dispatch(getDataF());
    }, [])
    if (!adminDetail.email || !adminDetail.password) {
        return <Navigate to={"/login"} />
    }
    return (
        <div id="admin">
            <nav id="adminNav">
                <p id="welcomeBackground">Welcome {adminDetail.name.split(" ")[0]}</p>
                <img src="https://zeevector.com/wp-content/uploads/LOGO/Amazon-India-Logo-PNG-White2.png" alt="Amazon Logo" />
                <Link to={"/"}>Back to main website</Link>
                <div>
                    <img src={adminDetail.image} alt="Admin image" />
                    <p>{adminDetail.name}</p>
                    <div>
                        <p onClick={() => logout()}>Sign-Out</p>
                    </div>
                </div>
            </nav >
            <aside id="adminAside">

            </aside>
            <main id="adminMain">
                {loading && <div style={{ textAlign: "center", position: "absolute", top: "45vh", left: "45vw" }}>
                    <img style={{ margin: "auto" }} width={"100px"} src="https://i.ibb.co/3mVT24P/137894-loading.gif" alt="https://i.ibb.co/3mVT24P/137894-loading.gif" />
                    <Text fontSize={"4xl"}>Loading Products.....</Text>
                </div>}
                {error && <div style={{ textAlign: "center", position: "absolute", top: "30vh", left: "45vw" }}>
                    <img style={{ margin: "auto", borderRadius: "30px" }} width={"400px"} src="https://i.ibb.co/L6pZv8q/106720-404-page.gif" alt="https://i.ibb.co/L6pZv8q/106720-404-page.gif" />
                    <Text fontSize={"4xl"}>Something went wrong!</Text>
                </div>}
                {
                    !loading && !error && <div id="products">
                        {data && data.map(e => {
                            return <AdminCard key={e.id} data={e} />
                        })}
                    </div>
                }
            </main>
            <footer id="adminFooter">
                <p>All Rights Reserved</p>
            </footer>
        </div >
    )
}