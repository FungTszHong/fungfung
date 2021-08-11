import React from 'react';
import ReactDom from 'react-dom'
import App from './jump'
import MainButton from './MainButton'

function Home (){
    return (
        <p><h4>Welcome to my private Bookshop<br/>
        <App/>
        <MainButton/>
        </h4></p>
    )
}

ReactDom.render(<Home/>,document.getElementById('root'));