const initialState = {
  hasLogin: localStorage.getItem("hasLogin"),
  email: localStorage.getItem("email"),
  password: localStorage.getItem("password"),
  name: localStorage.getItem("name"),
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case "set_login":
        console.log(action);
        localStorage.setItem('email',action.payload.email)
        localStorage.setItem('password',action.payload.password)
        localStorage.setItem('name',action.payload.name)
      return {
        ...state,
        hasLogin: localStorage.setItem("hasLogin", true),
        email: action.payload.email,
        password: action.payload.password,
        name: action.payload.name,
      };
    case "out_login":
      localStorage.removeItem("hasLogin");
      localStorage.removeItem("hasAdmin");
      localStorage.removeItem("email");
      localStorage.removeItem("password");
      localStorage.removeItem("name");
      return {
        ...state,
        hasLogin: false,
        email: '',
        name: '',
      };

    default:
      return state;
  }
};

export default loginReducer;
