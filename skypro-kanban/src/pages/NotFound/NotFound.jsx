import {Link} from "react-router-dom";
import {routesApp} from "../../lib/RoutesApp.jsx";

const NotFound = () => {
    return (
        <>
            <div>Страница не найдена.</div>
            <Link to={routesApp.MAIN}>Вернуться на главную страницу</Link>
        </>
    );
}

export default NotFound;