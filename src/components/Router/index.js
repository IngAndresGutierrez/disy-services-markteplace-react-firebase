/* import external modules */
import React, { Component, lazy } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

/* import internal modules */
const LazyLoginPage = lazy(() => import('../../pages/Login'))
const LazyHomePage = lazy(() => import('../../pages/Home'))
const LazySubCategoriesPage = lazy(() => import('../../pages/SubCategories'))
const LazyBiddersPage = lazy(() => import('../../pages/Bidders'))
const LazyPublishServicePage = lazy(() => import('../../pages/PublishService'))

/**
 *  @description This functional component is a router of all project
 *  @version 1.0.0
 *  @since 03/05/2020
 *  @author Jaime Andrés Gómez Gutiérrez <jaigom.ext@eltiempo.com>
 *
 *  @function
 *  @name Router
 *  @returns {Component} Returns a component with routes for each page project
 **/

class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={LazyHomePage} />
          <Route path="/login" component={LazyLoginPage} />
          <Route
            path="/subcategorias/:name"
            component={LazySubCategoriesPage}
          />
          <Route path="/oferentes/:name" component={LazyBiddersPage} />
          <Route path="/publicar_servicio" component={LazyPublishServicePage} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default Router
