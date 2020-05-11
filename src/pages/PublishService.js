/* import external modules */
import React from 'react'

/* import internal modules */
import Layout from '../components/Layout'
import PublishServiceForm from '../components/PublishServiceForm'

/**
 *  @description This is a Publish Service page
 *  @version 1.0.0
 *  @since 10/05/2020
 *  @author Jaime Andrés Gómez Gutiérrez <g.gutierrez.j.andres@gmail.com>
 *
 *  @function
 *  @name PublishServicePage
 *  @returns {Component} Returns a component with layout where children is a form pubslish component
 **/

const PublishServicePage = () => {
  return (
    <Layout>
      <PublishServiceForm />
    </Layout>
  )
}

export default PublishServicePage
