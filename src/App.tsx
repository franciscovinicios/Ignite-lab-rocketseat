import { ApolloProvider, gql, useQuery } from "@apollo/client"
import { client } from "./lib/apollo"
import { Event } from "./pages/Event"

import { BrowserRouter } from 'react-router-dom'
import { Router } from "./Router"



export function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Router/>
      </BrowserRouter>
    </ApolloProvider>
  )
}

