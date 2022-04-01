import { Button } from 'bootstrap';
import React, { useEffect, useState } from 'react';
import { Container, FormControl, InputGroup } from 'react-bootstrap';
import Meals from '../Meals/Meals';

const Home = () => {
    const [searchText, setSearchText] = useState('');
    const [meals, setMeals] = useState([]);

    useEffect(() => {
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setMeals(data.meals));
    }, [searchText]);

    const searchMeal = e => {
        setSearchText(e.target.value);
    }
    return (
        <div>
            <Container>
                <InputGroup className="mt-5">
                    <FormControl onChange={searchMeal} placeholder="Search Food" aria-describedby="basic-addon2"/>
                    {/* <Button variant="outline-secondary" id="button-addon2">search</Button> */}
                </InputGroup>
                <div className="row">
                    {
                        meals.map(meal => <Meals key={meal.idMeal} meal={meal}></Meals>)
                    }
                </div>
            </Container>
        </div>
    );
};

export default Home;