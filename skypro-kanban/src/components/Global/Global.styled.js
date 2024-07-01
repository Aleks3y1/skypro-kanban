import {createGlobalStyle} from 'styled-components';
import {darkTheme, lightTheme} from "../../theme.js";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    *:before,
    *:after {
        box-sizing: border-box;
    }

    a,
    a:visited {
        text-decoration: none;
        cursor: pointer;
    }

    ul li {
        list-style: none;
    }

    html,
    body {
        width: 100%;
        height: 100%;
        font-family: "Roboto", Arial, Helvetica, sans-serif;
        color: #000000;
    }

    .pop-new-card__block, .pop-browse__block {
        background: ${props =>
                props.theme.body === "#EAEEF6" ? lightTheme.popExitBGC : darkTheme.popExitBGC};
    }

    .pop-new-card__ttl, .subttl, .calendar__p span, .pop-browse__ttl {
        color: ${props =>
                props.theme.body === "#EAEEF6" ? lightTheme.popExitTtl : darkTheme.popExitTtl};
    }

    .pop-exit__block {
        background: ${props =>
                props.theme.body === "#EAEEF6" ? lightTheme.popExitBGC : darkTheme.popExitBGC};
    }

    .pop-exit__ttl {
        color: ${props =>
                props.theme.body === "#EAEEF6" ? lightTheme.popExitTtl : darkTheme.popExitTtl};
    }

    .form-browse__area {
        background: ${props =>
                props.theme.body === "#EAEEF6" ? "#EAEEF6" : "#151419"};
    }

    ._btn-bor a {
        color: ${props =>
                props.theme.body === "#EAEEF6" ? "#565EEF" : "#FFFFFF"};
    }

    ._btn-bor {
        border: 0.7px solid var(--palette-navy-60, ${props =>
                props.theme.body === "#EAEEF6" ? "#565EEF" : "#FFFFFF"});
    }

    .pop-exit__block button:last-child {
        color: ${props =>
                props.theme.body === "#EAEEF6" ? lightTheme.popExitButtonText : darkTheme.popExitButtonText};

        &:hover {
            color: ${props =>
                    props.theme.body === "#EAEEF6" ? darkTheme.popExitButtonText : darkTheme.popExitButtonText};
            border: 0.7px solid var(--palette-navy-60, #33399);
        }
    }

    .pop-user-set__theme input[type=checkbox] {
        background: ${props =>
                props.theme.body === "#EAEEF6" ? lightTheme.checkBG : darkTheme.checkBG};
    }

    .pop-user-set__name, .pop-user-set__theme p {
        color: ${props =>
                props.theme.body === "#EAEEF6" ? lightTheme.popUserSetThemeP : darkTheme.popUserSetThemeP};
    }
`;

