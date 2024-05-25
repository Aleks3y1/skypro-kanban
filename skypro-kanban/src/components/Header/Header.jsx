import {useState} from "react";
import {HeaderBlock, HeaderNav} from "./Header.styled.js";
import {createGlobalStyle, ThemeProvider} from "styled-components";

const lightTheme = {
    body: "#EAEEF6",
    card: "#FFFFFF",
    checkBG: "#EAEEF6",
    text: "black",
    titleText: "#000000",
    popUserSetBGC: "#FFFFFF'",
    popUserSetThemeP: "#000",
    popUserButton: "#565EEF",
    popUserButtonText: "#565EEF",
}

const darkTheme = {
    body: "#151419",
    nav: "#20202C",
    card: "#20202C",
    checkBG: "#FFFFFF",
    text: "white",
    titleText: "#FFFFFF",
    popUserSetBGC: "#20202C",
    popUserSetThemeP: "#FFFFFF",
    popUserButton: "#FFFFFF",
    popUserButtonText: "#FFFFFF",
}

const colorTheme = (props, a, b) => {
    return props.theme.body === "#EAEEF6" ? a : b;
}

const ThemeStyle = createGlobalStyle`
    .header {
        background-color: ${props => props.theme.nav};
        color: ${props => props.theme.text};
        transition: all 0.25s linear;
    }

    ._light {
        display: ${props => colorTheme(props, 'block', 'none')};
        transition: all 0.25s linear;
    }

    ._dark {
        display: ${props => colorTheme(props, 'none', 'block')};
        transition: all 0.25s linear;
    }

    .header__user {
        color: ${props => props.theme.text};
        transition: all 0.25s linear;
    }

    .wrapper {
        background-color: ${props =>
                colorTheme(props, lightTheme.body, darkTheme.body)};
        transition: all 0.25s linear;
    }

    .cards__card {
        background-color: ${props =>
                colorTheme(props, lightTheme.card, darkTheme.card)};
        transition: all 0.25s linear;
    }

    .card__title {
        color: ${props =>
                colorTheme(props, lightTheme.titleText, darkTheme.titleText)};
        transition: all 0.25s linear;
    }

    .header__pop-user-set {
        background-color: ${props =>
                colorTheme(props, lightTheme.popUserSetBGC, darkTheme.popUserSetBGC)};
        box-shadow: 0px 10px 39px 0px rgba(148, 166, 190, 0.4);
        transition: all 0.25s linear;
    }

    .pop-user-set__name, .pop-user-set__theme p {
        color: ${props =>
                colorTheme(props, lightTheme.popUserSetThemeP, darkTheme.popUserSetThemeP)};
    }

    .pop-user-set button a {
        color: ${props =>
                colorTheme(props, lightTheme.popUserButtonText, darkTheme.popUserButtonText)};
    }

    .pop-user-set button {
        border: 1px solid ${props =>
                colorTheme(props, lightTheme.popUserButton, darkTheme.popUserButton)};

        &:hover {
            border: none;
        }
    }

    .pop-user-set__theme input[type=checkbox] {
        background: ${props => colorTheme(props, lightTheme.checkBG, darkTheme.checkBG)};
    }
`;


const Header = ({setCards, cards}) => {
    const [state, setState] = useState(false);

    const handleOpenUser = () => {
        setState((prevState) => !prevState);
    }

    const onAddCard = () => {
        const newCard = {
            id: Date.now(),
            theme: "Web Design",
            title: "Задача 1",
            date: "30.10.23",
            status: "Без статуса",
        };
        const newCardsList = [...cards, newCard];
        setCards(newCardsList);
        console.log(cards);
    }


    const [theme, setTheme] = useState("light");
    const toggleTheme = () => {
        theme === "light" ? setTheme("dark") : setTheme("light");

    }

    return (
        <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
            <ThemeStyle/>
            <header className="header">
                <div className="container">
                    <HeaderBlock>
                        <div className="header__logo _show _light">
                            <a href="" target="_self">
                                <img src="../public/logo.png" alt="logo"/>
                            </a>
                        </div>
                        <div className="header__logo _dark">
                            <a href="" target="_self">
                                <img src="../public/logo_dark.png" alt="logo"/>
                            </a>
                        </div>
                        <HeaderNav>
                            <button className="header__btn-main-new _hover01" onClick={onAddCard}>
                                Создать новую задачу
                            </button>
                            <div className="header__user _hover02" onClick={handleOpenUser}>
                                Ivan Ivanov
                            </div>
                            {state && (
                                <div className="header__pop-user-set pop-user-set">
                                    <p className="pop-user-set__name">Ivan Ivanov</p>
                                    <p className="pop-user-set__mail">ivan.ivanov@gmail.com</p>
                                    {/*11111111*/}
                                    <div className="pop-user-set__theme">
                                        <p>Темная тема</p>
                                        <input type="checkbox" className="checkbox" name="checkbox"
                                               onChange={toggleTheme}/>
                                    </div>
                                    <button type="button" className="_hover03">
                                        <a href="#popExit">Выйти</a>
                                    </button>
                                </div>
                            )}
                        </HeaderNav>
                    </HeaderBlock>
                </div>
            </header>
        </ThemeProvider>
    );
}

export default Header;