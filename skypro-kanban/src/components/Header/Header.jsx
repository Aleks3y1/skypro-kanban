import {useState} from "react";
import {Container, HeaderBlock, HeaderButton, HeaderNav, HeaderUser} from "./Header.styled.js";
import * as S from "./Header.styled.js";

const Header = ({setCards, cards, toggleTheme}) => {
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
    }

    return (
        <S.Header>
            <Container>
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
                        <HeaderButton onClick={onAddCard}>
                            Создать новую задачу
                        </HeaderButton>
                        <HeaderUser onClick={handleOpenUser}>
                            Ivan Ivanov
                        </HeaderUser>
                        {state && (
                            <div className="header__pop-user-set pop-user-set">
                                <p className="pop-user-set__name">Ivan Ivanov</p>
                                <p className="pop-user-set__mail">ivan.ivanov@gmail.com</p>
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
            </Container>
        </S.Header>
    );
}

export default Header;