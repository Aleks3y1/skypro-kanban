import {Navigate, Outlet} from "react-router-dom";
import {routesApp} from "../../lib/RoutesApp.js";
import {useUser} from "../../hooks/useUser.js";

function PrivateRoute() {
    const {userData} = useUser();
    return userData ? <Outlet/> : <Navigate to={routesApp.LOGIN}/>;
}

export default PrivateRoute;