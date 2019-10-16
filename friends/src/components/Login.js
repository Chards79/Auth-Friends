import React from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const Login = () => {
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
            .catch(err => console.log(err.response)
        setForm({ username: "", password: "" })
    };

    return (
        <div>
            <form onSubmit={login}>
                {/* username */}
                <input
                    type="text"
                    name="username"
                    onChange={form.handleChanges}
                    value={form.username}
                />
                <input
                    type="password"
                    name="password"
                    onChange={form.handleChanges}
                    value={form.password}
                />
                <button>Log in</button>
            </form>
        </div>
    );
}
}

export default Login;