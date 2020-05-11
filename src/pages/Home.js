/* import external modules */
import React from 'react'

/* import internal modules */
import ListCategories from '../components/ListCategories'
import Layout from '../components/Layout'
/**
 *  @description This is a home page
 *  @version 1.0.0
 *  @since 03/05/2020
 *  @author Jaime Andrés Gómez Gutiérrez <g.gutierrez.j.andres@gmail.com>
 *
 *  @function
 *  @name HomePage
 *  @returns {Component} Returns a component with layout where children is a ListCategories component
 **/

const HomePage = () => {
  return (
    <Layout>
      <ListCategories />
    </Layout>
  )
}

export default HomePage
