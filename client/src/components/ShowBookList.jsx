import axios from "axios";
import { useState, useEffect } from "react";
import "../styles.css";
import { Link } from "react-router-dom";
import DataTable from './DataTable';
import API from "../API";

function ShowBookList() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8082/api/books")
    API.get("/api/books")
      .then((res) => {
        console.log(`Data has been received! ${res.data}`);
        setBooks(res.data);
      })
      .catch((err) => {
        console.log("Error from ShowBookList");
      });
  }, []);

  
  const bookList =
    books.length === 0
      ? "there is no book record!"
      : <DataTable books={books} />;

  return (
    <div className="book-list">
      <h2 className="book-list-header">Books List</h2>

      <Link to="/create-book" className="link-create-book">
        <button type="button" className="btn-create-book btn">
          Add New Book
        </button>
      </Link>

      <div className="list">{bookList}</div>
    </div>
  );
}

export default ShowBookList;