import SubmitForm from "../../components/SubmitForm/SubmitForm.jsx";
import {Container} from "./Login.styled.js";

export default function Login({login}) {
    return (
        <Container>
            <SubmitForm login={login} />
        </Container>
    );
}