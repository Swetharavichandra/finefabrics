import React from 'react';
import { Grid } from '@mui/material';

const fabrics = [
  {
    id:1,
    img:"https://cdn.shopify.com/s/files/1/0418/1537/6032/products/32000262-A_6f2ed557-06a4-4f40-893f-240ec9bf5fe0_300x.jpg?v=1654234193",
    description:"Sangria Purple Plain Japan Satin Fabric",
    price:"₹189.00INR",
  },
  {
      id:2,
      img:"https://cdn.shopify.com/s/files/1/0418/1537/6032/products/22002827-A_300x.jpg?v=1654001421",
      description:"Dijon Yellow And Barn Red Patola Pattern Digital Print Art Dola Silk Fabric",
      price:"₹249.00INR",
    },
    {
      id:3,
      img:"https://cdn.shopify.com/s/files/1/0418/1537/6032/products/22002833-A_compact.jpg?v=1654001403",
      description:"Black And Ecru Beige Floral Pattern Digital Print Art Dola Silk Fabric",
      price:"₹187.00INR",
    },
    {
      id:4,
      img:"https://cdn.shopify.com/s/files/1/0418/1537/6032/products/32000262-A_6f2ed557-06a4-4f40-893f-240ec9bf5fe0_300x.jpg?v=1654234193",
      description:"Black And Honey Yellow Stripes Pattern Pre-Washed Ikat Cotton Fabric",
      price:"₹329.00INR",
    },
    {
      id:5,
      img:"https://cdn.shopify.com/s/files/1/0418/1537/6032/products/31003375-A_300x.jpg?v=1614058658",
      description:"Black And Beige Chain Pattern Digital Print American Crepe Fabric",
      price:"₹269.00INR",
    },]

const Products = () => {
  return (
    <div>
      <Grid container justify="center" spacing={4}>
        {fabrics.map((fabric)=>(
          <Grid item key={fabric.id} xs={12} sm={6} md={4} lg={3}>
            <Fabrics/>

          </Grid>
        ))}

      </Grid>
    </div>
  )
}

export default Products