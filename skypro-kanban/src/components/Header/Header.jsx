import {useState} from "react";
import * as S from "./Header.styled.js";
import {useNavigate} from "react-router-dom";
import {routesApp} from "../../lib/RoutesApp.js";
import {useUser} from "../../hooks/useUser.js";

const Header = ({toggleTheme}) => {
    const [state, setState] = useState(false);
    const navigate = useNavigate();

    const {userData} = useUser();

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
            <S.Container>
                <S.HeaderBlock>
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
                    <S.HeaderNav>
                        <S.HeaderButton onClick={addCardHUD}>
                            Создать новую задачу
                        </S.HeaderButton>
                        <S.HeaderUser onClick={handleOpenUser}>
                            {userData.name}
                        </S.HeaderUser>
                        {state && (
                            <div className="header__pop-user-set pop-user-set">
                                <p className="pop-user-set__name">{userData.name}</p>
                                <p className="pop-user-set__mail">{userData.login}</p>
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
                    </S.HeaderNav>
                </S.HeaderBlock>
            </S.Container>
        </S.Header>
    );
}

export default Header;