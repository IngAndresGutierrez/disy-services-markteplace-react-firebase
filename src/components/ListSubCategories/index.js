/* import external modules */
import React, { useState, useEffect } from 'react'
import { Grid } from '@material-ui/core'
import { useParams } from 'react-router-dom'

/* import internal modules */
import SubCategory from '../SubCategory'
import useStyles from './styles'
import data from '../../data'

/**
 *  @description This functional component is a ListSubCategories compound of SubCategory component
 *  @version 1.0.0
 *  @since 03/05/2020
 *  @author Jaime Andrés Gómez Gutiérrez <g.gutierrez.j.andres@gmail.com>
 *
 *  @function
 *  @name ListCategories
 *  @returns {Component} Returns a list of SubCategory component
 **/

const ListSubCategories = () => {
  const classes = useStyles()
  const [subcategories, setSubcategories] = useState([])
  var { name } = useParams()

  useEffect(() => {
    console.log(name)
    data.forEach((category) => {
      if (category.name === name) {
        setSubcategories(category.subcategories)
      }
    })
  })

  /**
   * @type {SubCategory[]}
   * @description This attribute render a list SubCategories
   * */
  const listSubCategories = subcategories.map((subcategory) => {
    return (
      <Grid item xs={6} md={4} key={subcategory.id}>
        <SubCategory key={subcategory.id} subcategory={subcategory} />
      </Grid>
    )
  })

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        {listSubCategories}
      </Grid>
    </div>
  )
}

export default ListSubCategories
