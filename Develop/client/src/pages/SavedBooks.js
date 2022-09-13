import { useMutation, useQuery } from '@apollo/client';
import React from 'react';
import { Jumbotron, Container, CardColumns, Card, Button } from 'react-bootstrap';

import Auth from '../utils/auth';
import { DELETE_BOOK } from '../utils/mutation';
import { QUERY_ME } from '../utils/queries';



const SavedBooks = () => {
  const { loading, error, data } = useQuery(QUERY_ME);
  const [deleteBook] = useMutation(DELETE_BOOK);

  // create function that accepts the book's mongo _id value as param and deletes the book from the database
  const handleDeleteBook = async (bookId) => {
    try {
      console.log("Handling event ", bookId);
      const {data, error} = await deleteBook({variables: { bookId: bookId }});
      // check for errors
      if (error) {
        throw new Error('something went wrong!');
      }

      this.data = data.removeBook;
      // const response = await deleteBook(bookId, token);
      // const {data, error } = deleteBook()

      // if (!response.ok) {
      //   throw new Error('something went wrong!');
      // }

      // const updatedUser = await response.json();
      // setUserData(updatedUser);
      // // upon success, remove book's id from localStorage
      // removeBookId(bookId);
    } catch (err) {
      console.error(err);
    }
  };

  // if data isn't here yet, say so
  if (loading) {
    return <h2>LOADING...</h2>;
  }

  return (
    <>
      <Jumbotron fluid className='text-light bg-dark'>
        <Container>
          <h1>Viewing saved books!</h1>
        </Container>
      </Jumbotron>
      <Container>
        <h2>
          {data?.me.savedBooks.length
            ? `Viewing ${data?.me.savedBooks.length} saved ${data?.me.savedBooks.length === 1 ? 'book' : 'books'}:`
            : 'You have no saved books!'}
        </h2>
        <CardColumns>
          {data?.me.savedBooks.map((book) => {
            return (
              <Card key={book.bookId} border='dark'>
                {book.image ? <Card.Img src={book.image} alt={`The cover for ${book.title}`} variant='top' /> : null}
                <Card.Body>
                  <Card.Title>{book.title} {book.bookId}</Card.Title>
                  <p className='small'>Authors: {book.authors}</p>
                  <Card.Text>{book.description}</Card.Text>
                  <Button className='btn-block btn-danger' onClick={() => handleDeleteBook(book.bookId)}>
                    Delete this Book!
                  </Button>
                </Card.Body>
              </Card>
            );
          })}
        </CardColumns>
      </Container>
    </>
  );
};

export default SavedBooks;
