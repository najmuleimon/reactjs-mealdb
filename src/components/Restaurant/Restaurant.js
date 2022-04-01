import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Category from '../Category/Category';

const Restaurant = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const url = 'https://www.themealdb.com/api/json/v1/1/categories.php';
        fetch(url)
        .then(res => res.json())
        .then(data => setCategories(data.categories))
    }, [])
    return (
        <div>
            <Container>
                <div className="row">
                {
                    categories.map(category => <Category key={category.idCategory} category={category} />)
                }
                </div>
            </Container>
        </div>
    );
};

export default Restaurant;