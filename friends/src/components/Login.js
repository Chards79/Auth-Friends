import React from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';

const Login = props => {
    const [form, setForm] = React.useState({ username: "", password: "" });

    const handleChanges = e => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const login = e => {
        e.preventDefault();
        axiosWithAuth()
            .post("/api/login", form)
            .then(res => {
                console.log(res);
                localStorage.setItem("token", res.data.payload);
                props.history.push("/");
            })
            .catch(err => {
                console.log(err.response);
                setForm({ username: "", password: "" });
            });
    };

    return (
        <div>
            <form onSubmit={login}>
                {/* username */}
                <input
                    type="text"
                    name="username"
                    placeholder="UserName"
                    onChange={handleChanges}
                    value={form.username}
                />
                {/* password */}
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    onChange={handleChanges}
                    value={form.password}
                />
                <button type="submit">Log in</button>
            </form>
        </div>
    );
};

export default Login;