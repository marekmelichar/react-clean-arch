import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import reduxThunk from "redux-thunk";
import { rootReducer } from "./app/reducers";
import './index.scss';
import App from './app/App';
import './i18n';
import { BrowserRouter } from 'react-router-dom'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

const initialState = {};
const middleware = [reduxThunk];
export const store = createStore(rootReducer, initialState, applyMiddleware(...middleware));

const client = new ApolloClient({
  uri: "http://localhost:5000/graphql",
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback="loading">
      <ApolloProvider client={client}>
        <Provider store={store}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </Provider>
      </ApolloProvider>
    </Suspense>
  </React.StrictMode>,
  document.getElementById('root')
);