import { tSTypeParameterInstantiation } from '@babel/types';
import React from 'react';
import { useState,useEffect } from 'react';

const MainButton = () => {
    const[userID,setID]=useState(null)
    const[userPW,setPW]=useState(null)
    const[print,setPrint]=useState(false)
    const[login,setLogin]=useState(false)
    function getuserID(val){
        setID(val.target.value)
        setPrint(false)
        setLogin(false)
    }
    function getuserPW(val){
        setPW(val.target.value)
        setPrint(false)
        setLogin(false)
    }
    useEffect(()=>{
        document.title=<h4>{userID} Welcome to my private Bookshop!</h4>;
    })
    return (
        <p>
        <h5>Books Searching:
        <input type="text"/>
        <button onClick={() => alert('testing')}>Find</button></h5><br/>
        <p/>Username:
        <input type="text" onChange={getuserID}/><br/>
        <p/>Password:
        <input type="text" onChange={getuserPW}/><br/>
        {
            print?<h4>Hi {userID}!<br/>
            Your Password is: {userPW}</h4>:null
        }<br/>
        <button onClick={()=>alert('123')}>SignIn</button>
        <button onClick={()=>setPrint(true)}>SignUp and Have a Look</button><br/>
        {/* <button onClick={()=>alert(ID)}>SignUp</button><br/> */}
        <p/>Click That Link Please<br/>
        <a href="https://www.amazon.com/s?k=electrical+engineering&i=stripbooks-intl-ship&crid=1VFRLKOEKB2SF&sprefix=electrical%2Cstripbooks-intl-ship%2C356&ref=nb_sb_ss_ts-doa-p_1_10"
          target="_blank" rel="noreferrer">
          Go and Buy yourself if you want!
        </a>
        <p/>So you can buy it on your own
        </p>
    )
}



export default MainButton