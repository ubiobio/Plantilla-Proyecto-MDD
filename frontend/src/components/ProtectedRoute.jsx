import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children, allowedRoles }) => {
    const storedUser = JSON.parse(sessionStorage.getItem('usuario'));
    const userRole = storedUser?.data?.rolName;

    const isAuthenticated = !!storedUser;
    const isAuthorized = allowedRoles ? allowedRoles.includes(userRole) : true;

    if (!isAuthenticated) {
        return <Navigate to="/" />;
    }

    if (!isAuthorized) {
        return <Navigate to="/home"/>;
    }

    return children;
};

export default ProtectedRoute;
