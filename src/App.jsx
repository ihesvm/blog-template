import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Alert, Card, Col, Container, Row } from 'react-bootstrap';
import Navbar from './components/Navbar';
import Body from './components/Body';
import './App.css';



function App() {
  return (
    <>
    <Navbar/>
    <Body/>
    </>
  );
}

export default App
