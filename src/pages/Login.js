/* import external modules */
import React from 'react'

/* import internal modules */
import SignIn from '../components/Login'
import Layout from '../components/Layout'

/**
 *  @description This is a login page
 *  @version 1.0.0
 *  @since 03/05/2020
 *  @author Jaime Andrés Gómez Gutiérrez <g.gutierrez.j.andres@gmail.com>
 *
 *  @function
 *  @name LoginPage
 *  @returns {Component} Returns a component SigIn
 **/

const LoginPage = ({ history }) => {
  return (
    <Layout>
      <SignIn />
    </Layout>
  )
}

export default LoginPage
