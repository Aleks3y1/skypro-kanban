import {useContext, useState} from "react";
import {Container, HeaderBlock, HeaderButton, HeaderNav, HeaderUser} from "./Header.styled.js";
import * as S from "./Header.styled.js";
import {useNavigate} from "react-router-dom";
import {routesApp} from "../../lib/RoutesApp.js";
import {UserContext} from "../../contexts/UserContext.jsx";

const Header = ({toggleTheme}) => {
    const [state, setState] = useState(false);
    const navigate = useNavigate();

    const {userData} = useContext(UserContext);

    const handleLogout = (event) => {
        event.preventDefault();
        navigate(routesApp.EXIT);
    }

    const handleOpenUser = () => {
        setState((prevState) => !prevState);
    }

    const addCardHUD = (event) => {
        event.preventDefault();
        navigate(routesApp.NEW_CARD);
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
                        <HeaderButton onClick={addCardHUD}>
                            Создать новую задачу
                        </HeaderButton>
                        <HeaderUser onClick={handleOpenUser}>
                            {userData.name}
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