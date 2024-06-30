import {useEffect, useState} from "react";
import {ThemeProvider} from "styled-components";
import {Wrapper} from "./MainPage.styled.js";
import {GlobalStyle} from "../../components/Global/Global.styled.js";
import Header from "../../components/Header/Header.jsx";
import Main from "../../components/Main/Main.jsx";
import {darkTheme, lightTheme} from "../../theme.js";
import {Outlet} from "react-router-dom";
import {useUser} from "../../hooks/useUser.js";
import {useTask} from "../../hooks/useTask.js";

const MainPage = ({fetchTodos}) => {
    const {setTasks} = useTask();
    const [theme, setTheme] = useState("light");
    const {userData} = useUser();

    useEffect(() => {
        if (!userData) {
            fetchTodos(setTasks);
        }
    }, [fetchTodos, userData]);

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    }

    return (
        <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
            <GlobalStyle/>
            <Wrapper>

                <Outlet/>
                <Header toggleTheme={toggleTheme}/>
                <Main/>
            </Wrapper>
        </ThemeProvider>
    );
}
export default MainPage;