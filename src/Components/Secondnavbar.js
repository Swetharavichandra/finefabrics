import React from 'react';
import styled from 'styled-components'
import { Link } from "react-router-dom"; 



const Secondnav = styled.div`
padding:30px;
`
const Category=styled.div`
word-spacing:10px;;
display:flex;
margin-left:150px;
margin-right:100px;
justify-content:space-between;
display: flex; 
align-items: center;
width:70%;
font-family:Montserrat,sans-serif;
font-weight: 500;

  
`

const Secondnavbar = () => {
  return (
      <Secondnav>
    <nav class="navbar navbar-expand-lg navbar-light bg-white">
    <Category>
      <Link to="fabrics" style={{ textDecoration: 'none'}}><p class="navbar-brand">FABRICS</p></Link>
      <Link to="women" style={{ textDecoration: 'none'}}><p class="navbar-brand">WOMEN</p></Link>
      <Link to="men" style={{ textDecoration: 'none'}}><p class="navbar-brand">MEN</p></Link>
      <Link to="accesories" style={{ textDecoration: 'none'}}><p class="navbar-brand">ACCESORIES</p></Link>
      <Link to="furnishing" style={{ textDecoration: 'none'}}><p class="navbar-brand">FURNISHING</p></Link>
  </Category>
  

  
  
</nav>
</Secondnav>
  )
}

export default Secondnavbar