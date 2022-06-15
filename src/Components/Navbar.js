import React from "react";
import Badge from '@mui/material/Badge';
import styled from "styled-components";
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartCheckoutTwoToneIcon from '@mui/icons-material/ShoppingCartCheckoutTwoTone';
import { Link } from "react-router-dom";






const Navbox = styled.div`
  height: 70px;
  background-color:white;
  width:100vw;
  position:sticky;
  top:0;
  z-index:100;
  
  `
const Spaceup = styled.div`
padding:10px 20px;
display:flex;
justify-content:space-between;
`
const Left= styled.div`
flex:1;
display: flex;
align-items: center;
`


const Image=styled.img`

  display: flex;
  align-items: center;
  height:50px;
  
  
  
  
`


const Center = styled.div`
flex:1;
text-align:center;
`
const Logo = styled.h2`
font-weight:bold;
font-family: "Garamond";
color:#abb747;
font-size:2rem;
position:relative;
cursor:pointer;

`

const Right = styled.div`
flex:1;
display:flex;
align-items:center;
justify-content:flex-end;
`
const Navitems = styled.div`
font-size:14px;
cursor:pointer;
margin-left:25px;

`




const Navbar = () => {
    return (
        <Navbox>
            <Spaceup>
                <Left>
                <Link to="/" style={{ textDecoration: 'none'}}><Image src="https://lh3.googleusercontent.com/A6kda0Qefspvu8SKwDDNBd4hcUzbht1r5JgUVzZO01sMzYBfeJLK0rNxsVesaROc1Ao" alt=""/>
                </Link>
                </Left>
                <Center>
                <Link to="/" style={{ textDecoration: 'none'}}><Logo>
                    F I N E F A B R I C S
                    
                    </Logo>
                    </Link>
                    
                    </Center>
                <Right>
                
                <Navitems><Link to="/login" style={{ textDecoration: 'none',color:"black"}}>Login</Link></Navitems>
                    <Navitems>
                        <Badge badgeContent={0} color="primary">
                        <Link to="/cart" style={{ textDecoration: 'none'}}> <ShoppingCartCheckoutTwoToneIcon color="action" /></Link>
                        </Badge>
                    </Navitems>
                </Right>
            </Spaceup>

        </Navbox>
    );
};

export default Navbar;


