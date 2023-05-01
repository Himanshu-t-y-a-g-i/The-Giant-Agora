import { Link, Navigate, useSearchParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { logout } from "../Redux/AuthReducer/action";
import "../Styles/Admin.css";

export const Admin = () => {
    const adminDetail = useSelector(store => store.authReducer.admin);
    if (!adminDetail.email || !adminDetail.password) {
        return <Navigate to={"/"} />
    }
    return (
        <div id="admin">
            <nav id="adminNav">
                <img src="https://zeevector.com/wp-content/uploads/LOGO/Amazon-India-Logo-PNG-White2.png" alt="Amazon Logo" />
                <Link to={"/"}>Back to main page</Link>
                <div>
                    <img src={adminDetail.image} alt="Admin image" />
                    <p>{adminDetail.name}</p>
                    <div>
                        <p onClick={() => logout()}>Sign-Out</p>
                    </div>
                </div>
            </nav>
            <aside id="adminAside">

            </aside>
            <main id="adminMain">
                <p id="welcomeBackground">Welcome {adminDetail.name.split(" ")[0]}</p>
                <div id="products"></div>
            </main>
            <footer id="adminFooter">
                <p>All Rights Reserved</p>
            </footer>
        </div>
    )
}