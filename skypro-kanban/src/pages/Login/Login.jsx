import SubmitForm from "../../components/SubmitForm/SubmitForm.jsx";
import {Container} from "./Login.styled.js";

export default function Login({login, emailUser, passwordUser}) {
    return (
        <Container>
            <SubmitForm login={login} emailUser={emailUser} passwordUser={passwordUser}/>
        </Container>
    );
}