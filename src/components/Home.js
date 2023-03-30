import React from 'react'
import {Link, useNavigate} from 'react-router-dom'

const Home = () => {
  
    const navigate = useNavigate();

    function navigateHandler(){
        navigate('/products')
    }
    
  return (
    <>
    <h1>Home</h1>
    <p>Go to <Link to="products">the list of products</Link></p>
    <p><button onClick={navigateHandler}></button></p>
    </>
  )
}

export default Home