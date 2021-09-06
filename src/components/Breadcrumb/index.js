import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Return from '../../assets/return.svg';
import "./index.css";

function BreadCrumb() {
  const history = useHistory();
  const [notInHome, setNotInHome] = useState(document.location.pathname !== '/');
  history.listen((location, action) => {
    setNotInHome(location.pathname !== '/');
  });
  console.log(notInHome);
  return (
    <div className="bread">
        { notInHome ? (<Button variant="outline-secondary" href="/">
        <img
          src={Return}
          className="return"
          alt="return"
          />
          <h1 className="home">Home</h1>
        </Button>) : (
          <div/>
        )}
    </div>
  );
}

export default BreadCrumb;