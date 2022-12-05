const initialState = {
  hasAdmin : localStorage.getItem("hasAdmin"),
  email: localStorage.getItem("email"),
  password: localStorage.getItem("password"),
  name: localStorage.getItem("name"),
};

const adminReducer = (state = initialState, action) => {
  switch (action.type) {
    case "set_admin":
        localStorage.setItem('email',action.payload.email)
        localStorage.setItem('password',action.payload.password)
        localStorage.setItem('name',action.payload.name)
      return {
        ...state,
        hasAdmin: localStorage.setItem("hasAdmin", true),
        email: action.payload.email,
        password: action.payload.password,
        name: action.payload.name,
      };
    case "out_admin":
        localStorage.removeItem("hasAdmin");
        localStorage.removeItem("email");
        localStorage.removeItem("name");
      return {
        ...state,
        hasAdmin: false,
        email: '',
        password: '',
        name: '',
      };

    default:
      return state;
  }
};

export default adminReducer;
