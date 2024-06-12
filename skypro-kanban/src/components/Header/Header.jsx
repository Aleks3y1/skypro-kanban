import {useState} from "react";
import {Container, HeaderBlock, HeaderButton, HeaderNav, HeaderUser} from "./Header.styled.js";
import * as S from "./Header.styled.js";
import {postTodos} from "../../api.js";
import {useNavigate} from "react-router-dom";
import {routesApp} from "../../lib/RoutesApp.jsx";

    const Header = ({setCards, toggleTheme}) => {
    const [state, setState] = useState(false);
    const navigate = useNavigate();

    const handleLogout = (event) => {
        event.preventDefault();
        navigate(routesApp.EXIT);
    }

    const handleOpenUser = () => {
        setState((prevState) => !prevState);
    }

    const onAddCard = async (event) => {
        event.preventDefault();
        const newCard = {
            title: "Задача 777",
            topic: "Web Design",
            status: "Без статуса",
            description: "Подробное описание задачи",
            date: new Date().toISOString(),
        };
        try {
            const newTodos = await postTodos(newCard);
            setCards(newTodos.tasks);
            navigate(routesApp.MAIN)
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <S.Header>
            <Container>
                <HeaderBlock>
                    <div className="header__logo _show _light">
                        <a href="" target="_self">
                            <img src="/logo.png" alt="logo"/>
                        </a>
                    </div>
                    <div className="header__logo _dark">
                        <a href="" target="_self">
                            <img src="/logo_dark.png" alt="logo"/>
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
                                <button type="button" className="_hover03" onClick={handleLogout}>
                                    Выйти
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