// import React, { Component } from 'react'
// import { gql, useQuery } from '@apollo/client';
// import { Query, Mutation, Subscription } from '@apollo/client/react/components'

// const query = gql`
//   {
//     books {
//       id
//       name
//       author {
//         id
//         name
//         books {
//           id
//         }
//       }
//     }
//   }
// `

// class GraphQL extends Component {
//   render() {
//     return (
//       <Query query={query}>
//         {({ loading, error, data }) => {
//           if (loading) return "Loading...";
//           if (error) return `Error! ${error.message}`;
//           console.log('data', data);

//           return (
//             <button>Get All Books</button>
//           )
//         }}
//       </Query>
//     )
//   }
// }

// export default GraphQL














import React, { Component } from 'react'
import { gql } from '@apollo/client';
import { graphql } from '@apollo/client/react/hoc';

class GraphQL extends Component {
  render() {
    console.log('this.props', this.props);
    return (
      // <Query query={query}>
      //   {({ loading, error, data }) => {
      //     if (loading) return "Loading...";
      //     if (error) return `Error! ${error.message}`;
      //     console.log('data', data);

      //     return (
      //       <button>Get All Books</button>
      //     )
      //   }}
      // </Query>

      <button>Get All Books</button>
    )
  }
}

const query = gql`
  {
    books {
      id
      name
      author {
        id
        name
        books {
          id
        }
      }
    }
  }
`

export default graphql(query)(GraphQL)













// import { gql } from '@apollo/client';
// import { graphql } from '@apollo/client/react/hoc';
// export default graphql(query)(GraphQL)