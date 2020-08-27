import React ,{ useState } from 'react';
import './Course.css';
import { Container, Row, Col } from 'react-bootstrap';
import Fakedata from '../FakeData/Fakedata';
import Cart from '../Cart/Cart';
import Shop from '../Shop/Shop';

const Course = () => {
    const first12 = Fakedata.slice(0,12);
    const [course, setCourse] = useState(first12);

    const [cart, setCart] = useState([])
    const handleAddCourse = (course) => {
        const newCart = [...cart, course];
        setCart(newCart);
    }

    return (
        <div>
            <Container>
                <Row>
                    <Col xs={12} md={8} className="course-container">
                        {
                            course.map (course => 
                            <Shop
                             key={course.id}
                             handleAddCourse = { handleAddCourse }
                             course= {course}
                            ></Shop>)
                        }
                    </Col>
                    <Col xs={6} md={4}>
                        <Cart cart={cart}></Cart>
                    </Col>
                </Row>
            </Container>    
        </div>
    );
};

export default Course;