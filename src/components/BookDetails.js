import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import useApi from "../hooks/usApi";

const BookDetails = (props) => {
  console.log(">>DETAILS PROPS", props);
  const { id } = useParams();
  const api = useApi();
  const [product, setProduct] = useState([]);

  useEffect(() => {
    api
      .get("product")
      .then((res) => {
        const filtered = res.data.find((item) => item.id === Number(id));
        console.log(filtered);
        setProduct(filtered);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const addBooks = (products) => {
    props.dispatch({
      type: "add_item",
      payload: products,
    });
  };
  return (
    <>
      <div>
        <div className="container my-5 py-2">
          <div className="row">
            <div className="col-md-5 d-flex justify-content-center ">
              <img
                className="pe-5 pt-2"
                src={product.image}
                alt={product.bookName}
                width="350px"
                height="600px"
              />
            </div>
            <div className="col-md-7 d-flex flex-column justify-content-center">
              <p className="text-muted text-uppercase">{product.genre}</p>
              <p className="display-3">{product.bookName}</p>
              <hr />
              <p className="lead d-inline-block">{product.description}</p>
              <h2 className="my-2 fw-bold display-4">{product.price} TL</h2>
              <div className="d-flex ">
                <div>
                  <table className="table table-borderless table-sm my-4 ">
                    <tbody>
                      <tr>
                        <th style={{ width: "10%" }} scope="row">
                          ISBN:
                        </th>
                        <td>{product.isbn}</td>
                      </tr>
                      <tr>
                        <th style={{ width: "12%" }} scope="row">
                          Page Count:
                        </th>
                        <td>{product.pageCount}</td>
                      </tr>
                      <tr>
                        <th style={{ width: "10%" }} scope="row">
                          Stock:
                        </th>
                        <td>{product.count}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="d-flex flex-column align-items-center justify-content-center w-100">
                  <button
                    className=" w-50 btn btn-outline-primary my-2 "
                    onClick={() => addBooks(product)}
                  >
                    Add to Cart
                  </button>
                  <a href="#/cart" className=" w-50 btn btn-dark my-2 mx-2">
                    Go to Cart
                  </a>
                  <a href="#/" className=" w-50 btn btn-success my-2">
                    Continue Shop
                  </a>
                </div>
              </div>
              <hr />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    ...state,
  };
};

export default connect(mapStateToProps)(BookDetails);
