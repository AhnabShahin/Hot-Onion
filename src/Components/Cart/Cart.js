import React from 'react';
import { Col, Card, Button } from 'react-bootstrap';

const Cart = (props) => {
   const {img,title,description,catagories}=props.cart;
    return (
        <Col md={4}>
            <Card >
                <Card.Img variant="top" src={img}/>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {catagories.toUpperCase()}
                    </Card.Text>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Cart;