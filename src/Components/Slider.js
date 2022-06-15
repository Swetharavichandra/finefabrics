import React from 'react'
import styled from 'styled-components'
import {Carousel} from 'react-bootstrap'


const Slide = styled.div`
object-fit:contain;

`

const Slider = () => {
  return (
    <Slide>
<Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://cdn.shopify.com/s/files/1/0418/1537/6032/files/Desk__Kantha_dff94a48-9471-4ae9-bfaa-5b204d0c2a50.jpg?v=1652678214"
      alt="First slide"
    />
    
    
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://cdn.shopify.com/s/files/1/0418/1537/6032/files/Desk__Dyeable_3bb95578-d33d-47c4-9a0d-be9220483ded.jpg?v=1652678214"
      alt="Second slide"
    />

    
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://cdn.shopify.com/s/files/1/0418/1537/6032/files/Just_arrived_fabric_desk_9f226752-4a1c-4fc5-b7e7-9f32454da738.jpg?v=1652687492"
      alt="Third slide"
    />

    
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://cdn.shopify.com/s/files/1/0418/1537/6032/files/Buy_2_get_1_free_saree_online_fabcurate_desk.gif?v=1652775025"
      alt="fourth slide"
    />

    
  </Carousel.Item>
</Carousel>
       </Slide>
  )
}

export default Slider