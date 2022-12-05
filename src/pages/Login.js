import React, { useEffect, useState } from "react";
import { connect, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import useApi from "../hooks/usApi";
import MyProfile from "./MyProfile";

const Login = (props) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const api = useApi();

  const [users, setUsers] = useState(null);

  useEffect(() => {
    api
      .get("user")
      .then((res) => {
        console.log(res.data);
        props.dispatch({
          type: "set_user",
          payload: {
            user: res.data,
          },
        });
        setUsers(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const btnLoginOnClick = () => {
    const postData = { email, password };
    console.log(">>POSTDATA", postData);

    
    const bul = users.find((item, index) => 
    item.email === email && item.password === password);
      console.log(email.length);
    if (bul) {
      api
        .get("/user")
        .then((res) => {
          console.log(res.data);
          res.data.filter((item, index) => {
            if (item.email === email && item.password === password) {
              console.log(item);
              props.dispatch({
                type: "set_login",
                payload:{
                  email:email,
                  password:password,
                  name:item.name
                }
              });
              window.location.replace("#/myprofile");
            } 
          });
        })
        .catch((err) => console.log(err));
    } else {
      alert("No such account found ");
    }

    if (users[14] === email) {
      console.log(users[14]);
    }
  };
  const btnAdminOnClick = () => {
    const postData = { email, password };
    console.log(">>POSTDATA", postData);
    api
      .get("/admin")
      .then((res) => {
        console.log(res.data);
        if (res.data[0].email === email && res.data[0].password === password) {
          props.dispatch({
            type: "set_admin",
            payload:{
              email:email,
              password:password,
              name:'Admin'
            }
          });
          window.location.replace("#/myprofile");
        } else {
          alert("You entered wrong password ");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      {props.loginState.hasLogin ? (
        <MyProfile />
      ) : (
        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-6  col-sm-12">
            <h3 className="text-center mt-5 display-4">Please log in</h3>
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
                    onChange={(event) => setEmail(event.target.value)}
                    defaultValue=""
                  />
                </div>
                <div className="col-sm-12">
                  <label className="form-label">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                    defaultValue=""
                  />
                </div>
                <div className="col-sm-12">
                  <div className="d-grid gap-2">
                    <button
                      onClick={btnLoginOnClick}
                      type="button"
                      className="btn btn-primary btn-block"
                    >
                      Login
                    </button>
                    <a
                      href="#/register"
                      type="button"
                      className="btn btn-success btn-block"
                    >
                      Register
                    </a>
                    <button
                      onClick={btnAdminOnClick}
                      type="button"
                      className="btn btn-danger btn-block"
                    >
                      Admin Login
                    </button>
                  </div>
                </div>
              </div>
            </form>
            <br />
          </div>
        </div>
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    ...state,
  };
};

export default connect(mapStateToProps)(Login);
