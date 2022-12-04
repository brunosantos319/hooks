import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client'

const link = new HttpLink({
    uri: 'https://api.climatempo.io/v1/product/portal',
})

export const APIportais = new ApolloClient({
    link: link,
    cache: new InMemoryCache(),
})
