import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4oootvq0n0601z4g53s377z/master',
  cache: new InMemoryCache()
})