import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import useApi from "../hooks/usApi";

const Register = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [users, setUsers] = useState(null);

  const api = useApi();
  const navigate = useNavigate();
  useEffect(() => {
    api
      .get("user")
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const btnRegisterOnClick = () => {
    const newUser = {
      id: new Date().getTime(),
      email: email,
      password: password,
      name: name,
      surname: surname,
    };
    const bul = users.find((item, index) => item.email === newUser.email);
    if (!bul) {
      api
        .post("user", newUser)
        .then((res) => {
          props.dispatch({
            type: "add_user",
            payload: newUser,
          });
          window.location.replace('#/login')
        })
        .catch((err) => {
          console.log(err);
        });
      console.log(bul);
    } else {
      alert("There is such a user, try a different mail");
      return;
    }
    
    setEmail("");
    setName("");
    setPassword("");
    setSurname("");
  };

  return (
    <div className="row justify-content-center">
      <div className="col-md-6 col-lg-6  col-sm-12">
        <h3 className="text-center mt-5 display-3">Sign up</h3>
        <br />
        <br />
        <form className="needs-validation" noValidate>
          <div className="row g-3">
            <div className="col-sm-12">
              <label className="form-label">E-mail</label>
              <input
                type="email"
                className="form-control"
                placeholder="E-mail"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>
            <div className="col-sm-12">
              <label className="form-label">Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Name"
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
            </div>
            <div className="col-sm-12">
              <label className="form-label">Surname</label>
              <input
                type="text"
                className="form-control"
                placeholder="Surname"
                value={surname}
                onChange={(event) => setSurname(event.target.value)}
              />
            </div>
            <div className="col-sm-12 mb-4">
              <label className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="col-sm-12">
              <div className="d-grid gap-2">
                <button
                  onClick={btnRegisterOnClick}
                  type="submit"
                  className="btn btn-success btn-block"
                  disabled={!email || !name || !surname || !password}
                >
                  Register
                </button>
              </div>
            </div>
          </div>
        </form>
        <br />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    ...state,
  };
};

export default connect(mapStateToProps)(Register);
