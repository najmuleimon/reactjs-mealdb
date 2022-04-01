import React from 'react';
import { Card } from 'react-bootstrap';
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
                    {/* <Button variant="primary">Go somewhere</Button> */}
                    <Link to={`meal-details/${idMeal}`}>View Details</Link>
                </Card.Body>
            </Card>
        </div>
        
    );
};

export default Meals;