import styled from "styled-components";
import {Link} from "react-router-dom";

export const PopNewCardHUD = styled.div`
    width: 100%;
    min-width: 375px;
    height: 100%;
    min-height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 6;

    &:target {
        display: block;
    }

    @media screen and (max-width: 660px) {
        top: 70px;
    }
`;

export const PopNewCardContainer = styled.div`
    width: 100%;
    height: 100%;
    min-height: 100vh;
    padding: 0 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0.4);

    @media screen and (max-width: 660px) {
        padding: 0;
        justify-content: flex-start;
    }

    @media screen and (max-width: 495px) {
        padding: 0;
        justify-content: flex-start;
    }
`;

export const PopNewCardBlock = styled.div`
    display: block;
    margin: 0 auto;
    background: ${props => props.theme.popExitBGC};
    max-width: 630px;
    width: 100%;
    padding: 40px 30px 48px;
    border-radius: 10px;
    border: 0.7px solid #D4DBE5;
    position: relative;

    @media screen and (max-width: 660px) {
        border-radius: 0;
    }

    @media screen and (max-width: 495px) {
        padding: 20px 16px 32px;
    }
`;

export const PopNewCardContent = styled.div`
    display: block;
    text-align: left;
`;

export const PopNewCardH3 = styled.h3`
    color: ${props => props.theme.popExitTtl};
    font-size: 20px;
    font-weight: 600;
    line-height: 24px;
    margin-bottom: 20px;
`;

export const PopNewCardLink = styled(Link)`
    position: absolute;
    top: 20px;
    right: 30px;
    color: #94A6BE;
    cursor: pointer;

    &:hover {
        color: #000000;
    }
`;

export const PopNewCardWrap = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;

    @media screen and (max-width: 660px) {
        display: block;
    }
`;

export const PopNewCardForm = styled.form`
    max-width: 370px;
    width: 100%;
    display: block;
    margin-bottom: 20px;

    @media screen and (max-width: 495px) {
        max-width: 100%;
        width: 100%;
        display: block;
    }
`;

export const FormNewBlock = styled.div`
    display: flex;
    flex-direction: column;
`;

export const FormNewBlockCalc = styled.div`
    width: 182px;
    font-family: inherit;
    margin-bottom: 20px;
    @media screen and (max-width: 495px) {
        width: 100%;
    }

    @media screen and (max-width: 660px) {
        max-width: 340px;
        width: 100%;
    }
`

export const FormLabel = styled.label`
    color: ${props => props.theme.popExitTtl};
    font-size: 14px;
    font-weight: 600;
    line-height: 1;
    margin-bottom: 14px;

    @media screen and (max-width: 660px) {
        padding: 0;
        margin-bottom: 0;
    }
`;

export const FormInput = styled.input`
    width: 100%;
    outline: none;
    padding: 14px;
    background: transparent;
    border: 0.7px solid rgba(148, 166, 190, 0.4);
    border-radius: 8px;
    font-size: 14px;
    line-height: 1;
    letter-spacing: -0.14px;
    margin: 20px 0;
    color: ${props => props.theme.popExitTtl};
    
    &::-moz-placeholder {
        font-weight: 400;
        font-size: 14px;
        line-height: 1px;
        color: #94A6BE;
        letter-spacing: -0.14px;
    }
    
    &::placeholder {
        font-weight: 400;
        font-size: 14px;
        line-height: 1px;
        color: #94A6BE;
        letter-spacing: -0.14px;
    }
`;

export const FormTextarea = styled.textarea`
    max-width: 370px;
    margin-top: 14px;
    height: 200px;
    width: 100%;
    outline: none;
    padding: 14px;
    background: transparent;
    border: 0.7px solid rgba(148, 166, 190, 0.4);
    border-radius: 8px;
    font-size: 14px;
    line-height: 1;
    letter-spacing: -0.14px;
    font-family: inherit;
    color: ${props => props.theme.popExitTtl};

    &::-moz-placeholder {
        font-weight: 400;
        font-size: 14px;
        line-height: 1px;
        color: #94A6BE;
        letter-spacing: -0.14px;
    }
    
    &::placeholder {
        font-weight: 400;
        font-size: 14px;
        line-height: 1px;
        color: #94A6BE;
        letter-spacing: -0.14px;
    }

    @media screen and (max-width: 495px) {
        max-width: 100%;
        height: 34px;
    }
`;

export const PopCategoriesBlock = styled.div`
    margin-bottom: 20px;
`;

export const PopCategoriesTitle = styled.p`
    margin-bottom: 14px;
    color: ${props => props.theme.popExitTtl};
    font-size: 14px;
    font-weight: 600;
    line-height: 1;
`;

export const PopCategoriesThemes = styled.div`
    display: flex;
    flex-wrap: nowrap;
    align-items: flex-start;
    justify-content: flex-start;
`;

export const PopCategoriesOrange = styled.div`
    display: inline-block;
    width: auto;
    height: 30px;
    padding: 8px 20px;
    border-radius: 24px;
    margin-right: 7px;
    background-color: #FFE4C2;
    color: #FF6D00;
    opacity: 1;
`;

export const PopCategoriesGreen = styled.div`
    display: inline-block;
    width: auto;
    height: 30px;
    padding: 8px 20px;
    border-radius: 24px;
    margin-right: 7px;
    opacity: 0.4;
    background-color: #B4FDD1;
    color: #06B16E;
`;

export const PopCategoriesPurple = styled.div`
    display: inline-block;
    width: auto;
    height: 30px;
    padding: 8px 20px;
    border-radius: 24px;
    margin-right: 7px;
    opacity: 0.4;
    background-color: #E9D4FF;
    color: #9A48F1;
`;

export const PopCategoriesOrangeText = styled.p`
    background-color: #FFE4C2;
    color: #FF6D00;
    font-size: 14px;
    font-weight: 600;
    line-height: 14px;
    white-space: nowrap;
`;

export const PopCategoriesGreenText = styled.p`
    background-color: #B4FDD1;
    color: #06B16E;
    font-size: 14px;
    font-weight: 600;
    line-height: 14px;
    white-space: nowrap;
`;

export const PopCategoriesPurpleText = styled.p`
    background-color: #E9D4FF;
    color: #9A48F1;
    font-size: 14px;
    font-weight: 600;
    line-height: 14px;
    white-space: nowrap;
`;

export const FormNewButton = styled.button`
    width: 132px;
    height: 30px;
    background-color: #565EEF;
    border-radius: 4px;
    border: 0;
    outline: none;
    font-size: 14px;
    font-weight: 500;
    line-height: 1;
    color: #FFFFFF;
    float: right;

    @media screen and (max-width: 495px) {
        width: 100%;
        height: 40px;
    }
`;
