import {useNavigate} from "react-router-dom";
import {
    Form,
    FormBlock,
    FormButton,
    FormFooter,
    FormFooterText,
    FormHeading,
    FormInput,
    FormLink
} from "./SubmitForm.styled.js";

const SubmitForm = ({login}) => {
    let navigate = useNavigate();
    function handleSubmit(event) {
        event.preventDefault();
        navigate("/");
    }

    return (
        <FormBlock>
        <Form onSubmit={login}>
            <FormHeading>Вход</FormHeading>
            <FormInput type="email" name="email" placeholder={'Эл. почта'}/>
            <FormInput type="password" name="password" placeholder={'Пароль'}/>
            <FormButton type="submit">Войти</FormButton>
            <FormFooter>
                <FormFooterText>Нужно зарегистрироваться?</FormFooterText>
                <FormLink to="/register">Регистрируйтесь здесь</FormLink>
            </FormFooter>
        </Form>
        </FormBlock>
    );
}

export default SubmitForm;