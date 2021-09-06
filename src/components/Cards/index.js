import React from "react";
import { Container, Row } from "react-bootstrap";
import { Link } from 'react-router-dom';
import "./index.css";

function Card(props) {
    const { image, title } = props;
    return(
        <div>
            <Container>
                <Row className="cards mt-5">
                    <Link to={`/${title}`}>
                        <img
                        src={image}
                        className="image"
                        alt="Background"
                        />
                        <div className="filter">
                        <h2 className="title">{title.toUpperCase()}</h2>
                        </div>    
                    </Link>
                </Row>
            </Container> 
        </div>    
    );
}

export default Card;