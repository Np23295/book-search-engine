import { gql } from '@apollo/client';

export const LOGIN = gql`
    mutation login($email: String!, $password: String!) {
        login(email:$email, password: $password) {
            token
            user {
                _id,
                username
            }
        }
    }
`;

export const ADD_USER = gql`
    mutation addUser($username: String!, $email: String!, $password: String!) {
        addUser(username: $username, email: $email, password: $password) {
        token
        user {
            _id
            } 
        }
    }
`;


export const DELETE_BOOK = gql`
    mutation removeBook($bookId: String!) {
        removeBook(bookId: $bookId) {
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


export const SAVE_BOOK = gql`
mutation saveBook($bookId: String!, $authors: [String]!, $description: String!, $title: String!, $image: String!, $link: String) {
    saveBook(bookId: $bookId, authors: $authors, description: $description, title: $title, image: $image, link: $link) {
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