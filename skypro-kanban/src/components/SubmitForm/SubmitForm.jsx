import React, { useRef, useState, useEffect } from 'react';
import {
    FormBlock,
    FormButton,
    FormFooter,
    FormFooterText,
    FormHeading,
    FormInput,
    FormLink,
    Form,
    ErrorMessage // Assuming you have an ErrorMessage styled component
} from "./SubmitForm.styled.js";

const SubmitForm = ({ login, emailUser, passwordUser }) => {
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isFormValid, setIsFormValid] = useState(true);
    const [hasTriedSubmit, setHasTriedSubmit] = useState(false);

    const validateForm = () => {
        const newErrors = {};
        if (!emailUser.current.value) {
            newErrors.email = 'Эл. почта не может быть пустой';
        } else if (!/\S+@\S+\.\S+/.test(emailUser.current.value)) {
            newErrors.email = 'Некорректный адрес электронной почты';
        }
        if (!passwordUser.current.value || passwordUser.current.value.length < 6) {
            newErrors.password = 'Пароль должен быть не менее 6 символов';
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleInputChange = () => {
        if (hasTriedSubmit) {
            setIsFormValid(validateForm());
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setHasTriedSubmit(true);
        if (validateForm()) {
            setIsSubmitting(true);
            await login(event); // Call the login function passed as prop
            setIsSubmitting(false);
        } else {
            setIsFormValid(false);
        }
    };

    useEffect(() => {
        if (hasTriedSubmit) {
            setIsFormValid(validateForm());
        }
    }, [hasTriedSubmit]);

    return (
        <FormBlock>
            <Form onSubmit={handleSubmit}>
                <FormHeading>Вход</FormHeading>
                <FormInput
                    type="email"
                    name="email"
                    placeholder="Эл. почта"
                    ref={emailUser}
                    style={{ borderColor: errors.email ? 'red' : '' }}
                    onChange={handleInputChange}
                />
                <FormInput
                    type="password"
                    name="password"
                    placeholder="Пароль"
                    ref={passwordUser}
                    style={{ borderColor: errors.password ? 'red' : '' }}
                    onChange={handleInputChange}
                />
                {!isFormValid ?
                    <ErrorMessage>{'Введенные вами данные не распознаны. Проверьте свой логин и пароль' +
                        ' и повторите попытку входа.'}</ErrorMessage> : null}
                <FormButton
                    type="submit"
                    disabled={isSubmitting || !isFormValid}
                    style={{
                        background: isSubmitting || !isFormValid ? 'grey' : 'blue',
                        cursor: isSubmitting || !isFormValid ? 'not-allowed' : 'pointer'
                    }}
                >
                    Войти
                </FormButton>
                <FormFooter>
                    <FormFooterText>Нужно зарегистрироваться?</FormFooterText>
                    <FormLink to="/register">Регистрируйтесь здесь</FormLink>
                </FormFooter>
            </Form>
        </FormBlock>
    );
};

export default SubmitForm;