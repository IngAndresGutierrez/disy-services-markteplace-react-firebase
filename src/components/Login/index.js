import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation,
} from 'react-router-dom'
import * as firebase from 'firebase/app'
import 'firebase/auth'

// This example has 3 pages: a public page, a protected
// page, and a login screen. In order to see the protected
// page, you must first login. Pretty standard stuff.
//
// First, visit the public page. Then, visit the protected
// page. You're not yet logged in, so you are redirected
// to the login page. After you login, you are redirected
// back to the protected page.
//
// Notice the URL change each time. If you click the back
// button at this point, would you expect to go back to the
// login page? No! You're already logged in. Try it out,
// and you'll see you go back to the page you visited
// just *before* logging in, the public page.

export default function AuthExample() {
  return (
    <Router>
      <div>
        <AuthButton />

        <ul>
          <li>
            <Link to="/public">Public Page</Link>
          </li>
          <li>
            <Link to="/protected">Protected Page</Link>
          </li>
        </ul>

        <Switch>
          <Route path="/public">
            <PublicPage />
          </Route>
          <Route path="/login">
            <LoginPage />
          </Route>
          <PrivateRoute path="/protected">
            <ProtectedPage />
          </PrivateRoute>
        </Switch>
      </div>
    </Router>
  )
}

firebase.auth().onAuthStateChanged(function (user) {
  if (user) {
    // User is signed in.
    var displayName = user.displayName
    var email = user.email
    var emailVerified = user.emailVerified
    var photoURL = user.photoURL
    var isAnonymous = user.isAnonymous
    var uid = user.uid
    var providerData = user.providerData

    console.log(displayName)
    console.log(email)
    console.log(emailVerified)
    console.log(photoURL)
    console.log(isAnonymous)
    console.log(uid)
    console.log(providerData)

    // ...
  } else {
    // User is signed out.
    // ...
  }
})

function loginWithGoogle(cb) {
  var provider = new firebase.auth.GoogleAuthProvider()
  //provider.addScope('https://www.googleapis.com/auth/contacts.readonly')
  //firebase.auth().useDeviceLanguage()

  firebase
    .auth()
    .signInWithPopup(provider)
    .then(function (result) {
      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = result.credential.accessToken
      // The signed-in user info.
      var user = result.user

      console.log(user, token)
      fakeAuthGoogle.isAuthenticated = true
      setTimeout(cb, 100) // fake async
    })
    .catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code
      var errorMessage = error.message
      // The email of the user's account used.
      var email = error.email
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential

      console.log(errorCode, errorMessage, email, credential)
    })
}

function loginWithFacebook(cb) {
  var provider = new firebase.auth.FacebookAuthProvider()

  firebase
    .auth()
    .signInWithPopup(provider)
    .then(function (result) {
      // This gives you a Facebook Access Token. You can use it to access the Facebook API.
      var token = result.credential.accessToken
      // The signed-in user info.
      var user = result.user
      console.log(user, token)
      fakeAuthGoogle.isAuthenticated = true
      setTimeout(cb, 100) // fake async
    })
    .catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code
      var errorMessage = error.message
      // The email of the user's account used.
      var email = error.email
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential
      console.log(errorCode, errorMessage, email, credential)
    })
}

const fakeAuthGoogle = {
  isAuthenticated: false,
  authenticate(cb) {
    loginWithGoogle(cb)
  },
  signout(cb) {
    fakeAuthGoogle.isAuthenticated = false
    setTimeout(cb, 100)
  },
}

const fakeAuthFacebook = {
  isAuthenticated: false,
  authenticate(cb) {
    loginWithFacebook(cb)
  },
  signout(cb) {
    fakeAuthFacebook.isAuthenticated = false
    setTimeout(cb, 100)
  },
}

function AuthButton() {
  let history = useHistory()

  return fakeAuthGoogle.isAuthenticated ? (
    <p>
      Welcome!{' '}
      <button
        onClick={() => {
          fakeAuthGoogle.signout(() => history.push('/'))
        }}
      >
        Sign out
      </button>
    </p>
  ) : (
    <p>You are not logged in.</p>
  )
}

// A wrapper for <Route> that redirects to the login
// screen if you're not yet authenticated.
function PrivateRoute({ children, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        fakeAuthGoogle.isAuthenticated || fakeAuthFacebook.isAuthenticated ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: location },
            }}
          />
        )
      }
    />
  )
}

function PublicPage() {
  return <h3>Public</h3>
}

function ProtectedPage() {
  return <h3>Protected</h3>
}

function LoginPage() {
  let history = useHistory()
  let location = useLocation()

  let { from } = location.state || { from: { pathname: '/' } }
  let loginGoogle = () => {
    fakeAuthGoogle.authenticate(() => {
      history.replace(from)
    })
  }

  let loginFacebook = () => {
    fakeAuthFacebook.authenticate(() => {
      history.replace(from)
    })
  }

  return (
    <div>
      <p>You must log in to view the page at {from.pathname}</p>
      <button onClick={loginGoogle}>Log in Google</button>
      <button onClick={loginFacebook}>Log in Facebook</button>
    </div>
  )
}
