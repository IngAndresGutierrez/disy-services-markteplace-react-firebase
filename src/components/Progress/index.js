/* import external modules */
import React from 'react'
import Backdrop from '@material-ui/core/Backdrop'
import CircularProgress from '@material-ui/core/CircularProgress'

/* import internal modules */
import useStyles from './styles'

/**
 *  @description This functional component is a spinner of loading
 *  @version 1.0.0
 *  @since 03/05/2020
 *  @author Jaime Andrés Gómez Gutiérrez <g.gutierrez.j.andres@gmail.com>
 *
 *  @function
 *  @name SimpleBackdrop
 *  @returns {Component} Returns a component with material-ui items
 **/

const SimpleBackdrop = () => {
  const classes = useStyles()

  return (
    <Backdrop className={classes.backdrop} open={true}>
      <CircularProgress color="inherit" />
    </Backdrop>
  )
}

export default SimpleBackdrop
