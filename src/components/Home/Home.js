import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import bookData from "../../data/mockData.json";
import Books from "../Books/Books";
import spinner from './Animated-Loading-Gif-Transparent-Background.gif'

const Home = () => {
  const [book, setBook] = useState([]);
  useEffect(() => {
    fetch('https://intense-mesa-31910.herokuapp.com/books')
    .then(res => res.json())
    .then(data => setBook(data) )
  }, [])
  return (
    <div className="home">
      <div className="container">
        <div className="row">
          {
            book.length === 0 && <>
            <Spinner className="m-auto" animation="border" size="sm" />
            <Spinner className="m-auto" animation="border" />
            <Spinner className="m-auto" animation="grow" size="sm" />
            <Spinner className="m-auto" animation="grow" />
          </>
          }
          {book.map((book) => (
            <Books book={book}></Books>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
