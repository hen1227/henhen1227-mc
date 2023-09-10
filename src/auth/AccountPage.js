import { Link } from "react-router-dom";
import { useAuth } from "./AuthContext";


function AccountPage() {
    const { currentUser, logout } = useAuth();


    if (!currentUser) {
        return (
            <>
                <h2>You don't appear to be logged in</h2>
                <Link to={"/login"}>Go to Login</Link>
            </>
        )
    }

    return (
        <div>
            <h2>Welcome, {currentUser.username}!</h2>
            <button onClick={logout}>Log out</button>
        </div>
    );
}

export default AccountPage;