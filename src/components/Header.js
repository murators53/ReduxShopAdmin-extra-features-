import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import useApi from "../hooks/usApi";
import CartBtn from "./CartBtn";

function Header(props) {
  const api = useApi();

  useEffect(() => {
    api
      .get("user")
      .then((res) => {
          const bul = res.data.find(
            (item) => item.email === localStorage.getItem("email")
          );
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <nav className="navbar navbar-expand-lg bg-primary">
      <div className="container-fluid d-flex">
        <div>
          <a className="navbar-brand text-white" href="#">
          <i className="fa-solid fa-shop fa-2x"></i>
          </a>
        </div>
        <div>
          <a className="navbar-brand text-white display-5" href="#">
            ONLINE SHOP
          </a>
        </div>
        <div className=" ">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
            <li className="nav-item">
              <a
                className="nav-link active text-white"
                aria-current="page"
                href="#/"
              >
                Shop
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link active text-white"
                aria-current="page"
                href="#/category"
              >
                Book List
              </a>
            </li>

            <CartBtn />
            {localStorage.getItem("hasAdmin") ? (
              <a
                href="#/myprofile"
                className="nav-link btn btn-success text-white"
              >
                <span>
                  <i className="fa-solid fa-user"></i>
                </span>
                <span className="px-2">{localStorage.getItem("name")}</span>
              </a>
            ) : (
              <li className="nav-item">
                {!localStorage.getItem("hasLogin") ? (
                  <a
                    href="#/login"
                    className="nav-link btn btn-outline-light bg-danger text-white"
                  >
                    Login
                  </a>
                ) : (
                  <a
                    href="#/myprofile"
                    className="nav-link btn btn-dark text-white"
                  >
                    <span>
                      <i className="fa-solid fa-user"></i>
                    </span>
                    <span className="px-2">{localStorage.getItem("name")}</span>
                  </a>
                )}
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

const mapStateToProps = (state) => {
  return {
    ...state,
  };
};

export default connect(mapStateToProps)(Header);
