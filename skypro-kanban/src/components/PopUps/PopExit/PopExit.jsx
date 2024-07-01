import * as S from "./PopExit.styled.js";
import {routesApp} from "../../../lib/RoutesApp.js";

const PopExit = ({logout}) => {
    return (
        <S.PopExitForm>
            <S.PopExitContainer>
                <S.PopExitBlock>
                    <S.PopExitTitleBlock>
                        <S.PopExitTitle>Выйти из аккаунта?</S.PopExitTitle>
                    </S.PopExitTitleBlock>
                    <S.PopExitFormed action="#">
                        <S.PopExitGroup>
                            <S.PopExitYesButton onClick={logout}>Да, выйти </S.PopExitYesButton>
                            <S.PopExitNoButton><S.PopNoLink to={routesApp.MAIN}>Нет,
                                остаться</S.PopNoLink></S.PopExitNoButton>
                        </S.PopExitGroup>
                    </S.PopExitFormed>
                </S.PopExitBlock>
            </S.PopExitContainer>
        </S.PopExitForm>
    );
}

export default PopExit;