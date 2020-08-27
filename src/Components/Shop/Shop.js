import React from 'react';
import './Shop.css';

const Shop = (props) => {
    const {name, price, img} = props.course;
    return (
        <div className="course-details">
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <h4 className="product-name">{name}</h4>
                <br />
                <p>${price}</p>
                <br />
                <button
                    className="main-button"
                    onClick={() => props.handleAddCourse(props.course)}
                >Enroll Now
                </button>
            </div>
        </div>
    );
};

export default Shop;