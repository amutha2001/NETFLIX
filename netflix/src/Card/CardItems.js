import React from 'react'
 //import CardActions from '@mui/material/CardActions';
//import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
//import Button from '@mui/material/Button';
//import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import "./CardItems.css"

const CardItems = ({movie}) => {
  console.log("movie",movie)
  return (
   <>
    <div className='container'>
      
      <div className='main'>
          
          <Card sx={{ maxWidth: 290 ,mt:2}}>
          <CardMedia
            component="img"
            alt="green iguana"
            height="440"
            image={movie.image}

          />
          <h3>{movie.Name}</h3>
          <p>{movie.Description}</p>
          {/* <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            
            </Typography>
            <Typography variant="body2" color="text.secondary">
                  
            </Typography>
          </CardContent> */}
          {/* <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions> */}
        </Card>
        
      </div>
      
   
    </div>
   </>
   
   
    
  )
}

export default CardItems