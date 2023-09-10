import {Navigate} from "react-router-dom";
import {useAuth} from "../auth/AuthContext";

const AdminRoute = ({ children }) => {
    const { currentUser, isLoading } = useAuth(); // Get the isLoading from your AuthProvider

    if (isLoading) {
        return <div>Loading...</div>; // Or some other loading indicator
    }

    return currentUser && currentUser.isOp ? children : <Navigate to="/home" />;
};

export default AdminRoute;