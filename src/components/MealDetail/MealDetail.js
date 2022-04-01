import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';

const MealDetail = () => {
    const [mealDetail, setMealDetail] = useState({});
    const {id} = useParams();
    let navigate = useNavigate();

    useEffect(() => {
        const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setMealDetail(data.meals[0]));
    }, [id])
    return (
        <Container>
            <div className="row">
                <div className="col-md-6">
                    <img src={mealDetail.strMealThumb} width="100%" alt="" />
                </div>
                <div className="col-md-6">
                    <h2>{mealDetail.strMeal}</h2>
                    <p>{mealDetail.strInstructions}</p>
                    <a href={mealDetail.strYoutube} target="_blank">youtube</a> <br />
                    <button onClick={() => navigate('/')}>Back</button>
                </div>
            </div>
        </Container>
    );
};

export default MealDetail;