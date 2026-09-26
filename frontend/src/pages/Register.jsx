import { useState } from "react";
import { registerUser } from "../services/authService";

function Register() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleRegister = async (e) => {
        e.preventDefault();

        const user = {
            name: name,
            email: email,
            password: password,
            role: "USER"
        };

        try {
            const data = await registerUser(user);

            console.log("Registration successful:", data);
            alert("Registration successful!");

        } catch (error) {
            console.error(error);
            alert("Registration failed!");
        }
    };

    return (
        <div>
            <h1>Register</h1>

            <form onSubmit={handleRegister}>

                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

                <br />
                <br />

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
                    Register
                </button>

            </form>
        </div>
    );
}

export default Register;