import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Button,} from 'reactstrap';
import { Link } from 'react-router-dom';



const MovieCard = (props) => {
    const { title, info, img, id} = props;
    return (
        <Card>
            <CardImg top width='100%' src={img} />
            <CardBody>
                <CardTitle>{title}</CardTitle>
                <CardText>{info}</CardText>
                <Button type='button' block={true} color='primary' tag={Link} to={`details/${id}`} >Detalles</Button>
            </CardBody>
            
        </Card>
    )
}

export default MovieCard;