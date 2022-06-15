
import "./fabrics.css";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';


export default function App() {
  
  const fabrics = [
    {
      id:1,
      img:"https://cdn.shopify.com/s/files/1/0418/1537/6032/products/32000262-Thumb_bf526a69-bf1a-46c2-b2a0-881271377600_1024x1024.jpg?v=1654234193",
      description:"Sangria Purple Plain Japan Satin Fabric",
      price:"₹189.00INR",
    },
    {
        id:2,
        img:"https://cdn.shopify.com/s/files/1/0418/1537/6032/products/22002827-Thumb_1024x1024.jpg?v=1654001420",
        description:"Dijon Yellow And Barn Red Patola Pattern Digital Print Art Fabric",
        price:"₹249.00INR",
      },
      {
        id:3,
        img:"https://cdn.shopify.com/s/files/1/0418/1537/6032/products/F-IKCT0465-Thumb_1024x1024.jpg?v=1653638690",
        description:"Black And Ecru Beige Floral Pattern Digital Print Art Dola Silk Fabric",
        price:"₹187.00INR",
      },
      {
        id:4,
        img:"https://cdn.shopify.com/s/files/1/0418/1537/6032/products/22002833-Thumb_1024x1024.jpg?v=1654001403",
        description:"Black And Honey Yellow Stripes Pattern Pre-Washed Ikat  Fabric",
        price:"₹329.00INR",
      },
      {
        id:5,
        img:"https://cdn.shopify.com/s/files/1/0418/1537/6032/products/F-IKCT0465-Thumb_1024x1024.jpg?v=1653638690",
        description:"Black And Beige Chain Pattern Digital Print American Crepe Fabric",
        price:"₹269.00INR",
      },
      {
        id:6,
        img:"https://cdn.shopify.com/s/files/1/0418/1537/6032/products/22002848-Thumb_1024x1024.jpg?v=1654001612",
        description:"Rasin Purple And Salmon Peach Floral Pattern Luxury Sequins Fabric",
        price:"₹2699.00INR",
      },
      {
        id:7,
        img:"https://cdn.shopify.com/s/files/1/0418/1537/6032/products/22002845-Thumb_1024x1024.jpg?v=1654001547",
        description:"Liril Green Plain Neon Ultra Satin Fabric",
        price:"₹151.00INR",
      },
      
    ]

  
  return (
    <div className="App">
      

      
      
      
      
      {fabrics.map(({id,img,description,price}) => (
        <Fabrics 
        id={id}
       img={img}
       description={description}
       price={price}
       />
       ))};
       
      
</div>
  );
}

function Fabrics({id,img,description,price}){
  
 
return(
   
<Card className='card' sx={{ maxWidth: 380 }}>
      <CardActionArea>
        <CardMedia
        className="media"
          component="img"
          height="250"
          image={img}
          alt=""
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {description}
          </Typography>
          <Typography variant="h6" color="text.secondary">
           {price}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button className="cart" size="large">
          Add to cart
        </Button>
      </CardActions>
    </Card>

  );
}