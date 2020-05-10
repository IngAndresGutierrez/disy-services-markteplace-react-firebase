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
 *  @since 09/05/2020
 *  @author Jaime Andrés Gómez Gutiérrez <g.gutierrez.j.andres@gmail.com>
 *
 *  @function
 *  @name SubCategory
 *  @returns {Component} Returns a component with material-ui items for compose the card
 **/

const SubCategory = (props) => {
  const classes = useStyles()
  const { subcategory } = props

  /**
   * @function
   * @description This function show user options on header bar
   * @param {String} url Target to redirect
   */

  return (
    <Link to={'/oferentes/' + subcategory.name}>
      <Card>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={subcategory.image}
            title={subcategory.name}
          />
          <CardContent>
            <Typography variant="h6" className={classes.title}>
              {subcategory.name}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  )
}

export default SubCategory
