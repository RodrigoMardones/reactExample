import React, { useState } from 'react';
import { Container, Row, Col, Input, Form, FormGroup, Label, Button} from 'reactstrap';
import axios from 'axios';
const apikey = 'ae63dfca';


const Finder = (props) => {
    let [inputMovie, inputMovieSet] = useState('');
    const { handleSearch } = props;

    const handleInput = (e) => {
        inputMovieSet(inputMovie = e.target.value);
    }

    const handleClick = async (e) => {
        e.preventDefault();

        const response = await axios({
            url: `http://www.omdbapi.com/`,
            method: 'GET',
            params : {
                apiKey : apikey,
                s : inputMovie
            }
        });
        handleSearch(response.data.Search || []);
    }
    return (
        <Container style={{padding: '50px'}}>
            <Row>
                <Col md={{ size: 4, offset: 4  }} >
                    <Form onSubmit={handleClick}>
                        <FormGroup>
                            <Label for='finderMovie'>Pelicula</Label>
                            <Input type='text' name='finderMovie' id='finderMovie' placeholder='Ej: wall-e' onChange={handleInput} ></Input>
                        </FormGroup>
                        <Button color='success' type='submit' >Buscar</Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}


export default Finder;