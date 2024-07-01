import {createContext, useEffect, useState} from "react";

export const UserContext = createContext(null);

const storedUser = () => {
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
}

const UserProvider = ({children}) => {
    const [userData, setUserData] = useState(storedUser());

    const logout = (event) => {
        event.preventDefault();
        setUserData(null);
        localStorage.removeItem("user");
        localStorage.removeItem("token");
    }

    const setUser = (newUser) => {
        setUserData(newUser);
        localStorage.setItem("user", JSON.stringify(newUser));
    }

    useEffect(() => {
        storedUser();
    }, []);

    return <UserContext.Provider value={{userData, logout, setUser}}>
        {children}
    </UserContext.Provider>;
}
export default UserProvider;