import "../../App.css";
import {useContext, useEffect, useState} from "react";
import {ThemeProvider} from "styled-components";
import {Wrapper} from "./MainPage.styled.js";
import {GlobalStyle} from "../../components/Global/Global.styled.js";
import Header from "../../components/Header/Header.jsx";
import Main from "../../components/Main/Main.jsx";
import {darkTheme, lightTheme} from "../../theme.js";
import {cardList} from "../../data.js";
import {Outlet} from "react-router-dom";
import {UserContext} from "../../contexts/UserContext.jsx";

const MainPage = ({fetchTodos}) => {
    const [cards, setCards] = useState(cardList);
    const [theme, setTheme] = useState("light");
    const {userData} = useContext(UserContext);

    useEffect(() => {
        if (userData) {
            fetchTodos(setCards);
        }
    }, [fetchTodos, userData]);

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    }

    return (
        <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
            <GlobalStyle/>
            <Wrapper>
                {/*<PopExit/>*/}
                {/*<PopNewCard/>*/}
                {/*<PopBrowse/>*/}

                <Outlet/>
                <Header setCards={setCards} cards={cards} toggleTheme={toggleTheme}/>
                <Main cardList={cards}/>
            </Wrapper>
        </ThemeProvider>
    );
}
export default MainPage;