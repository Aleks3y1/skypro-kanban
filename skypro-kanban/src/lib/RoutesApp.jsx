import {useState} from "react";
import PrivateRoute from "../components/PrivateRoute/PrivateRoute.jsx";
import MainPage from "../pages/MainPage/MainPage.jsx";
import Exit from "../pages/Exit/Exit.jsx";
import CardPage from "../pages/CardPage/CardPage.jsx";
import PopNewCard from "../pages/PopNewCard/PopNewCard.jsx";
import Login from "../pages/Login/Login.jsx";
import Register from "../pages/Register/Register.jsx";
import NotFound from "../pages/NotFound/NotFound.jsx";
import {Route, Routes, useNavigate} from "react-router-dom";

export const routesApp = {
    LOGIN: "/login",
    REGISTER: "/register",
    MAIN: "/",
    CARD: "/card/:id",
    EXIT: "/exit",
    NOT_FOUND: "*",
    NEW_CARD: "/newCard",
}

const RoutesApp = () => {
    const [isAuth, setIsAuth] = useState(false);
    const navigate = useNavigate();

    const login = (event) => {
        event.preventDefault();
        setIsAuth(true);
        navigate(routesApp.MAIN);
    }

    const logout = (event) => {
        event.preventDefault();
        setIsAuth(false);
        navigate(routesApp.LOGIN);
    }

    return (
        <Routes>
            <Route element={<PrivateRoute isAuth={isAuth}/>}>
                <Route path={routesApp.MAIN} element={<MainPage/>}>
                    <Route path={routesApp.EXIT} element={<Exit logout={logout}/>}/>
                    <Route path={routesApp.CARD} element={<CardPage/>}/>
                    <Route path={routesApp.NEW_CARD} element={<PopNewCard/>}/>
                </Route>
            </Route>
            <Route path={routesApp.LOGIN} element={<Login login={login}/>}/>
            <Route path={routesApp.REGISTER} element={<Register/>}/>
            <Route path={routesApp.NOT_FOUND} element={<NotFound/>}/>
        </Routes>
    )
        ;
}

export default RoutesApp;
