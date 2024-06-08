import {PopExitGroup, PopExitNoButton, PopExitYesButton} from "./PopExit.styled.js";

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
								<PopExitNoButton to={'/'}>Нет, остаться</PopExitNoButton>
							</PopExitGroup>
						</form>
					</div>
				</div>
			</div>
     );
}
 
export default PopExit;