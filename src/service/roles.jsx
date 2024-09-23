import { useNavigate } from "react-router-dom";

export const getRole = () => {
    return localStorage.getItem("role");
}

export const getUser = () => {
    return JSON.parse(localStorage.getItem("user"));
}

export const isAuthenticated = () => {
    return localStorage.getItem("token") !== null && localStorage.getItem("token") !== undefined;

}

export const handleLogout = (navigate) => {
    localStorage.removeItem("role");
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate('/'); 
};