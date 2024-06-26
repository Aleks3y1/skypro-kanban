import styled from "styled-components";
import {darkTheme, lightTheme} from "../../../theme.js";
import {Link} from "react-router-dom";

const topicStyles = {
    _orange: {
        backgroundColor: "#FFE4C2",
        color: "#FF6D00",
    },
    _green: {
        backgroundColor: "#B4FDD1",
        color: "#06B16E",
    },
    _purple: {
        backgroundColor: "#E9D4FF",
        color: "#9A48F1",
    }
}

export const PopBrowseTopBlock = styled.div `
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 18px;
`;

export const PopBrowseContent = styled.div `
    display: block;
    text-align: left;
`;

export const CategoriesTheme = styled.div `
    display: inline-block;
    width: auto;
    height: 30px;
    padding: 8px 20px;
    border-radius: 24px;
    margin-right: 7px;
    opacity: 1;
    background-color: ${({$color}) => topicStyles[$color]?.backgroundColor || 'grey'};
    color: ${({$color}) => topicStyles[$color]?.color || 'black'};
`;

export const CategoriesThemeTtl = styled.p `
    font-size: 14px;
    font-weight: 600;
    line-height: 14px;
    white-space: nowrap;
`;

export const PopBrowseStatus = styled.div `
    margin-bottom: 11px;
`;

export const SubTitle = styled.p `
    color: ${props =>
            props.theme.body === "#EAEEF6" ? lightTheme.popExitTtl : darkTheme.popExitTtl};
    font-size: 14px;
    font-weight: 600;
    line-height: 1;
    margin-bottom: 14px;
`

export const SubTitleLabel = styled.label `
    color: ${props =>
            props.theme.body === "#EAEEF6" ? lightTheme.popExitTtl : darkTheme.popExitTtl};
    font-size: 14px;
    font-weight: 600;
    line-height: 1;
`;

export const StatusThemes = styled.div `
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: flex-start;
`;

export const StatusTheme = styled.div `
    border-radius: 24px;
    border: 0.7px solid rgba(148, 166, 190, 0.4);
    color: #94A6BE;
    padding: 11px 14px 10px;
    margin-right: 7px;
    margin-bottom: 7px;
`;

export const CurrentStatusTheme = styled(StatusTheme) `
    background: #94A6BE;
    color: #FFFFFF !important;
`;

export const StatusText = styled.div `
    font-size: 14px;
    line-height: 1;
    letter-spacing: -0.14px;
`;

export const PopBrowseWrapper = styled.div `
    display: flex;
    align-items: flex-start;
    justify-content: space-between;

    @media screen and (max-width: 660px) {
        display: block;
    }
`;

export const PopBrowseForm = styled.form`
    max-width: 370px;
    width: 100%;
    display: block;
    margin-bottom: 20px;

    @media screen and (max-width: 495px) {
        max-width: 100%;
    }
`;

export const FormBrowseBlock = styled.div`
    display: flex;
    flex-direction: column;
`;

export const PopBrowseBtnBlock = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: space-between;
`;

export const BtnGroup = styled.div`
    gap: 8px;
    @media screen and (max-width: 495px) {
        width: 100%;
    }
`;

export const PopBrowseButton = styled.button`
    border-radius: 4px;
    background: #565EEF;
    border: none;
    outline: none;
    color: #FFFFFF;
`;

export const PopBrowseLink = styled(Link)`
    color: #FFFFFF;
`;

export const PopBrowseBtnEdit = styled.button`
    border-radius: 4px;
    border: 0.7px solid var(--palette-navy-60, ${props =>
            props.theme.body === "#EAEEF6" ? "#565EEF" : "#FFFFFF"});
    outline: none;
    background: transparent;
    margin-right: 8px;
    height: 30px;
    margin-bottom: 10px;
    padding: 0 14px;
    color: ${props =>
            props.theme.body === "#EAEEF6" ? "#565EEF" : "#FFFFFF"};
    
    &:hover {
        background-color: #33399b;
        color: #FFFFFF;
        border: 0.7px solid #33399b;
        transition: all 0.25s linear;
    }
`;