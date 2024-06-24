import {useRef, useState} from "react";
import {Route, Routes, useNavigate} from "react-router-dom";
import PrivateRoute from "../PrivateRoute/PrivateRoute.jsx";
import MainPage from "../../pages/MainPage/MainPage.jsx";
import Exit from "../../pages/Exit/Exit.jsx";
import CardPage from "../../pages/CardPage/CardPage.jsx";
import NewCard from "../../pages/NewCard/NewCard.jsx";
import Login from "../../pages/Login/Login.jsx";
import Register from "../../pages/Register/Register.jsx";
import NotFound from "../../pages/NotFound/NotFound.jsx";
import {routesApp} from "../../lib/RoutesApp.js";
import {getTodos, loginInApp, registerInApp} from "../../api.js";
import {useUser} from "../../hooks/useUser.js";

const RoutesApp = () => {
    const navigate = useNavigate();
    const {userData, setUser, logout} = useUser();

    const emailUser = useRef(null);
    const passwordUser = useRef(null);

    const loginRegister = useRef(null);
    const nameRegister = useRef(null);
    const passRegister = useRef(null);

    const [setErrors] = useState({});
    const [setIsSubmitting] = useState(false);
    //const [setIsFormValid] = useState(true);
    const [setHasTriedSubmit] = useState(false);

    const validateForm = () => {
        const newErrors = {};
        if (!emailUser.current.value) {
            newErrors.email = 'Эл. почта не может быть пустой';
        } else if (!/\S+@\S+\.\S+/.test(emailUser.current.value)) {
            newErrors.email = 'Некорректный адрес электронной почты';
        }
        if (!passwordUser.current.value || passwordUser.current.value.length < 6) {
            newErrors.password = 'Пароль должен быть не менее 6 символов';
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    // const handleInputChange = () => {
    //     if (hasTriedSubmit) {
    //         setIsFormValid(validateForm());
    //     }
    // };

    const login = async (event) => {
        event.preventDefault();
        setHasTriedSubmit(true);
        if (validateForm()) {
            setIsSubmitting(true);
            try {
                const response = await loginInApp({
                    login: emailUser.current.value,
                    password: passwordUser.current.value
                });
                if (!response.error) {
                    setUser(response.user);
                    navigate(routesApp.MAIN);
                }
            } catch (error) {
                console.error(error);
                setErrors((prevErrors) => ({
                    ...prevErrors,
                    form: 'Введенные вами данные не распознаны. Проверьте свой логин и пароль и повторите попытку входа.'
                }));
                setIsSubmitting(false);
            }
        }
    };

    const register = async (event) => {
        event.preventDefault();
        try {
            await registerInApp({
                login: loginRegister.current.value,
                name: nameRegister.current.value,
                password: passRegister.current.value
            });
            navigate(routesApp.LOGIN);
        } catch (error) {
            console.error(error.message);
            alert(error.message);
        }
    };

    const fetchTodos = async (setCards) => {
        if (userData && userData.token) {
            try {
                const todos = await getTodos(userData.token);
                setCards(todos);
            } catch (error) {
                alert(error.message);
            }
        } else {
            console.error('Токен не найден');
        }
    };

    return (
        <Routes>
            <Route element={<PrivateRoute isAuth={!!userData}/>}>
                <Route path={routesApp.MAIN} element={<MainPage fetchTodos={fetchTodos}/>}>
                    <Route path={routesApp.EXIT} element={<Exit logout={logout}/>}/>
                    <Route path={routesApp.CARD} element={<CardPage/>}/>
                    <Route path={routesApp.NEW_CARD} element={<NewCard/>}/>
                </Route>
            </Route>
            <Route path={routesApp.LOGIN}
                   element={<Login login={login} emailUser={emailUser} passwordUser={passwordUser}/>}/>
            <Route path={routesApp.REGISTER}
                   element={<Register register={register} loginRegister={loginRegister} nameRegister={nameRegister}
                                      passRegister={passRegister}/>}/>
            <Route path={routesApp.NOT_FOUND} element={<NotFound/>}/>
        </Routes>
    );
};

export default RoutesApp;