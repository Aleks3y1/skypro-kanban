import {createContext, useEffect, useState} from "react";

export const UserContext = createContext(null);

const UserProvider = ({children}) => {
    const [userData, setUserData] = useState(() => {
        const storedUser = localStorage.getItem("user");
        return storedUser ? JSON.parse(storedUser) : null;
    });

    const logout = (event) => {
        event.preventDefault();
        setUserData(null);
        localStorage.removeItem("user");
    }

    const setUser = (newUser) => {
        setUserData(newUser);
        localStorage.setItem("user", JSON.stringify(newUser));
    }

    // const getUser = () => {
    //     return localStorage.getItem("user") ?
    //         JSON.parse(localStorage.getItem("user")) : null;
    // }

    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
            setUserData(JSON.parse(storedUser));
        }
    }, []);

    return <UserContext.Provider value={{userData, logout, setUser}}>
        {children}
    </UserContext.Provider>;
}
export default UserProvider;