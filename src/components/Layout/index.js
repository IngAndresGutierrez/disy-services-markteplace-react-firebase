/* import external modules */
import React from 'react'

/* import internal modules */
import Footer from '../Footer'
import Header from '../Header'

/**
 *  @description This functional component is a layout for header and footer into the project
 *  @version 1.0.0
 *  @since 03/05/2020
 *  @author Jaime Andrés Gómez Gutiérrez <g.gutierrez.j.andres@gmail.com>
 *
 *  @function
 *  @name Layout
 *  @param {props} props Contains the children components
 *  @returns {Component} Returns components header and footer how parents
 **/

const Layout = (props) => {
  return (
    <div>
      <Header />
      {props.children}
      <Footer />
    </div>
  )
}

export default Layout
