import React from 'react';
import ReactDOM from 'react-dom';
// import { ApolloProvider } from 'react-apollo';
import { ApolloProvider as ApolloHooksProvider } from 'react-apollo-hooks';
import { setContext } from '@apollo/client/link/context';
import {
    ApolloClient,
    InMemoryCache,
    NormalizedCacheObject,
    ApolloProvider,
    createHttpLink
} from '@apollo/client';
import App from './App';
import './index.css'

const httpLink = createHttpLink({
    uri: 'https://api.github.com/graphql',
});

const authLink = setContext((_, { headers }) => {
    // get the authentication token from local storage if it exists
    const token = "58e93f7077f1f958caf82ff162c5d13454c7740b";
    // return the headers to the context so httpLink can read them
    return {
        headers: {
            ...headers,
            authorization: token ? `Bearer ${token}` : "",
        }
    }
});



const client = new ApolloClient<any>({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),

});

ReactDOM.render(
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>,
    document.getElementById('root'),
);
