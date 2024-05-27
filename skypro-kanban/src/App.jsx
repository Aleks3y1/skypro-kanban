import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import PopBrowse from "./components/PopUps/PopBrowse/PopBrowse";
import PopExit from "./components/PopUps/PopExit/PopExit";
import PopNewCard from "./components/PopUps/PopNewCard/PopNewCard";
import {useState} from "react";
import {cardList} from "./data.js";
import {darkTheme, lightTheme} from "./theme.js";
import {ThemeProvider} from "styled-components";
import {Wrapper} from "./components/App.styled.js";
import {GlobalStyle} from "./components/Global/Global.styled.js";

function App() {
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
                <PopNewCard/>
                <PopBrowse/>

                <Header setCards={setCards} cards={cards} toggleTheme={toggleTheme}/>
                <Main cardList={cards}/>
            </Wrapper>
        </ThemeProvider>
    );
}

export default App;
