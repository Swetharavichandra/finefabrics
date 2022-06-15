
import "./accesories.css";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';


export default function App() {
  
  const furfab = [
    {
      id:1,
      img:"https://cdn.shopify.com/s/files/1/0418/1537/6032/products/45000073_Thumb_65353f80-449c-48c3-85f2-0ac27c19811d_1024x1024.jpg?v=1624452263",
      description:"White And Coffee Brown Trellis Pattern Embroidery Organza Tissue Premium Sheer Fabric",
      price:"₹300.00INR",
    },
    {
        id:2,
        img:"https://cdn.shopify.com/s/files/1/0418/1537/6032/products/45000162-Thumb_1024x1024.jpg?v=1651123700",
        description:"White And Mocha Brown Self Textured Jacquard Premium Curtain Fabric ",
        price:"₹519.00INR",
      },
      {
        id:3,
        img:"https://cdn.shopify.com/s/files/1/0418/1537/6032/products/45000190-Thumb_1024x1024.jpg?v=1624970400",
        description:"Cream Off-White Mocha Brown Self Textured Jacquard Premium Curtain Fabric ",
        price:"₹524.00INR",
      },
      {
        id:4,
        img:"https://cdn.shopify.com/s/files/1/0418/1537/6032/products/45000188-Thumb_1024x1024.jpg?v=1624970369",
        description:"White And Red Embroidery Organza Tissue Premium Sheer Fabric ",
        price:"₹487.00INR",
      },
      
      
      
    ]

  
  return (
    <div className="App">
      

      
      
      
      
      {furfab.map(({id,img,description,price}) => (
        <Furnishing 
        id={id}
       img={img}
       description={description}
       price={price}
       />
       ))};
       
      
</div>
  );
}

function Furnishing({id,img,description,price}){
  
 
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
        <Button  className="cart" size="small">
          Add to cart
        </Button>
      </CardActions>
    </Card>

  );
}