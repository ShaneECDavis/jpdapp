import React from 'react'
import ReactDOM from 'react-dom'
import { ApolloProvider } from 'react-apollo'
import ApolloClient from 'apollo-boost'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import store from './store'
import { Provider } from 'react-redux'
import { Router } from 'react-router-dom'
import history from './history'

const client = new ApolloClient({
  uri: 'https://api.ratebeer.com/v1/api/graphql',
  headers: {
    'content-type': 'application/json',
    accept: 'application/json',
    'x-api-key': ratebeerapi
  }
})
/*
'content-type: application/json' \
-H 'accept: application/json' \
-H 'x-api-key: <YOUR_API_KEY>'


It provides 3 headers:
 1. content-type with a value of 'application/json' to indicate that the body uses the JSON format.
 2. accept with a value of 'application/json' to indicate we're expecting JSON format in response.
 3. x-api-key the value for which you'll need to supply the API Key you've received.
*/

ReactDOM.render(
  <ApolloProvider client={client}>
    <Provider store={store}>
      <Router history={history}>
        <App />
      </Router>
    </Provider>
  </ApolloProvider>,

  document.getElementById('root')
)
registerServiceWorker()
