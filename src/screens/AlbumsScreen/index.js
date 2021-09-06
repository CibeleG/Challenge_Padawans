import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Col, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import albumsLogo from '../../assets/albumsLogo.svg';
import './index.css';
import { albumsRoute } from '../../Api';

export function albumsTable(albums) {
    return(
      <>
          <Row className="col-line-top">
            <Col md='5'>
            {albums.title}
            </Col>
            <Col md='5'>
            {albums.userId}
            </Col>
            <Col md='2'>
            {albums.id}
            </Col>
          </Row>
      </>
    )
  };
function AlbumsScreen() {
    const [albums, setAlbums] = useState([]);

    useEffect(() => {
        axios.get(albumsRoute).then((response) => {
            setAlbums(response.data);
          });
      }, [albums]);

    const tableComponent = () => (
        <Row className="col-line-top">
            <Col md='5' className="center">
              Título
            </Col>
            <Col md='5' className="center">
              ID do Usuário
            </Col>
            <Col md='2' className="center">
              ID
            </Col>
          {albums.map((element) => albumsTable(element))}
        </Row>
      );
    return(
        <div className="d-flex justify-content-center">
            <Row className="background">
                    <Row className="header">
                        <Col md='1'><img src={albumsLogo} alt="albumsLogo" className="icon-albums" /></Col>
                        <Col md='11'><h1 className="albums">Álbuns</h1></Col>
                    </Row>  
                    {tableComponent()}
            </Row>
        </div>
    );
}

export default AlbumsScreen;