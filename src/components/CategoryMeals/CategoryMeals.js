import React, { useEffect, useState } from 'react';
import { Card, Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const CategoryMeals = () => {
    const [categoryMeal, setCategoryMeal] = useState([]);
    const {category} = useParams();

    useEffect(() => {
        const url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setCategoryMeal(data.meals));
    }, [category])
    return (
        <Container>
            <div className="row">
                {
                    categoryMeal.map(meal => <div key={meal.idMeal} className='col-md-4'>
                        <Card>
                        <Card.Img variant="top" src={meal.strMealThumb} />
                        <Card.Body>
                        <Card.Title>{meal.strMeal}</Card.Title>
                        </Card.Body>
                    </Card>
                    </div>)
                }
            </div>
        </Container>
    );
};

export default CategoryMeals;