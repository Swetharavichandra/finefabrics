
import "./men.css";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';


export default function App() {
  
  const menfab = [
    {
      id:1,
      img:"https://cdn.shopify.com/s/files/1/0418/1537/6032/products/31006404-Thumb_1024x1024.jpg?v=1622635153",
      description:"Apricot Orange And Forest Green Chain Pattern Digital Print Dense Crepe Satin Shirting Fabric",
      price:"₹231.00INR",
    },
    {
        id:2,
        img:"https://cdn.shopify.com/s/files/1/0418/1537/6032/products/43000261-Thumb_1024x1024.jpg?v=1622528934",
        description:"Beaver Brown And White Stripes Pattern Yarn Dyed Premium Shirting Fabric ",
        price:"₹279.00INR",
      },
      {
        id:3,
        img:"https://cdn.shopify.com/s/files/1/0418/1537/6032/products/31006379-Thumb_1024x1024.jpg?v=1622636616",
        description:"Cream And Peach Floral Pattern Digital Print Dense Crepe Satin Shirting Fabric",
        price:"₹307.00INR",
      },
      {
        id:4,
        img:"https://cdn.shopify.com/s/files/1/0418/1537/6032/products/31006347-Thumb_1024x1024.jpg?v=1622810519",
        description:"Black And White Chain Pattern Digital Print Poly Spun Shirting Fabric",
        price:"₹262.00INR",
      },
      {
        id:5,
        img:"https://cdn.shopify.com/s/files/1/0418/1537/6032/products/31006408-Thumb_1024x1024.jpg?v=1622635170",
        description:"Premium White And Green Chain Pattern Digital Print  Crepe Fabric",
        price:"₹230.00INR",
      },
      {
        id:6,
        img:"https://cdn.shopify.com/s/files/1/0418/1537/6032/products/31006374-Thumb_1024x1024.jpg?v=1622636569",
        description:"Tea Green And Black Animal Pattern Digital Print Crepe Fabric",
        price:"₹231.00INR",
      },
      {
        id:7,
        img:"https://cdn.shopify.com/s/files/1/0418/1537/6032/products/31006411-Thumb_1024x1024.jpg?v=1622635229",
        description:"Pearl White And Mustard Yellow Chain Pattern Digital Print Dense Crepe  Fabric",
        price:"₹231.00INR",
      },
      
    ]

  
  return (
    <div className="App">
      

      
      
      
      
      {menfab.map(({id,img,description,price}) => (
        <Men 
        id={id}
       img={img}
       description={description}
       price={price}
       />
       ))};
       
      
</div>
  );
}

function Men({id,img,description,price}){
  
 
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
        <Button className="cart" size="small">
          Add to cart
        </Button>
      </CardActions>
    </Card>

  );
}