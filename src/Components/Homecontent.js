import React from 'react';
import styled from "styled-components";
import { Link } from 'react-router-dom';


const Container = styled.div`
    margin:10px;
    padding-top:20px;
    border-radius: 10px;
    position:absolute;
    flex:1;
    height:70vh;
    

`
const Image = styled.img`
object-fit:fill;
    min-width: 200px;
    min-height: 200px;
    width:290px;
    display: inline-block;
  margin: 25px 10px;
  padding:10px;
  cursor:pointer;
`
const Category = styled.h3`
fontSize:bold;
margin:50px;
padding:5px;
`
const Img = styled.img`
object-fit:fill;
    min-width: 100px;
    min-height: 100px;
    width:290px;
    display: inline-block;
  margin: 25px 10px;
  cursor:pointer;
`








const Homecontent = () => {
  return (
    <Container>
      <Link to="/women" style={{ textDecoration: 'none'}}>
<Image src='https://cdn.shopify.com/s/files/1/0418/1537/6032/files/Top_2_1b2a44a8-55be-43b2-a602-00d179edbcc9_grande.jpg?v=1652443343'/>

<Image src='https://cdn.shopify.com/s/files/1/0418/1537/6032/files/Top_1_bc679728-ed6a-407c-9f0f-60f66efe4e4d_grande.jpg?v=1652443367'/>

<Image src='https://cdn.shopify.com/s/files/1/0418/1537/6032/files/Top_3_ee774352-7a57-4357-abba-207e2306bcf1_grande.jpg?v=1652443380'/>

<Image src='https://cdn.shopify.com/s/files/1/0418/1537/6032/files/Top_4_7f2cec91-ef81-44ae-8098-087585b2ac87_grande.jpg?v=1652443392'/>
</Link>
    <Category>
      Shop by Category
    </Category>
    <Link to="/men" style={{ textDecoration: 'none'}}> <Img src='https://cdn.shopify.com/s/files/1/0418/1537/6032/files/Cat_1_313923a7-abf9-4e5c-a8d2-2b84530e29a2.jpg?v=1652442797'/></Link>
    <Link to="/fabrics" style={{ textDecoration: 'none'}}><Img src='https://cdn.shopify.com/s/files/1/0418/1537/6032/files/Cat_2_86697a70-83fc-4994-bea8-6b23922e03eb.jpg?v=1652442808'/></Link>
    <Link to="/fabrics" style={{ textDecoration: 'none'}}><Img src='https://cdn.shopify.com/s/files/1/0418/1537/6032/files/Cat_3_aa4783e9-bd43-43d2-a18a-d8923fb229e3.jpg?v=1652442822'/></Link>
    <Link to="/accesories" style={{ textDecoration: 'none'}}> <Img src='https://cdn.shopify.com/s/files/1/0418/1537/6032/files/Cat_4_95d76481-2021-417e-96d6-24f425e3c803.jpg?v=1652442871'/></Link>
    <Link to="/men" style={{ textDecoration: 'none'}}><Img src='https://cdn.shopify.com/s/files/1/0418/1537/6032/files/Cat_5_6828581c-cefa-4dce-acbf-4f1dfec8c6bd.jpg?v=1652442798'/></Link>
    <Link to="/women" style={{ textDecoration: 'none'}}><Img src='https://cdn.shopify.com/s/files/1/0418/1537/6032/files/Cat_6_0bb07cd0-f88b-4bc6-a5a8-2bc300623c6d.jpg?v=1652442808'/></Link>
    <Link to="/fabrics" style={{ textDecoration: 'none'}}><Img src='https://cdn.shopify.com/s/files/1/0418/1537/6032/files/Cat_7_a1c4507f-c103-4972-a759-39ed73f117c6.jpg?v=1652442823'/></Link>
    <Link to="/accesories" style={{ textDecoration: 'none'}}><Img src='https://cdn.shopify.com/s/files/1/0418/1537/6032/files/Cat_8_f270b2e4-3551-4857-b02b-f4e882b5e0c5.jpg?v=1652442873'/></Link>
    <Category>
      Range of Patterns
    </Category>
    <Link to="/fabrics" style={{ textDecoration: 'none'}}>
      <Img src='https://cdn.shopify.com/s/files/1/0418/1537/6032/files/RP_6_aca76496-1bef-4da6-98fc-d2dbea59227a.jpg?v=1652442475'/>
    <Img src='https://cdn.shopify.com/s/files/1/0418/1537/6032/files/RP_1_a194a386-6bee-4e47-9a82-0e998be6f8f9.jpg?v=1652442485'/>
    <Img src='https://cdn.shopify.com/s/files/1/0418/1537/6032/files/RP_2_a4cfba46-4abf-4733-afe5-1b28f32cc1f3.jpg?v=1652442495'/>
    <Img src='https://cdn.shopify.com/s/files/1/0418/1537/6032/files/RP_3_01f92839-ce18-4239-b55e-9ec64fb88ced.jpg?v=1652442506'/>
    <Img src='https://cdn.shopify.com/s/files/1/0418/1537/6032/files/RP_8_9c0a97c4-a249-4f4e-b759-5d5818a27c71.jpg?v=1652442475'/>
    <Img src='https://cdn.shopify.com/s/files/1/0418/1537/6032/files/RP_7_9fe3112c-c0a3-465b-818f-9ed72ff3f77f.jpg?v=1652442486'/>
    <Img src='https://cdn.shopify.com/s/files/1/0418/1537/6032/files/RP_12_fe3dd462-3dc6-4eb1-a7b3-cd84e5222301.jpg?v=1652442496'/>
    <Img src='https://cdn.shopify.com/s/files/1/0418/1537/6032/files/RP_11_d41cd6b1-a069-49b2-8d66-63a688da8058.jpg?v=1652442508'/>
    </Link>
    </Container>
  )
}

export default Homecontent;