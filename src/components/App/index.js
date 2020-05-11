/* import external modules */
import React, { Suspense } from 'react'
import { Provider } from 'react-redux'
import * as firebase from 'firebase/app'

/* import internal modules */
import Router from '../../components/Router'
import store from '../../redux/storeConfig/store'
import Progress from '../../components/Progress'

/** @description This functional component is a core of the project
 *  @version 1.0.0
 *  @since 03/05/2020
 *  @author Jaime Andrés Gómez Gutiérrez <g.gutierrez.j.andres@gmail.com>
 *
 *  @function
 *  @name App
 *  @returns {Component} Returns redux creation with your children components
 **/

const firebaseConfig = {
  apiKey: 'AIzaSyAvJeDNVgBbDaIzJZrQT5YBpdCJwzvyXu8',
  authDomain: 'disy-app.firebaseapp.com',
  databaseURL: 'https://disy-app.firebaseio.com',
  projectId: 'disy-app',
  storageBucket: 'disy-app.appspot.com',
  messagingSenderId: '1076083370249',
  appId: '1:1076083370249:web:6dd698d5304c1aa2738bd8',
  measurementId: 'G-H6T88GBKCR',
}

const App = () => {
  firebase.initializeApp(firebaseConfig)
  return (
    <Provider store={store}>
      <Suspense fallback={<Progress />}>
        <Router />
      </Suspense>
    </Provider>
  )
}

export default App
