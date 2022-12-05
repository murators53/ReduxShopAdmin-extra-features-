import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import useApi from "../hooks/usApi";

const Edit = (props) => {
  const [author, setAuthor] = useState("");
  const [bookName, setBookName] = useState("");
  const [publisher, setPublisher] = useState("");
  const [genre, setGenre] = useState("");
  const [count, setCount] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [isbn, setIsbn] = useState("");
  const [pageCount, setPageCount] = useState("");
  

  const { id } = useParams();
  const api=useApi()
  
  useEffect(()=>{
    const current =props.bookState.book.find(item=>String(item.id)===id)
    console.log(current);
    setAuthor(current.author)
    setBookName(current.bookName)
    setPublisher(current.publisher)
    setGenre(current.genre)
    setCount(current.count)
    setDescription(current.description)
    setPrice(current.price)
    setImage(current.image)
    setIsbn(current.isbn)
    setPageCount(current.pageCount)
  },[])
  console.log(props.bookState.book);

  const handleEdit = (e) => {
    e.preventDefault()
    const hasBook =props.bookState.book.find(item=>String(item.id)===id)

    const updatedStudent={
      ...hasBook,
      bookName: bookName,
      author: author,
      publisher: publisher,
      genre: genre,
      description: description,
      isbn: isbn,
      image: image,
      price: price,
      count: count,
      pageCount: pageCount,
    }
    api.put(`product/${id}`,updatedStudent)
    .then(res=>{
      console.log(res);
      props.dispatch({
        type:'edit_book',
        payload:{
          book:updatedStudent
        }
      })
      window.location.replace('#/category')
      console.log(props.bookState.book);
    })
    .catch(err=>{
      console.log(err);
    })
  }

  return (
    <div>
      <div className="mt-5">
        <h1 className="text-center">Edit Book</h1>
      </div>
      <div className="container d-flex justify-content-center my-4">
        <form className="w-75">
          <div className="mb-3 mt-2">
            <label htmlFor="number" className="form-label">
              Author
            </label>
            <input
              value={author}
              onChange={(e) => {
                setAuthor(e.target.value);
              }}
              type="text"
              className="form-control"
              id="number"
            />
          </div>
          <div className="mb-3 mt-2">
            <label htmlFor="name" className="form-label">
              Book Name
            </label>
            <input
              value={bookName}
              onChange={(e) => {
                setBookName(e.target.value);
              }}
              type="text"
              className="form-control"
              id="name"
            />
          </div>
          <div className="mb-3 mt-2">
            <label htmlFor="lastname" className="form-label">
              Publisher
            </label>
            <input
              type="text"
              className="form-control"
              id="lastname"
              value={publisher}
              onChange={(e) => {
                setPublisher(e.target.value);
              }}
            />
          </div>
          <div className="mb-3 mt-2">
            <label htmlFor="school" className="form-label">
              Genre
            </label>
            <div>
              <select
                value={genre}
                onChange={(e) => {
                  setGenre(e.target.value);
                }}
                className="form-select form-select-lg mb-3"
                aria-label=".form-select-lg example"
                readOnly
              >
                <option></option>
                <option>Story</option>
                <option>Novel</option>
                <option>Poem</option>
                <option>Psychology</option>
                <option>Religious</option>
                <option>Juvenile</option>
              </select>
            </div>
          </div>
          <div className="mb-3 mt-2">
            <label htmlFor="className" className="form-label">
              Price
            </label>
            <input
              value={price}
              onChange={(e) => {
                setPrice(e.target.value);
              }}
              type="text"
              className="form-control"
              id="className"
            />
          </div>

          <div className="mb-3 mt-2">
            <label htmlFor="className" className="form-label">
              Stock
            </label>
            <input
              value={count}
              onChange={(e) => {
                setCount(e.target.value);
              }}
              type="text"
              className="form-control"
              id="className"
            />
          </div>
          <div className="mb-3 mt-2">
            <label htmlFor="className" className="form-label">
              Page Count
            </label>
            <input
              value={pageCount}
              onChange={(e) => {
                setPageCount(e.target.value);
              }}
              type="text"
              className="form-control"
              id="className"
            />
          </div>
          <div className="mb-3 mt-2">
            <label htmlFor="className" className="form-label">
              ISBN
            </label>
            <input
              value={isbn}
              onChange={(e) => {
                setIsbn(e.target.value);
              }}
              type="text"
              className="form-control"
              id="className"
            />
          </div>
          <div className="mb-3 mt-2">
            <label htmlFor="className" className="form-label">
              Image
            </label>
            <input
              value={image}
              onChange={(e) => {
                setImage(e.target.value);
              }}
              placeholder="Please copy the image URL "
              type="text"
              className="form-control"
              id="className"
            />
          </div>
          <div className="mb-3 mt-2">
            <label htmlFor="className" className="form-label">
              Description
            </label>
            <textarea
              style={{ height: "100px" }}
              value={description}
              onChange={(e) => {
                setDescription(e.target.value);
              }}
              type="text"
              className="form-control"
              id="className"
            ></textarea>
          </div>
          <div className="d-flex justify-content-center mt-4">
            <button
              onClick={(e)=>handleEdit(e)}
              type="submit"
              className="btn btn-primary w-50"
              disabled={
                !bookName ||
                !description ||
                !count ||
                !price ||
                !genre ||
                !publisher ||
                !author
              }
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    ...state,
  };
};

export default connect(mapStateToProps)(Edit);
