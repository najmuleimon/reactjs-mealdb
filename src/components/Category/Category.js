import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Category = ({category}) => {
    const { strCategory, strCategoryThumb, strCategoryDescription} = category;
    return (
        <div className='col-md-4'>
            <Card>
                <Link to={strCategory}>
                    <Card.Img variant="top" src={strCategoryThumb} />
                </Link>
                <Card.Body>
                  <Card.Title>{strCategory}</Card.Title>
                  <Card.Text>
                    {strCategoryDescription.slice(0, 200)}
                  </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Category;