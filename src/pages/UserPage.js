import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { signup } from "../store/user/actions";
import "../style/userpage.css";

export default function UserPage() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [address, setAddress] = useState();
  const [phone, setPhone] = useState();
  const dispatch = useDispatch();

  function handleSignup(event) {
    event.preventDefault();
    // console.log(
    //   "in handle",
    //   email,
    //   password,
    //   firstName,
    //   lastName,
    //   address,
    //   phone
    // );

    dispatch(signup(email, password, firstName, lastName, address, phone));
  }

  return (
    <div className="formWrapper">
      <form onSubmit={handleSignup}>
        <p>
          {" "}
          <label>First name</label>
          <input
            type="text"
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
          />
        </p>
        <p>
          <label>Last name</label>
          <input
            type="text"
            onChange={(e) => {
              setLastName(e.target.value);
            }}
          />
        </p>
        <p>
          <label>Address</label>
          <input
            type="text"
            onChange={(e) => {
              setAddress(e.target.value);
            }}
          />
        </p>
        <p>
          <label>Phone</label>
          <input
            type="number"
            onChange={(e) => {
              setPhone(e.target.value);
            }}
          />
        </p>
        <p>
          <label>Email</label>
          <input
            type="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </p>
        <p>
          <label>Password</label>
          <input
            type="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />{" "}
        </p>

        <button className="submitButton">Submit</button>
      </form>
    </div>
  );
}
