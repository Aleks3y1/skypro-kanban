import {
    FormBlock,
    FormButton,
    FormFooter,
    FormFooterText,
    FormHeading,
    FormInput, FormLink,
    Form,
} from "../SubmitForm/SubmitForm.styled.js";

const RegisterForm = ({register, loginRegister, nameRegister, passRegister}) => {

    return (
        <FormBlock>
            <Form onSubmit={register}>
                <FormHeading>Регистрация</FormHeading>
                <FormInput type="login" name="login" placeholder={'Имя'} ref={nameRegister}/>
                <FormInput type="email" name="email" placeholder={'Эл. почта'} ref={loginRegister}/>
                <FormInput type="password" name="password" placeholder={'Пароль'} ref={passRegister}/>
                <FormButton type="submit">Войти</FormButton>
                <FormFooter>
                    <FormFooterText>Уже есть аккаунт? <FormLink to="/login">Войдите здесь</FormLink></FormFooterText>
                </FormFooter>
            </Form>
        </FormBlock>
    );
}

export default RegisterForm;