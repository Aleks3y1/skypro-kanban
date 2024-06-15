import {useRef, useState} from "react";
import {Route, Routes, useNavigate} from "react-router-dom";
import PrivateRoute from "../PrivateRoute/PrivateRoute.jsx";
import MainPage from "../../pages/MainPage/MainPage.jsx";
import Exit from "../../pages/Exit/Exit.jsx";
import CardPage from "../../pages/CardPage/CardPage.jsx";
import PopNewCard from "../../pages/PopNewCard/PopNewCard.jsx";
import Login from "../../pages/Login/Login.jsx";
import Register from "../../pages/Register/Register.jsx";
import NotFound from "../../pages/NotFound/NotFound.jsx";
import {routesApp} from "../../lib/RoutesApp.js";
import {loginInApp, registerInApp} from "../../api.js";

const RoutesApp = () => {
    const [isAuth, setIsAuth] = useState(false);
    const navigate = useNavigate();

    const emailUser = useRef(null);
    const passwordUser = useRef(null);

    const loginRegister = useRef(null);
    const nameRegister = useRef(null);
    const passRegister = useRef(null);


    const login = async (event) => {
        event.preventDefault();
        try {
            const response = await loginInApp({
                login: emailUser.current.value,
                password: passwordUser.current.value
            });
            setIsAuth(true);
            navigate(routesApp.MAIN);
        } catch (error) {
            console.error(error);
        }
    }

    const register = async (event) => {
        event.preventDefault();
        try {
            const response = await registerInApp({
                login: loginRegister.current.value,
                name: nameRegister.current.value,
                password: passRegister.current.value
            });
            console.log(response);
            navigate(routesApp.LOGIN);
        } catch (error) {
            console.error(error);
        }
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
            <Route path={routesApp.LOGIN}
                   element={<Login login={login} emailUser={emailUser} passwordUser={passwordUser}/>}/>
            <Route path={routesApp.REGISTER}
                   element={<Register register={register} loginRegister={loginRegister} nameRegister={nameRegister}
                                      passRegister={passRegister}/>}/>
            <Route path={routesApp.NOT_FOUND} element={<NotFound/>}/>
        </Routes>
    )
        ;
}
export default RoutesApp;