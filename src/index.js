//index.js
import React from 'react';
import ReactDom from 'react-dom'
import {books} from './books'
import SpecificBook from './Book'
import App from './jump'
//CSS
import './index.css';

function BookList(){
  return (
    <p><h4>Welcome to my private Bookshop<br/>
    <App/>
      <h5>Books Searching:
      <input type="text"/>
      <button onClick={() => alert('testing')}>Find</button></h5><br/>
      {/* <button onClick={() => alert('Welcome!')}><h1>Main Page</h1></button>
      <button onClick={() => alert('Have a nice day')}><h1>ShoppingCart</h1></button>
      <button onClick={() => alert('Call me for details')}><h1>Orders</h1></button>
      <button onClick={() => alert('Call me for ordering')}><h1>NEW Orders</h1></button>
      <button onClick={() => alert('Whatsapp/Signal me')}><h1>Contacts</h1></button><br/> */}
      <p/>Login:
      <input type="text"/><br/>
      <p/>Password:
      <input type="text"/><br/>
      <button onClick={() => alert('1+1=2')}>Submit</button><br/>
      <p/>Click That Link Please<br/>
        <a href="https://www.amazon.com/s?k=electrical+engineering&i=stripbooks-intl-ship&crid=1VFRLKOEKB2SF&sprefix=electrical%2Cstripbooks-intl-ship%2C356&ref=nb_sb_ss_ts-doa-p_1_10"
          target="_blank" rel="noreferrer">
          Go and Buy yourself if you want!
        </a>
        <a href="http://localhost:3000/Orders"
          target="_blank" rel="noreferrer">
          trial
        </a>
      <p/>So you can buy it on your own</h4>
    <section className='booklist'>
      {books.map((book, index) => {
        const {img, title, author,link} = book;
        return (
          <SpecificBook key={book.id} book={book}></SpecificBook>
        );
    })}
    </section></p>
  );
}

ReactDom.render(<BookList/>,document.getElementById('root'));
