import {Navigate, Outlet} from "react-router-dom";
import {routesApp} from "../../lib/RoutesApp.js";

function PrivateRoute({isAuth}) {
    return isAuth ? <Outlet /> : <Navigate to={routesApp.LOGIN} />;
}

export default PrivateRoute;