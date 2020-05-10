/* import external modules */
import React from 'react'
import {
  CardMedia,
  Typography,
  CardContent,
  CardActionArea,
  Card,
} from '@material-ui/core'
import { Link } from 'react-router-dom'

/* import internal modules */
import useStyles from './styles'

/**
 *  @description This functional component is a card to show a little descripción about a option
 *  @version 1.0.0
 *  @since 03/05/2020
 *  @author Jaime Andrés Gómez Gutiérrez <g.gutierrez.j.andres@gmail.com>
 *
 *  @function
 *  @name Category
 *  @returns {Component} Returns a component with material-ui items for compose the card
 **/

const Category = (props) => {
  const classes = useStyles()
  const { category } = props

  /**
   * @function
   * @description This function show user options on header bar
   * @param {String} url Target to redirect
   */

  return (
    <Card>
      <Link to={'/subcategorias/' + category.name}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={category.image}
            title={category.name}
          />
          <CardContent>
            <Typography variant="h6" className={classes.title}>
              {category.name}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Link>
    </Card>
  )
}

export default Category
