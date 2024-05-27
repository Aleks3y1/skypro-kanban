import styled from "styled-components";
import {darkTheme, lightTheme} from "../../theme.js";

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

export const TopicStyles = styled.p`
    font-size: 10px;
    font-weight: 600;
    line-height: 10px;
`;

export const CardStyles = styled.div`
    width: auto;
    height: 20px;
    padding: 5px 14px;
    border-radius: 18px;
    background-color: ${({$color}) => topicStyles[$color]?.backgroundColor || 'grey'};
    color: ${({$color}) => topicStyles[$color]?.color || 'black'};
`;

export const CardGroupStyles = styled.div`
    width: 100%;
    height: 20px;
    margin-bottom: 12px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const CardContentStyles = styled.div`
    height: 64px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
`;

export const CardItemStyles = styled.div`
    padding: 5px;
    animation-name: card-animation;
    animation-duration: 500ms;
    animation-timing-function: linear;
`;

export const CardsCardStyles = styled.div`
    width: 220px;
    height: 130px;
    background-color: ${props =>
            props.theme.body ==="#EAEEF6" ? lightTheme.card : darkTheme.card};
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: stretch;
    padding: 15px 13px 19px;
    transition: all 0.25s linear;

    @media screen and (max-width: 1200px) {
        width: 220px;
        height: 130px;
        background-color: #FFFFFF;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: stretch;
        padding: 15px 13px 19px;
    }
`;

export const CardButtonStyles = styled.div`
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 2px;
`;

export const CardTitleStyles = styled.h3`
    font-size: 14px;
    font-weight: 500;
    line-height: 18px;
    color: ${props =>
            props.theme.body === "#EAEEF6" ? lightTheme.titleText : darkTheme.titleText};
    transition: all 0.25s linear;
    margin-bottom: 10px;
`;

export const CardDate = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
`;

export const CardDateP = styled.p`
    margin-left: 6px;
    font-size: 10px;
    line-height: 13px;
    color: #94A6BE;
    letter-spacing: 0.2px;
`;

export const CardButtonDiv = styled.div`
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background-color: #94A6BE;
`;