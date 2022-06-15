import React from 'react'
import styled from "styled-components";

const Container = styled.div`
  height: 50px;
  background-color: #abb747;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: 500;
  font-family:"Lucida Console";
`;

export const Heading = () => {
  return (
    <Container>SAFE, FAST AND RELIABLE SHIPPING FROM DHL, BLUEDART!!!</Container>
  )
}

export default Heading;