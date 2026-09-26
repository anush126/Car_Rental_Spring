import { useState } from "react";
import { loginUser } from "../services/authService";

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async (e) => {
        e.preventDefault();

        const user = {
            email: email,
            password: password
        };

        try {
            const data = await loginUser(user);

            console.log("Login successful:", data);

            localStorage.setItem("user", JSON.stringify(data));

            alert("Login successful!");

        } catch (error) {
            console.error(error);
            alert("Login failed!");
        }
    };

    return (
        <div>
            <h1>Login</h1>

            <form onSubmit={handleLogin}>

                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <br />
                <br />

                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <br />
                <br />

                <button type="submit">
                    Login
                </button>

            </form>
        </div>
    );
}

export default Login;