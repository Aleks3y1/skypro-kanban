import React, {useRef, useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import {routesApp} from '../../lib/RoutesApp.js';
import {registerInApp} from '../../api.js';
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
} from "../SubmitForm/SubmitForm.styled.js";

const RegisterForm = ({loginRegister, nameRegister, passRegister}) => {
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isFormValid, setIsFormValid] = useState(true);
    const navigate = useNavigate();
    const [hasTriedSubmit, setHasTriedSubmit] = useState(false);

    const validateForm = () => {
        const newErrors = {};
        if (!loginRegister.current.value) {
            newErrors.login = 'Эл. почта не может быть пустой';
        } else if (!/\S+@\S+\.\S+/.test(loginRegister.current.value)) {
            newErrors.login = 'Некорректный адрес электронной почты';
        }
        if (!nameRegister.current.value) {
            newErrors.name = 'Имя не может быть пустым';
        }
        if (!passRegister.current.value || passRegister.current.value.length < 6) {
            newErrors.password = 'Пароль должен быть не менее 6 символов';
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    useEffect(() => {
        if (hasTriedSubmit) {
            setIsFormValid(validateForm());
        }
    }, [hasTriedSubmit]);

    const handleInputChange = () => {
        if (hasTriedSubmit) {
            setIsFormValid(validateForm());
        }
    };

    const register = async (event) => {
        event.preventDefault();
        setHasTriedSubmit(true);
        if (validateForm()) {
            setIsSubmitting(true);
            try {
                await registerInApp({
                    login: loginRegister.current.value,
                    name: nameRegister.current.value,
                    password: passRegister.current.value
                });
                navigate(routesApp.LOGIN);
            } catch (error) {
                console.error(error.message);
                setErrors((prevErrors) => ({
                    ...prevErrors,
                    form: 'Введенные вами данные не корректны. Чтобы завершить регистрацию, введите данные корректно и повторите попытку.'
                }));
                setIsSubmitting(false);
            }
        }
    };

    return (
        <FormBlock>
            <Form onSubmit={register}>
                <FormHeading>Регистрация</FormHeading>
                <FormInput
                    type="text"
                    name="name"
                    placeholder="Имя"
                    ref={nameRegister}
                    style={{borderColor: errors.name ? 'red' : ''}}
                    onChange={handleInputChange}
                />
                <FormInput
                    type="email"
                    name="email"
                    placeholder="Эл. почта"
                    ref={loginRegister}
                    style={{borderColor: errors.login ? 'red' : ''}}
                    onChange={handleInputChange}
                />
                <FormInput
                    type="password"
                    name="password"
                    placeholder="Пароль"
                    ref={passRegister}
                    style={{borderColor: errors.password ? 'red' : ''}}
                    onChange={handleInputChange}
                />
                {!isFormValid ?
                    <ErrorMessage>{'Введенные вами данные не корректны. Чтобы завершить регистрацию, ' +
                        'введите данные корректно и повторите попытку.'}</ErrorMessage> : null}
                <FormButton
                    type="submit"
                    disabled={isSubmitting || !isFormValid}
                    style={{
                        background: isSubmitting || !isFormValid ? 'grey' : 'blue',
                        cursor: isSubmitting || !isFormValid ? 'not-allowed' : 'pointer'
                    }}
                >
                    Зарегистрироваться
                </FormButton>
                <FormFooter>
                    <FormFooterText>Уже есть аккаунт? <FormLink to="/login">Войдите здесь</FormLink></FormFooterText>
                </FormFooter>
            </Form>
        </FormBlock>
    );
}

export default RegisterForm;