/* import external modules */
import React from 'react'

/* import internal modules */
import ListSubCategories from '../components/ListSubCategories'
import Layout from '../components/Layout'

/**
 *  @description This is a subcategories page
 *  @version 1.0.0
 *  @since 09/05/2020
 *  @author Jaime Andrés Gómez Gutiérrez <g.gutierrez.j.andres@gmail.com>
 *
 *  @function
 *  @name SubCategoriesPage
 *  @returns {Component} Returns a component with layout where children is a ListSubCategories component
 **/

const SubCategoriesPage = () => {
  return (
    <Layout>
      <ListSubCategories />
    </Layout>
  )
}

export default SubCategoriesPage
