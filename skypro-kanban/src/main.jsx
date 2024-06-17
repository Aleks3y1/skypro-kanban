import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter} from "react-router-dom";
import {StrictMode} from "react";
import UserProvider from "./contexts/UserContext.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
    <StrictMode>
        <UserProvider>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </UserProvider>
    </StrictMode>
)
