import React from 'react';
import { Container, Row, Col} from 'reactstrap'


const NotFound = () => {
    return (
        <Container>
            <Row>
                <Col md={{size: 6, offset: 3}}>
                    <h1>nothing to do here ! 404</h1>
                    <h3>La pag no existe</h3>
                </Col>
            </Row>
        </Container>
    )
}

export default NotFound;