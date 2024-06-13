import {
    FormBlock,
    FormButton,
    FormFooter,
    FormFooterText,
    FormHeading,
    FormInput, FormLink,
    Form,
} from "../SubmitForm/SubmitForm.styled.js";
import {useNavigate} from "react-router-dom";


const RegisterForm = () => {
    let navigate = useNavigate();
    function handleSubmit(event) {
        event.preventDefault();
        navigate('/login');
    }

    return (
        <FormBlock>
            <Form onSubmit={handleSubmit}>
                <FormHeading>Регистрация</FormHeading>
                <FormInput type="login" name="login" placeholder={'Имя'}/>
                <FormInput type="email" name="email" placeholder={'Эл. почта'}/>
                <FormInput type="password" name="password" placeholder={'Пароль'}/>
                <FormButton type="submit">Войти</FormButton>
                <FormFooter>
                    <FormFooterText>Уже есть аккаунт? <FormLink to="/login">Войдите здесь</FormLink></FormFooterText>
                </FormFooter>
            </Form>
        </FormBlock>
    );
}

export default RegisterForm;