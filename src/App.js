import React from 'react';
import logo from './logo.svg';
import './App.css';
import BookList from './components/BookList/BookList';

function App() {
  var books = [
    {
      url:"https://images-na.ssl-images-amazon.com/images/I/91U9VZ4UFNL.jpg",
      title:"Con cá vàng",
      description: "Ông lão bắt được con cá vàng"
    },
    {
      url:"https://images-na.ssl-images-amazon.com/images/I/91U9VZ4UFNL.jpg",
      title:"Con cá vàng",
      description: "Ông lão bắt được con cá vàng"
    },
    {
      url:"https://images-na.ssl-images-amazon.com/images/I/91U9VZ4UFNL.jpg",
      title:"Con cá vàng",
      description: "Ông lão bắt được con cá vàng"
    },
    {
      url:"https://images-na.ssl-images-amazon.com/images/I/91U9VZ4UFNL.jpg",
      title:"Con cá vàng",
      description: "Ông lão bắt được con cá vàng"
    },
    {
      url:"https://images-na.ssl-images-amazon.com/images/I/91U9VZ4UFNL.jpg",
      title:"Con cá vàng",
      description: "Ông lão bắt được con cá vàng"
    },
    {
      url:"https://images-na.ssl-images-amazon.com/images/I/91U9VZ4UFNL.jpg",
      title:"Con cá vàng",
      description: "Ông lão bắt được con cá vàng"
    },
    {
      url:"https://images-na.ssl-images-amazon.com/images/I/91U9VZ4UFNL.jpg",
      title:"Con cá vàng",
      description: "Ông lão bắt được con cá vàng"
    },
    {
      url:"https://images-na.ssl-images-amazon.com/images/I/91U9VZ4UFNL.jpg",
      title:"Con cá vàng",
      description: "Ông lão bắt được con cá vàng"
    },


  ]
  return (
    <BookList books={books}/>
  );
}

export default App;
