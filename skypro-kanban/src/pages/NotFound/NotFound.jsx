import {Link} from "react-router-dom";
import {appRoutes} from "../../lib/AppRoutes.jsx";

const NotFound = () => {
    return (
        <>
            <div>Страница не найдена.</div>
            <Link to={appRoutes.MAIN}>Вернуться на главную страницу</Link>
        </>
    );
}

export default NotFound;