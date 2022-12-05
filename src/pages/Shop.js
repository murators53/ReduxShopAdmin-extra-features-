import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import useApi from "../hooks/usApi";

function Shop(props) {
  console.log("SHOP", props);
  const api = useApi();

  useEffect(() => {
    api
      .get("product")
      .then((res) => {
        props.dispatch({
          type: "set_book",
          payload: {
            book: res.data,
          },
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <h1 className="text-center display-2">Shopping</h1>
      <div className="ui grid container my-5">
        {props.bookState.book.map((item, index) => {
          const {
            id,
            author,
            bookName,
            publisher,
            genre,
            count,
            description,
            price,
            image,
            isbn,
            pageCount,
          } = item;
          return (
            <div className="four wide column" key={id}>
              <a href={`#/${id}`}>
                <div className="ui link cards">
                  <div className="card">
                    <div
                      className="image d-flex py-5"
                      style={{ height: "400px" }}
                    >
                      <img
                        src={image}
                        alt={bookName}
                        style={{ minHeight: "100%" }}
                      />
                    </div>
                    <div
                      className="content d-flex align-items-center flex-column justify-content-around card-body"
                      style={{ height: "150px" }}
                    >
                      <div className="header">{bookName}</div>
                      <div className="meta price text-danger ">
                        <span className="display-6 border border-danger px-2 rounded">
                          {price} ₺
                        </span>
                      </div>
                      <div className="meta pt-2">{genre}</div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          );
        })}
      </div>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    ...state,
  };
};

export default connect(mapStateToProps)(Shop);


