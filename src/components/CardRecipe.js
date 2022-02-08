import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


const CardRecipe = ({recipe}) => {
  return <div style={{marginLeft:"20px"}}>
      <Card sx={{ maxWidth: 345, marginTop:1,marginBottom:1 }}>
      <CardMedia
        component="img"
        height="140"
        image={recipe.recipe.image}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {recipe.recipe.label}
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          Calories:{recipe.recipe.calories}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  </div>;
};

export default CardRecipe;
