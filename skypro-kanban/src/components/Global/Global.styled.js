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

    .pop-user-set__theme input[type=checkbox] {
        background: ${props =>
                props.theme.body === "#EAEEF6" ? lightTheme.checkBG : darkTheme.checkBG};
    }

    ._light {
        display: ${props => props.theme.body === "#EAEEF6" ? 'block' : 'none'};
        transition: all 0.25s linear;
    }

    ._dark {
        display: ${props => props.theme.body === "#EAEEF6" ? 'none' : 'block'};
        transition: all 0.25s linear;
    }

    .header__pop-user-set {
        background-color: ${props =>
                props.theme.body === "#EAEEF6" ? lightTheme.popUserSetBGC : darkTheme.popUserSetBGC};
        box-shadow: 0px 10px 39px 0px rgba(148, 166, 190, 0.4);
        transition: all 0.25s linear;
    }

    .pop-user-set__name, .pop-user-set__theme p {
        color: ${props =>
                props.theme.body === "#EAEEF6" ? lightTheme.popUserSetThemeP : darkTheme.popUserSetThemeP};
    }

    .pop-user-set button a {
        color: ${props =>
                props.theme.body === "#EAEEF6" ? lightTheme.popUserButtonText : darkTheme.popUserButtonText};
    }

    .pop-user-set button {
        border: 1px solid ${props =>
                props.theme.body === "#EAEEF6" ? lightTheme.popUserButton : darkTheme.popUserButton};

        &:hover {
            border: none;
        }
    }
`;

