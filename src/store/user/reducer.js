const initialState = {
  jwt: null,
};

const user = (state = initialState, { type, payload }) => {
  switch (type) {
    case "SIGNUP_SUCCESS": {
      return { ...state, jwt: payload };
    }
    default: {
      return state;
    }
  }
};
export default user;
