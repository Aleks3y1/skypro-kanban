import styled from "styled-components";
import {darkTheme, lightTheme} from "../../theme.js";

export const HeaderLogoWrapLight = styled.div`
    display: ${props => props.theme.body === "#EAEEF6" ? 'block' : 'none'};
    transition: all 0.25s linear;
`;

export const HeaderLogoWrapDark = styled.div`
    display: ${props => props.theme.body === "#EAEEF6" ? 'none' : 'block'};
    transition: all 0.25s linear;
`;

export const HeaderLogo = styled.img`
    width: 85px;
`;

export const HeaderBlock = styled.div`
    height: 70px;
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: space-between;
    position: relative;
    top: 0;
    left: 0;
    padding: 0 10px;
`;

export const HeaderNav = styled.div`
    max-width: 290px;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Header = styled.header`
    width: 100%;
    margin: 0 auto;
    background-color: ${(props) => props.theme.nav};
    color: ${(props) => props.theme.text};
    transition: all 0.25s linear;
`;

export const Container = styled.div`
    max-width: 1260px;
    width: 100%;
    margin: 0 auto;
    padding: 0 30px;

    @media screen and (max-width: 495px) {
        width: 100%;
        padding: 0 16px;
    }
`;

export const HeaderButton = styled.button`
    width: 178px;
    height: 30px;
    border-radius: 4px;
    background-color: #565EEF;
    color: #FFFFFF;
    border: none;
    font-size: 14px;
    line-height: 1;
    font-weight: 500;
    margin-right: 20px;

    &:hover {
        background-color: #33399b;
    }

    @media screen and (max-width: 495px) {
        z-index: 3;
        position: fixed;
        left: 16px;
        bottom: 30px;
        top: auto;
        width: calc(100vw - 32px);
        height: 40px;
        border-radius: 4px;
        margin-right: 0;
    }
`;

export const HeaderUser = styled.div`
    height: 20px;
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    line-height: 20px;
    color: ${props => props.theme.text};
    transition: all 0.25s linear;
    cursor: pointer;

    &::after {
        content: "";
        display: block;
        width: 6px;
        height: 6px;
        border-radius: 1px;
        border-left: 1.9px solid #565EEF;
        border-bottom: 1.9px solid #565EEF;
        transform: rotate(-45deg);
        margin: -6px 0 0 5px;
        padding: 0;
    }

    &:hover {
        color: #33399b;
    }

    &:hover::after {
        border-left-color: #33399b;
        border-bottom-color: #33399b;
    }
`;

export const HeaderPopUserSet = styled.div`
    display: block;
    position: absolute;
    top: 61px;
    right: 0;
    width: 213px;
    height: 205px;
    border-radius: 10px;
    border: 0.7px solid rgba(148, 166, 190, 0.4);
    padding: 34px;
    text-align: center;
    z-index: 2;
    background: ${props => 
            props.theme.body === "#EAEEF6" ? lightTheme.popUserSetBGC : darkTheme.popUserSetBGC};
    box-shadow: 0 10px 39px 0 rgba(148, 166, 190, 0.4);
    transition: all 0.25s linear;

    &:target {
        display: block;
    }
`;

export const PopUserName = styled.p`
    color: ${props =>
            props.theme.body === "#EAEEF6" ? lightTheme.popUserSetThemeP : darkTheme.popUserSetThemeP};
    font-size: 14px;
    font-weight: 500;
    line-height: 21px;
    letter-spacing: -0.14px;
    margin-bottom: 4px;
`;

export const PopUserEmail = styled.p`
    color: #94A6BE;
    font-size: 14px;
    line-height: 21px;
    letter-spacing: -0.14px;
    margin-bottom: 10px;
`;

export const PopUpButton = styled.button`
    width: 72px;
    height: 30px;
    background: transparent;
    border-radius: 4px;
    border: 1px solid ${props =>
            props.theme.body === "#EAEEF6" ? lightTheme.popUserButton : darkTheme.popUserButton};
    color: ${props =>
            props.theme.body === "#EAEEF6" ? lightTheme.popUserButtonText : darkTheme.popUserButtonText};
    transition: all 0.25s linear;

    &:hover {
        background-color: #33399b;
        color: #FFFFFF;
        border: none;
    }
`;

export const PopUserTheme = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 30px;
`;

export const PopUserThemeP = styled.p`
    color: ${props =>
            props.theme.body === "#EAEEF6" ? lightTheme.popUserSetThemeP : darkTheme.popUserSetThemeP};
    font-size: 14px;
    line-height: 21px;
    letter-spacing: -0.14px;
`;

export const PopUserThemeInput = styled.input`
    position: relative;
    width: 24px;
    height: 13px;
    border-radius: 100px;
    background: ${props =>
            props.theme.body === "#EAEEF6" ? lightTheme.checkBG : darkTheme.checkBG};
    outline: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;

    &::before {
        content: "";
        position: absolute;
        top: 1px;
        left: 1px;
        width: 11px;
        height: 11px;
        border-radius: 50%;
        background-color: #94A6BE;
        transition: 0.5s;
    }

    &:checked::before {
        left: 12px;
    }
`;