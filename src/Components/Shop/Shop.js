import React from 'react';
import './Shop.css';
import {Button} from 'react-bootstrap';


const Shop = (props) => {
    const {name, price, img, By} = props.course;


    return (
        <div className="course-details">
            <div>
                <img src={img} alt="" />
            </div>
            <div className="course-p">
                <h4>{name}</h4>
                <br />
                <p>${price}</p>
                <p>By: {By}</p>
                <br />
                <Button variant="warning"
                    onClick={() => props.handleAddCourse(props.course)}
                >Enroll Now</Button>
            </div>
        </div>
    );
};

export default Shop;