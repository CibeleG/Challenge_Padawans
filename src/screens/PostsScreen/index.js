import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Col, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import postsLogo from '../../assets/postsLogo.svg';
import './index.css';
import { postsRoute } from '../../Api';

export function postsTable(posts) {
  return(
    <>
        <Row className="col-line-top">
          <Col md='4'>
          {posts.title}
          </Col>
          <Col md='4'>
          {posts.body}
          </Col>
          <Col md='2'>
          {posts.userId}
          </Col>
          <Col md='2'> 
          {posts.id}
          </Col>
        </Row>
    </>
  )
};

function PostsScreen() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get(postsRoute).then((response) => {
            setPosts(response.data);
          });
      }, [posts]);

    const tableComponent = () => (
        <Row className="col-line-top">
            <Col md='4' className="center">
              Título
            </Col>
            <Col md='4' className="center">
              Corpo
            </Col>
            <Col md='2' className="center">
              ID do Usuário
            </Col>
            <Col md='2' className="center"> 
              ID
            </Col>
          {posts.map((element) => postsTable(element))}
        </Row>
      );
    return(
        <div className="d-flex justify-content-center">
            <Row className="background">
                    <Row className="header">
                        <Col md='1'><img src={postsLogo} alt="postsLogo" className="icon-posts" /></Col>
                        <Col md='11'><h1 className="posts">Postagens</h1></Col>
                    </Row>  
                    {tableComponent()}
            </Row>
        </div>
    );
}

export default PostsScreen;