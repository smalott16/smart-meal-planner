import React from 'react';
import { Grid, Typography, Paper } from '@mui/material';
import DayMealsItem from './DayMealsItem'

export default function DayMeals(props) {
  const mealTypes = ["breakfast", "lunch", "dinner"];
  const { meals, dayOfWeek } = props;
  
  return (
    <Grid>
      <Grid>
        <Typography align="center" variant="h4" component="div">
          {dayOfWeek}
        </Typography>
      </Grid>
      <Grid marginTop={0} container spacing={2} columns={3} wrap={"nowrap"}>
        {
          mealTypes.map((mealType) => {
            return (
              <Grid item xs={4}>
                <Paper sx={{ p: 2, margin: 'auto', maxWidth: 500, flexGrow: 1 }}>
                  <DayMealsItem meal={meals[mealType]} mealType={mealType}/>
                </Paper>
              </Grid>
            );
          })
        }
      </Grid>
    </Grid>
  );

};