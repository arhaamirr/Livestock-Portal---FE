export const getRole = () => {
    return JSON.parse(localStorage.getItem("role"));
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