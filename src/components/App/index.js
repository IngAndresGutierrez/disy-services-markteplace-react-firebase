/* import external modules */
import React, { Suspense } from 'react'
import { Provider } from 'react-redux'

/* import internal modules */
import Router from '../../components/Router'
import store from '../../redux/storeConfig/store'
import Progress from '../../components/Progress'
import Layout from '../Layout'

/** @description This functional component is a core of the project
 *  @version 1.0.0
 *  @since 03/05/2020
 *  @author Jaime Andrés Gómez Gutiérrez <g.gutierrez.j.andres@gmail.com>
 *
 *  @function
 *  @name App
 *  @returns {Component} Returns redux creation with your children components
 **/

const App = () => {
  return (
    <Provider store={store}>
      <Suspense fallback={<Progress />}>
        <Layout>
          <Router />
        </Layout>
      </Suspense>
    </Provider>
  )
}

export default App
