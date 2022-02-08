import { Grid } from '@mui/material';
import React from 'react';
import CardRecipe from './CardRecipe';

const RecipeDisplay = ({recipes}) => {
  return <>
      <Grid container spacing={2}> 
        {recipes.map((recipe)=>(
          <Grid item sm={4}><CardRecipe recipe={recipe}/></Grid>
          )
        )}

      </Grid>
  </>;
};

export default RecipeDisplay;
