import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Meals = ({meal}) => {
    const {idMeal,strMeal, strInstructions, strMealThumb} = meal;
    return (
        <div className="col-md-4">
            <Card>
                <Card.Img variant="top" src={strMealThumb} />
                <Card.Body>
                    <Card.Title>{strMeal}</Card.Title>
                    <Card.Text>
                    {strInstructions.slice(0, 100)}
                    </Card.Text>
                    <Link to={`meal-details/${idMeal}`}>
                        <Button variant="primary">View Details</Button>
                    </Link>
                </Card.Body>
            </Card>
        </div>
        
    );
};

export default Meals;