import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Col, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import todosLogo from '../../assets/todosLogo.svg';
import done from '../../assets/done.svg';
import onGoing from '../../assets/onGoing.svg';
import './index.css';
import { todosRoute } from '../../Api';

export function todosTable(todos) {
    return(
      <>
          <Row className="col-line-top">
            <Col md='4'>
            {todos.title}
            </Col>
            <Col md='3'>
            {todos.userId}
            </Col>
            <Col md='2'>
            {todos.id}
            </Col>
            <Col md='3'> 
            {!todos.completed ? (<img src={onGoing} alt="onGoing" className="icon" />) : (<img src={done} alt="done" className="icon" />)}
            </Col>
          </Row>
      </>
    )
  };
function ToDosScreen() {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        axios.get(todosRoute).then((response) => {
            setTodos(response.data);
          });
      }, [todos]);

    const tableComponent = () => (
        <Row className="col-line-top">
            <Col md='4' className="center">
              Título
            </Col>
            <Col md='3' className="center">
              ID do Usuário
            </Col>
            <Col md='2' className="center">
              ID
            </Col>
            <Col md='3' className="center"> 
              Concluído
            </Col>
          {todos.map((element) => todosTable(element))}
        </Row>
      );
    return(
        <div className="d-flex justify-content-center">
            <Row className="background">
                    <Row className="header">
                        <Col md='1'><img src={todosLogo} alt="todosLogo" className="icon-todos" /></Col>
                        <Col md='11'><h1 className="todos">To-Dos</h1></Col>
                    </Row>  
                    {tableComponent()}
            </Row>
        </div>
    );
}

export default ToDosScreen;