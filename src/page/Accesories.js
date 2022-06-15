
import "./accesories.css";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';


export default function App() {
  
  const accfab = [
    {
      id:1,
      img:"https://cdn.shopify.com/s/files/1/0418/1537/6032/products/D-DPPS0001-Thumb_1024x1024.jpg?v=1624248848",
      description:"Peacock Green And Orange Paisley Pattern Digital Print Silk Dupatta",
      price:"₹300.00INR",
    },
    {
        id:2,
        img:"https://cdn.shopify.com/s/files/1/0418/1537/6032/products/SC-DPGE0001-Thumb_1024x1024.jpg?v=1621858603",
        description:"Black And Pecan Brown Animal Pattern Digital Print Georgette Scarf ",
        price:"₹279.00INR",
      },
      {
        id:3,
        img:"https://cdn.shopify.com/s/files/1/0418/1537/6032/products/02-C_1024x1024.jpg?v=1639372658",
        description:"Fine Fabrics Printed Georgette Pleated Skirt",
        price:"₹1724.00INR",
      },
      {
        id:4,
        img:"https://cdn.shopify.com/s/files/1/0418/1537/6032/products/5f261b14b6d23c77bf9fe15f25262d03_57db69db-0f6a-420e-b52f-c1e4de9a9ebd_1024x1024.jpg?v=1594187917",
        description:"Flaxen Yellow And Blue Animal Pattern Unstitched Georgette Kaftan",
        price:"₹674.00INR",
      },
      {
        id:5,
        img:"https://cdn.shopify.com/s/files/1/0418/1537/6032/products/04-C_1024x1024.jpg?v=1639372666",
        description:"Fine Fabrics Printed Georgette Pleated Skirt",
        price:"₹1230.00INR",
      },
      
      
    ]

  
  return (
    <div className="App">
      

      
      
      
      
      {accfab.map(({id,img,description,price}) => (
        <Accesories 
        id={id}
       img={img}
       description={description}
       price={price}
       />
       ))};
       
      
</div>
  );
}

function Accesories({id,img,description,price}){
  
 
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
        <Button className="cart" size="small" >
          Add to cart
        </Button>
      </CardActions>
    </Card>

  );
}