import axios from "axios";

export function signup(email, password, firstName, lastName, address, phone) {
  console.log("first", email, password, firstName, lastName, address, phone);

  return async function thunk(dispatch, getState) {
    const API_URL = "http://localhost:5000";
    const response = await axios.post(`${API_URL}/auth`, {
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
