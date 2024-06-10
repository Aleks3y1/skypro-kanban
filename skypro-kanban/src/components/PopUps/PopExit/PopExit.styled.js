import styled from "styled-components";
import {Link} from "react-router-dom";

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
    border: 0.7px solid var(--palette-navy-60, #565EEF);
    outline: none;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    line-height: 21px;
    font-weight: 500;
    letter-spacing: -0.14px;
    color: #565EEF;
    
    &:hover {
        background-color: #33399b;
        color: #FFFFFF;
    }
    @media only screen and (max-width: 375px) {
        width: 100%;
        height: 40px;
    }
`;

export const PopExitGroup = styled.div `
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
    }
`;