import React from 'react';

import './App.css';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  useMutation,
  gql
} from "@apollo/client";

const client = new ApolloClient({
  uri: "http://192.168.0.185:3000/graphql",
  cache: new InMemoryCache()
});


function ExchangeRates() {
  const [updatetodo] = useMutation(gql`
     mutation{
      addAuthor(name:"Sagar", age:25){
        name
        age
      }
    }
  `);



  return (
    <button onClick={()=>{updatetodo()}}>click me</button>
  )
}

function App() {
  return (
    <ApolloProvider client={client}>
      <ExchangeRates />
    </ApolloProvider>
 
  );
}

export default App;
