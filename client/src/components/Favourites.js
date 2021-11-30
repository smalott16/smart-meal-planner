import { Grid, Typography, TextField } from "@mui/material";
import { React, useState, useEffect } from "react";
import RecipeSearchItem from "./RecipeSearchItem";
import favouritesHeaderIcon from './images/favourites.png'
import useFavouritesRender from "../hooks/useFavoritesRender";
const axios = require('axios');

const Favourites = function (props) {

  const [recipeContent, setRecipeContent] = useState([]);
  const [toggleRender, setToggleRender] = useState(false)
  const { heart } = useFavouritesRender()

  useEffect(() => {
    axios.get('/api/search/favourites')
      .then((result) => {
        setRecipeContent(() => {
          console.log("Favortite" ,result.data)
          return result.data.map((recipe) => {
            return <RecipeSearchItem recipe={recipe} render={toggleRender} />;
          })
        })
      })
      .catch(
        function (error) {
          console.log(error)
        }
      )
  }, [heart]);

  return (
    <Grid container justifyContent="center">
      <header className="mainPageHeaders">
        <img className="headerIcon" src={favouritesHeaderIcon} />
        Favourites
      </header>

      <Grid container justifyContent="center" spacing={2} >
        {
          recipeContent
        }
      </Grid>

    </Grid>
  )
}

export default Favourites;