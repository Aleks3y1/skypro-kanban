import {Navigate, Outlet} from "react-router-dom";
import {appRoutes} from "../../lib/AppRoutes.jsx";

function PrivateRoute({isAuth}) {
    return isAuth ? <Outlet /> : <Navigate to={appRoutes.LOGIN} />;
}

export default PrivateRoute;