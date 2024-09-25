export const getRole = () => {
    return JSON.parse(localStorage.getItem("role"));
}

export const getUser = () => {
    return JSON.parse(localStorage.getItem("user"));
}

export const updateLocalUser = (name, email) => {
    localStorage.removeItem("user");
    localStorage.setItem("user", JSON.stringify({name: name, email: email}))
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