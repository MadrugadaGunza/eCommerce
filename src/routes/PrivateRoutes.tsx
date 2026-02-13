import React from "react"
import { Outlet, useNavigate } from "react-router-dom"
import Sidebar from "../components/Sidebar";

const PrivateRoutes = () => {
    const navigate = useNavigate();

    const token = localStorage.getItem('token');
    React.useEffect(() => {
        if (!token) {
            navigate('/login');
        }
    }, [token, navigate]);

    return (
        <div className="flex">
            <Sidebar />
            <main className="flex-1 p-6 bg-gray-100">
                <Outlet />
            </main>
        </div>
    )
}

export default PrivateRoutes
