import { gql } from '@apollo/client';

export const QUERY_ME = gql`
  query me {
    me {
        username 
        savedBooks {
          _id
          title
          authors
          description
          title
          image
          link
          bookId
        }
        bookCount
      }
  }
`;