import React from 'react';
import MovieCard from '../movieCards/moviecard';
import { Row, Col, Container } from 'reactstrap';

const Movielist = (props) => {
    const {list} = props;

    const movies = list.map((movie) => {
        return (
          <Col md='4' xs='6' xl='3' style={{padding: '5px'}} key={movie.imdbID}>
            <MovieCard  title={movie.Title} info={movie.Year} img={movie.Poster} id={movie.imdbID}/>
          </Col>
        )
    })
    return (
        <Container>
            <Row>
                {[...movies]}
            </Row>
        </Container>
    )
}


export default Movielist;