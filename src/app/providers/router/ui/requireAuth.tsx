import { useLocation, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getUserAuthData } from 'entities/User';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';

interface requireAuthProps {
    children: JSX.Element;
}

export const RequireAuth = (props: requireAuthProps) => {
    const { children } = props;

    const auth = useSelector(getUserAuthData);
    const location = useLocation();

    if (!auth) {
        return <Navigate to={RoutePath.main} state={{ from: location }} replace />;
    }

    return children;
};
