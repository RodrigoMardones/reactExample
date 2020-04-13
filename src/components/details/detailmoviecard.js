import React from 'react';
import { Row, Col, Container, Card,CardBody,CardText,CardTitle,CardImg, Button } from 'reactstrap';
import { Link } from 'react-router-dom';



const DetailMovieCard = (props) => {
    let { Title, Poster, Released, Runtime, Genre, Director, Actors } = props.movie;

    return (
        <Container>
            <Row>
                <Col md={{ size: 6, offset: 3 }} >
                    <Card>
                        <CardImg top width='100%' src={Poster} />
                        <CardBody>
                            <CardTitle>{Title}</CardTitle>
                            <CardText>                                
                                lanzamiento: {Released}
                                <br />
                                Duración: {Runtime}
                                <br />
                                Género : {Genre}
                                <br />
                                Director: {Director}
                                <br />
                                Elenco: {Actors}
                            </CardText>
                            <Button type='button' color='success' tag={Link} to={`/`}>Volver</Button>
                        </CardBody>          
                    </Card>                 
                </Col>
            </Row>
        </Container>
    )
}
export default DetailMovieCard;