import axios from "axios";

export function signup(email, password, firstName, lastName, address, phone) {
  return async function thunk(dispatch, getState) {
    console.log(
      "in function signup",
      email,
      password,
      firstName,
      lastName,
      address,
      phone
    );
    const API_URL = "http://localhost:5000";
    const response = await axios.post(`${API_URL}/auth/signup`, {
      email: email,
      password: password,
      firstName: firstName,
      lastName: lastName,
      address: address,
      phone: phone,
    });
    console.log("response", response);
  };
}
