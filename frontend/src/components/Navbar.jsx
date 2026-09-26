import { useNavigate } from "react-router-dom";

function Navbar() {

    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("user");
        alert("Logged out successfully!");
        navigate("/login");
    };

    return (
        <nav>
            <h2>Car Rental</h2>

            <div>
                <a href="/">Home</a>
                <a href="/cars">Cars</a>
                <a href="/login">Login</a>
                <a href="/register">Register</a>
                <a href="/my-bookings">My Bookings</a>

                <button onClick={handleLogout}>
                    Logout
                </button>
            </div>
        </nav>
    );
}

export default Navbar;