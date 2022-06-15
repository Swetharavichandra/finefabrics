import "./women.css";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';


export default function App() {
  
  const womenfab = [
    {
      id:1,
      img:"https://cdn.shopify.com/s/files/1/0418/1537/6032/files/S-33000499-Thumb.jpg?v=1646222931",
      description:"White And Pink Floral Pattern Digital Print Premium Sequins Georgette Saree",
      price:"₹2999.00INR",
    },
    {
        id:2,
        img:"https://cdn.shopify.com/s/files/1/0418/1537/6032/products/S-33000170-B_1024x1024.jpg?v=1653120931",
        description:"Ocean Green And Carrot Orange Stripes Pattern Digital Print Premium Sequins",
        price:"₹2159.00INR",
      },
      {
        id:3,
        img:"https://cdn.shopify.com/s/files/1/0418/1537/6032/products/S-33000387-B_1024x1024.jpg?v=1653120924",
        description:"Black Plain Half Pleated Jacquard Booti Japan Satin plain Print Premium Saree",
        price:"₹1889.00INR",
      },
      {
        id:4,
        img:"https://cdn.shopify.com/s/files/1/0418/1537/6032/products/S-33000335-B_1024x1024.jpg?v=1653716419",
        description:"Pale Pink And Black Polka Dots Pattern Digital Print Georgette Saree With Tassels",
        price:"₹1439.00INR",
      },
      {
        id:5,
        img:"https://cdn.shopify.com/s/files/1/0418/1537/6032/products/GlamSaree80_1024x1024.jpg?v=1653121629",
        description:"Black And Off White Stripes Pattern Digital Print Crepe Silk Saree With Tassels",
        price:"₹1386.00INR",
      },
      {
        id:6,
        img:"https://cdn.shopify.com/s/files/1/0418/1537/6032/products/S-33000226-B_1024x1024.jpg?v=1653121615",
        description:"Dijon Yellow And Purple Shibori Pattern Digital Print Crepe Silk Saree With Tassels",
        price:"₹1386.00INR",
      },
      {
        id:7,
        img:"https://cdn.shopify.com/s/files/1/0418/1537/6032/products/S-33000186-B_1024x1024.jpg?v=1653130144",
        description:"Turquoise And White Leheriya Pattern Digital Print Georgette Saree With Pearl Work Lace Border",
        price:"₹1500.00INR",
      },
      
    ]

  
  return (
    <div className="App">
      

      
      
      
      
      {womenfab.map(({id,img,description,price}) => (
        <Women 
        id={id}
       img={img}
       description={description}
       price={price}
       />
       ))};
       
      
</div>
  );
}

function Women({id,img,description,price}){
  
 
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