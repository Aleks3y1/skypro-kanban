import "../../App.css";
import {useState} from "react";
import {ThemeProvider} from "styled-components";
import {Wrapper} from "./MainPage.styled.js";
import {GlobalStyle} from "../../components/Global/Global.styled.js";
import PopExit from "../../components/PopUps/PopExit/PopExit.jsx";
import PopNewCard from "../../components/PopUps/PopNewCard/PopNewCard.jsx";
import PopBrowse from "../../components/PopUps/PopBrowse/PopBrowse.jsx";
import Header from "../../components/Header/Header.jsx";
import Main from "../../components/Main/Main.jsx";
import {darkTheme, lightTheme} from "../../theme.js";
import {cardList} from "../../data.js";
import {Outlet} from "react-router-dom";

const MainPage = () => {
    const [cards, setCards] = useState(cardList);
    const [theme, setTheme] = useState("light");

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    }

    return (
        <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
            <GlobalStyle/>
            <Wrapper>
                <PopExit/>
                {/*<PopNewCard/>*/}
                {/*<PopBrowse/>*/}

                <Outlet />
                <Header setCards={setCards} cards={cards} toggleTheme={toggleTheme}/>
                <Main cardList={cards}/>
            </Wrapper>
        </ThemeProvider>
    );
}
export default MainPage;