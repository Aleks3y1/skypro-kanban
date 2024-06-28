import styled from "styled-components";
import {Link} from "react-router-dom";
import {darkTheme, lightTheme} from "../../../theme.js";

export const PopExitYesButton = styled.button`
    width: 153px;
    height: 30px;
    background-color: #565EEF;
    border-radius: 4px;
    border: none;
    outline: none;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    line-height: 21px;
    font-weight: 500;
    letter-spacing: -0.14px;
    color: #FFFFFF;
    margin-right: 10px;

    &:hover {
        background-color: #33399b;
        transition: all 0.25s linear;
    }

    @media only screen and (max-width: 375px) {
        width: 100%;
        height: 40px;
        margin-right: 0;
        margin-bottom: 10px;
    }
`;

export const PopExitNoButton = styled.button`
    width: 153px;
    height: 30px;
    background-color: transparent;
    border-radius: 4px;
    border: 0.7px solid var(--palette-navy-60, ${props =>
            props.theme.body === "#EAEEF6" ? "#565EEF" : "#FFFFFF"});
    outline: none;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    line-height: 21px;
    font-weight: 500;
    letter-spacing: -0.14px;
    color: ${props =>
            props.theme.body === "#EAEEF6" ? lightTheme.popExitButtonText : darkTheme.popExitButtonText};

    &:hover {
        background-color: #33399b;
        color: #FFFFFF;
        border: 0.7px solid #33399b;
        transition: all 0.25s linear;
    }

    @media only screen and (max-width: 375px) {
        width: 100%;
        height: 40px;
    }
`;

export const PopExitGroup = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media only screen and (max-width: 375px) {
        display: block;
    }
`;

export const PopNoLink = styled(Link)`
    color: inherit;

    &:hover {
        color: inherit;
        transition: all 0.25s linear;
    }
`;

export const PopExitForm = styled.div`
    display: block;
    width: 100%;
    height: 100%;
    min-width: 320px;
    min-height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 5;

    &:target {
        display: block;
    }
`;

export const PopExitContainer = styled.div`
    width: 100%;
    height: 100%;
    min-height: 100vh;
    padding: 0 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0.4);
`;

export const PopExitBlock = styled.div`
    display: block;
    margin: 0 auto;
    background: ${props =>
            props.theme.body === "#EAEEF6" ? lightTheme.popExitBGC : darkTheme.popExitBGC};
    max-width: 370px;
    width: 100%;
    padding: 50px 60px;
    border-radius: 10px;
    border: 0.7px solid #D4DBE5;
    box-shadow: 0 4px 67px -12px rgba(0, 0, 0, 0.13);

    @media only screen and (max-width: 375px) {
        padding: 50px 20px;
    }
`;

export const PopExitTitleBlock = styled.div`
    color: ${props =>
            props.theme.body === "#EAEEF6" ? lightTheme.popExitTtl : darkTheme.popExitTtl};
`;

export const PopExitTitle = styled.h2`
    text-align: center;
    font-size: 20px;
    font-weight: 700;
    line-height: 30px;
    letter-spacing: -0.4px;
    margin-bottom: 20px;
    color: inherit;
`;

export const PopExitFormed = styled.form``;