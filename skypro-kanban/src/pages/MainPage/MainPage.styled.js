import styled from "styled-components";
import {darkTheme, lightTheme} from "../../theme.js";

export const Wrapper = styled.div`
    max-width: 100%;
    width: 100vw;
    min-height: 100vh;
    overflow: hidden;
    background-color: ${props =>
            props.theme.body === "#EAEEF6" ? lightTheme.body : darkTheme.body};
    transition: all 0.25s linear;
`;