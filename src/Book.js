// Book.js
import React from 'react'

const Book = (props) => {
  console.log(props);
  const {img, title, author,link} = props.book;

  return (
  <article className='book' onMouseOver={(console.log(title))}>
    <a href={link} target="_blank"><img src={img} alt='' /><h1>{title}</h1> </a> <br/>
    <h4>{author}</h4>
    <button onClick={() => alert('Fuck Off')}>Want a free one?</button>
    </article>
  );
};

export default Book