import "./App.css";
import {Route, Routes, useNavigate} from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage.jsx";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute.jsx";
import Login from "./pages/Login/Login.jsx";
import Exit from "./pages/Exit/Exit.jsx";
import Register from "./pages/Register/Register.jsx";
import CardPage from "./pages/CardPage/CardPage.jsx";
import {useState} from "react";
import NotFound from "./pages/NotFound/NotFound.jsx";
import {appRoutes} from "./lib/AppRoutes.jsx";
import PopNewCard from "./pages/PopNewCard/PopNewCard.jsx";

function App() {
    const [isAuth, setIsAuth] = useState(false);
    const navigate = useNavigate();

    const login = (event) => {
        event.preventDefault();
        setIsAuth(true);
        navigate(appRoutes.MAIN);
    }

    const logout = (event) => {
        event.preventDefault();
        setIsAuth(false);
        navigate(appRoutes.LOGIN);
    }

    return (
        <Routes>
            <Route element={<PrivateRoute isAuth={isAuth}/>}>
                <Route path={appRoutes.MAIN} element={<MainPage/>}>
                    <Route path={appRoutes.EXIT} element={<Exit logout={logout}/>}/>
                    <Route path={appRoutes.CARD} element={<CardPage/>}/>
                    <Route path={appRoutes.NEW_CARD} element={<PopNewCard/>}/>
                </Route>
            </Route>
            <Route path={appRoutes.LOGIN} element={<Login login={login}/>}/>
            <Route path={appRoutes.REGISTER} element={<Register/>}/>
            <Route path={appRoutes.NOT_FOUND} element={<NotFound/>}/>
        </Routes>
    )
        ;
}

export default App;
