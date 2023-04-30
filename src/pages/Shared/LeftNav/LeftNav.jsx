import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './LeftNav.css'

const LeftNav = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
            .catch(error => console.error(error))
    }, [])


    return (
        <div>
            <h5>ALL Category</h5>
            <div>
                {
                    categories.map(category => <p
                        key={category.id}
                        className='all-category'
                    >
                        <Link to={`/category/${category.id}`} className='category-name text-secondary text-dark-hover fs-5 fw-semibold text-decoration-none'>{category.name}</Link>
                    </p>)
                }
            </div>
        </div>
    );
};

export default LeftNav;