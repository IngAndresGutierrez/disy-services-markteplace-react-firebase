/* import external modules */
import React from 'react'
import { Grid } from '@material-ui/core'

/* import internal modules */
import Category from '../Category'
import useStyles from './styles'
import data from '../../data'
/**
 *  @description This functional component is a ListCategories compound of Category component
 *  @version 1.0.0
 *  @since 03/05/2020
 *  @author Jaime Andrés Gómez Gutiérrez <g.gutierrez.j.andres@gmail.com>
 *
 *  @function
 *  @name ListCategories
 *  @returns {Component} Returns a list of Category component
 **/

const ListCategories = () => {
  const classes = useStyles()

  /**
   * @type {Category[]}
   * @description This attribute render a list Categories
   * */

  let listCategories = data.map((category) => {
    return (
      <Grid item xs={4} key={category.id}>
        <Category category={category} />
      </Grid>
    )
  })

  return (
    <div className={classes.root}>
      {/*
      <Typography variant="h6" className={classes.title}>
         Categorias 
      </Typography>
      */}
      <Grid container spacing={3}>
        {listCategories}
      </Grid>
    </div>
  )
}

export default ListCategories
