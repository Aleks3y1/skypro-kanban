import {Container} from "../Login/Login.styled.js";
import RegisterForm from "../../components/RegisterForm/RegisterForm.jsx";

const Register = ({register, loginRegister, nameRegister, passRegister}) => {
    return (
        <Container>
            <RegisterForm register={register} loginRegister={loginRegister} nameRegister={nameRegister}
                          passRegister={passRegister}/>
        </Container>
    );
}

export default Register;