// rate beer end point: https://api.ratebeer.com/v1/api/graphql

// sample query using graphQL
// query{
//    beerSearch(query:"floyds"){items{
//     name,
//     id,
//     abv,
//     description,
//     ibu,
//     imageUrl
//   }
  
//   }
//   }
  
  
import gql from 'graphql-tag' // start of a simple query

const testQuery = gql`
  {
    beer(id: 3) {
      name
    }
  }
`
const topBeersQuery = gql`
  {
    topBeers {
      items {
        name
      }
    }
  }
`
const ratebeerapi = process.env.REACT_APP_RATEBEERAPI
// const client = new ApolloClient({
//   uri: 'https://api.ratebeer.com/v1/api/graphql',
//   headers: {
//     'content-type': 'application/json',
//     accept: 'application/json',
//     'x-api-key': ratebeerapi
//   }
// })

client
  .query({
    query: topBeersQuery
  })
  .then(res => console.log(res, 'test query for single beer-----------'))