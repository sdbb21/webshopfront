import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../store/auth/actions";

export default function AuthPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  //when we submit, we declare a thunk action creator
  function handleSubmit(event) {
    event.preventDefault();
    dispatch(login(email, password));
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <p>
          <label>
            Email:{" "}
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
        </p>
        <p>
          <label>
            Password:{" "}
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
        </p>
        <p>
          <button type="submit">Login</button>
        </p>
      </form>
    </div>
  );
}
