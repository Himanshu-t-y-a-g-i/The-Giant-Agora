import { Link, Navigate, useSearchParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { logout } from "../Redux/AuthReducer/action";

export const Admin = () => {
    const adminDetail = useSelector(store => store.authReducer.admin);
    if (!adminDetail.email || !adminDetail.password) {
        return <Navigate to={"/"} />
    }
    console.log(adminDetail);
    return (
        <div>
            <nav>
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
        </div>
    )
}