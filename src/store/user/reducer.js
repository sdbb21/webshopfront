const initialState = {};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "SIGNUP_SUCCESS":
      return { ...state, jwt: payload };
    case "PROFILE_FETCHED":
      //console.log("PAYLOAD DATA USER?", payload);
      return { ...state, ...payload };
    case "auth/logout":
      return initialState;
    default:
      return state;
  }
};
