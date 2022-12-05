import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import useApi from "../hooks/usApi";

function CategoryList(props) {
  console.log(">>CATEGORY-PROPS", props);
  const api = useApi();

  const [sortBy, setSortBy] = useState("");
  const [list, setList] = useState(null);
  const [search, setSearch] = useState('');
  const [filteredSearch, setFilteredSearch] = useState([]);

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
        setList(res.data);
        setSortBy("Default");
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    api
      .get("product")
      .then((res) => {
        if (search ==='') {
          console.log(sortBy);
          switch (sortBy) {
            case "Default":
              setList(res.data);
              break;
            case "Author":
              setList(
                res.data.sort((a, b) =>
                  a.author.toLowerCase() > b.author.toLowerCase() ? 1 : -1
                )
              );
              break;
            case "Publisher":
              setList(
                res.data.sort((a, b) =>
                  a.publisher.toLowerCase() > b.publisher.toLowerCase() ? 1 : -1
                )
              );
              break;
            case "Genre":
              setList(
                res.data.sort((a, b) =>
                  a.genre.toLowerCase() > b.genre.toLowerCase() ? 1 : -1
                )
              );
              break;
            case "Book":
              setList(
                res.data.sort((a, b) =>
                  a.bookName.toLowerCase() > b.bookName.toLowerCase() ? 1 : -1
                )
              );
              break;
            case "Stock":
              setList(res.data.sort((a, b) => a.count - b.count));
              break;
            case "Page Count":
              setList(res.data.sort((a, b) => a.pageCount - b.pageCount));
              break;
            default:
              setList(res.data);
          }
        }else{
            setList(res.data.filter(item=>
              item.author.toLowerCase().includes(search.toLowerCase()) ||
              item.bookName.toLowerCase().includes(search.toLowerCase())||
              item.publisher.toLowerCase().includes(search.toLowerCase())))
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [sortBy,search]);



  const handleDelete = (product) => {
    setList(props.bookState.book.filter(item=>item.id!==product))
    api
    .delete(`product/${product}`)
    .then((res) => {
      console.log(res.data.bookState.book);
      props.dispatch({
        type: "remove_book",
        payload: product,
      });
      
      })
      .catch((err) => {
        console.log(err);
      });
  };

  if (list === null) {
    return <p>Loading .....</p>;
  }
  return (
    <div className="container p-3">
      <div>
        <h1 className="m-5 display-5 text-center">Book List</h1>
      </div>
      <div className="d-flex justify-content-between align-items-center">
        <div className="mb-3">
          <select
            className="form-select w-100"
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="Default">sort By Default</option>
            <option value="Author">sort By Author</option>
            <option value="Book">sort By Book</option>
            <option value="Publisher">sort By Publisher</option>
            <option value="Genre">sort By Genre</option>
            <option value="Stock">sort By Stock</option>
            <option value="Page Count">sort By Page Count</option>
          </select>
        </div>
        <div>
        <a href="#/addproduct" className="btn btn-success mb-3 btn-lg">
          Add Book
        </a>
      </div>
        <div className="input-group mb-3 w-25">
          <input
            type="text"
            className="form-control"
            placeholder="Search"
            value={search}
            onChange={(e)=>{setSearch(e.target.value)}}
          />
          <span className="input-group-text" id="basic-addon2">
          <i className="fa-solid fa-magnifying-glass "></i>
          </span>
        </div>
      </div>

      <table className="table table-striped ">
        <thead>
          <tr className="table-dark rounded">
            <th>#</th>
            <th>ISBN</th>
            <th>Author</th>
            <th>Book Name</th>
            <th>Publisher</th>
            <th>Genre</th>
            <th>Stock</th>
            <th>PageCount</th>
            <th></th>
          </tr>
        </thead>
        <tbody className="">
          {list.map((item, index) => {
            return (
              <tr key={item.id}>
                <th></th>
                <th>{item.isbn}</th>
                <th>{item.author}</th>
                <th>{item.bookName}</th>
                <th>{item.publisher}</th>
                <th>{item.genre}</th>
                <th>{item.count}</th>
                <th>{item.pageCount}</th>
                <td className="btn-group">
                  <a href={`#/edit/${item.id}`} className="btn btn-success">
                    <i className="fa-solid fa-pen-to-square"></i>
                  </a>
                  <a
                    className="btn btn-danger"
                    onClick={() => handleDelete(item.id)}
                  >
                    <i className="fa-solid fa-trash"></i>
                  </a>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    ...state,
  };
};

export default connect(mapStateToProps)(CategoryList);
