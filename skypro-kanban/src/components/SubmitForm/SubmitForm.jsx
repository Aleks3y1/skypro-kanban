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

const SubmitForm = ({login, emailUser, passwordUser}) => {

    return (
        <FormBlock>
        <Form onSubmit={login}>
            <FormHeading>Вход</FormHeading>
            <FormInput type="email" name="email" placeholder={'Эл. почта'} ref={emailUser} />
            <FormInput type="password" name="password" placeholder={'Пароль'} ref={passwordUser} />
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