import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import React from 'react';


function App() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("purple");

const handleClick = () => {
  setCount((count) => count + 1);
};

const handleColorChange = () => {
  if(color === 'purple'){
    setColor('red')
  }
  if(color === 'red'){
    setColor('blue')
  }
}
  
  function refreshPage() {
    window.location.reload(false);
  }

  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home"> Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
<button onClick={() => window.location.reload(false)}>Refresh</button>
      <br />
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src = './public' />
        </a>
      </div>
      <h1>T0 + D0</h1>

      {/* Count cliicks */}
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          You Have {count} Task To Do
        </button>
        <Button onClick={handleClick}>Handle click function add</Button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p>
        The List Starts Here
      </p>
    </>
  )
}

export default App
