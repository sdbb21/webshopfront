import axios from "axios";

// A thunk creator with email and password
export function login(email, password) {
  // Return the thunk itself, i.e. a function
  return async function thunk(dispatch, getState) {
    // make a POST API request to `/login`
    const API_URL = "http://localhost:5000";
    const response = await axios.post(`${API_URL}/auth/login`, {
      email: email,
      password: password,
    });

    //console.log("response", response.data.jwt);
    const token = response.data.jwt;
    localStorage.setItem("token", token);

    const action = {
      type: "SIGNUP_SUCCESS",
      payload: response.data.jwt,
    };

    dispatch(action);

    const profileResponse = await axios.get(`${API_URL}/me`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    // console.log("me", profileResponse.data);
    const profileAction = {
      type: "PROFILE_FETCHED",
      payload: profileResponse.data,
    };

    dispatch(profileAction);
  };
}

export function logout(dispatch, getState) {
  dispatch({ type: "auth/logout" }); //dispatch an action
  localStorage.clear();
  //localStorage.removeItem(localStorage.token);
}
