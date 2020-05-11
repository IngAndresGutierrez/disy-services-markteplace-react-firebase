/* import external modules */
import React from 'react'

/* import internal modules */
import Layout from '../components/Layout'

/**
 *  @description This is a Bidders page
 *  @version 1.0.0
 *  @since 09/05/2020
 *  @author Jaime Andrés Gómez Gutiérrez <g.gutierrez.j.andres@gmail.com>
 *
 *  @function
 *  @name BiddersPage
 *  @returns {Component} Returns a component with list of bidders services into platform
 **/

const BiddersPage = () => {
  return (
    <Layout>
      <h3>
        Listado de personas que prestan el servicio según la subcategoria
        seleccionada
      </h3>
    </Layout>
  )
}

export default BiddersPage
