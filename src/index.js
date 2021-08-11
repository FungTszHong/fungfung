import React from 'react';
import ReactDom from 'react-dom'
import {books} from './books'
import App from './jump'
import MainButton from './MainButton'
import './index.css';

function BookList(){
  return (
    <p><h4>Welcome to my private Bookshop<br/>
    <App/>
    <MainButton/>
    <section className='booklist'>
      {books.map((book, index) => {
        const {img, title, author,link} = book;
        console.log(book);
        return (
          <article className='book' onMouseOver={(console.log(title))}>
          <a href={link} target="_blank"><img src={img} alt='' /><h1>{title}</h1> </a> <br/>
          <h4>{author}</h4>
          <button onClick={() => alert('Fuck Off')}>Want a free one?</button>
          </article>
        );
    })}
    </section></h4></p>
  );
}

ReactDom.render(<BookList/>,document.getElementById('root'));