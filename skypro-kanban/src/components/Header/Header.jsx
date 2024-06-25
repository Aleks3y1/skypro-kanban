import {useState} from "react";
import * as S from "./Header.styled.js";
import {Link, useNavigate} from "react-router-dom";
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
                    <S.HeaderLogoWrapLight>
                        <Link to={routesApp.MAIN} target="_self">
                            <S.HeaderLogo src="/logo.png" alt="logo"/>
                        </Link>
                    </S.HeaderLogoWrapLight>
                    <S.HeaderLogoWrapDark>
                        <Link to={routesApp.MAIN} target="_self">
                            <S.HeaderLogo src="/logo_dark.png" alt="logo"/>
                        </Link>
                    </S.HeaderLogoWrapDark>
                    <S.HeaderNav>
                        <S.HeaderButton onClick={addCardHUD}>
                            Создать новую задачу
                        </S.HeaderButton>
                        <S.HeaderUser onClick={handleOpenUser}>
                            {userData.name}
                        </S.HeaderUser>
                        {state && (
                            <S.HeaderPopUserSet>
                                <S.PopUserName>{userData.name}</S.PopUserName>
                                <S.PopUserEmail>{userData.login}</S.PopUserEmail>
                                <S.PopUserTheme>
                                    <S.PopUserThemeP>Темная тема</S.PopUserThemeP>
                                    <S.PopUserThemeInput type="checkbox" name="checkbox"
                                           onChange={toggleTheme}/>
                                </S.PopUserTheme>
                                <S.PopUpButton onClick={handleLogout}>
                                    Выйти
                                </S.PopUpButton>
                            </S.HeaderPopUserSet>
                        )}
                    </S.HeaderNav>
                </S.HeaderBlock>
            </S.Container>
        </S.Header>
    );
}

export default Header;