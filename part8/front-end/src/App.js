import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import Authors from "./components/Authors";
import Books from "./components/Books";
import NewBook from "./components/NewBook";

const App = () => {
  return (
    <Router>
      <div>
        <div style={{ marginBottom: "20px" }}>
          <Link to="/">
            <button>authors</button>
          </Link>
          <Link to="/books">
            <button>books</button>
          </Link>
          <Link to="/add">
            <button>add book</button>
          </Link>
        </div>
        <Routes>
          <Route path="/" element={<Authors />} />
          <Route path="/books" element={<Books />} />
          <Route path="/add" element={<NewBook />} />
          {/* <Authors show={page === "authors"} />

          <Books show={page === "books"} />

          <NewBook show={page === "add"} /> */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
