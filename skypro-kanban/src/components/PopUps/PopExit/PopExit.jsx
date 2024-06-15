import {PopExitGroup, PopExitNoButton, PopExitYesButton, PopNoLink} from "./PopExit.styled.js";
import {routesApp} from "../../../lib/RoutesApp.js";

const PopExit = ({logout}) => {
    return (
        <div className="pop-exit" id="popExit">
            <div className="pop-exit__container">
                <div className="pop-exit__block">
                    <div className="pop-exit__ttl">
                        <h2>Выйти из аккаунта?</h2>
                    </div>
                    <form className="pop-exit__form" id="formExit" action="#">
                        <PopExitGroup>
                            <PopExitYesButton onClick={logout}>Да, выйти </PopExitYesButton>
                            <PopExitNoButton><PopNoLink to={routesApp.MAIN}>Нет, остаться</PopNoLink></PopExitNoButton>
                        </PopExitGroup>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default PopExit;