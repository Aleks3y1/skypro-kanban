import styled from "styled-components";
import {Link} from "react-router-dom";

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 248px;
    min-height: 229px;
    box-sizing: border-box;
`;

export const FormBlock = styled.div`
    max-width: 368px;
    min-height: 329px;
    top: 285px;
    left: 536px;
    box-sizing: border-box;
    padding: 50px 60px 50px 60px;
    gap: 10px;
    border-radius: 10px;
    border: 0.7px solid #D4DBE5;
    box-shadow: 0px 4px 67px -12px #00000021;
    background: #FFFFFF;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: Roboto;
`;

export const FormHeading = styled.h2`
    font-size: 20px;
    line-height: 30px;
    margin: 0 0 14px 0;
    box-sizing: border-box;
`;

export const FormInput = styled.input`
    width: 248px;
    height: 30px;
    padding: 8px 10px 8px 10px;
    gap: 10px;
    border-radius: 8px;
    border: 0.7px solid #94A6BE66;
    margin-top: 6px;
    font-family: inherit;
    font-size: 14px;
    box-sizing: border-box;
`;

export const FormButton = styled.button`
    width: 248px;
    height: 30px;
    padding: 8px 10px 8px 10px;
    gap: 10px;
    border-radius: 4px;
    border: 0;
    margin-top: 20px;
    background: #565EEF;
    font-family: inherit;
    font-size: 14px;
    color: #FFFFFF;
`;

export const FormFooter = styled.div`
    font-size: 14px;
    font-weight: 400;
    line-height: 21px;
    letter-spacing: -0.01em;
    text-align: center;
    color: #94A6BE66;
    margin: 20px 0 0 0;
`;

export const FormFooterText = styled.p`
    margin: 0;
`;

export const FormLink = styled(Link)`
    color: #94A6BE66;
`;

export const ErrorMessage = styled.p`
    color: red;
    font-size: 12px;
`;