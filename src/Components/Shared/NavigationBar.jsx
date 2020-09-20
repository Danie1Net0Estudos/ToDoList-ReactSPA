import React, { Component } from 'react';

import { Container, Nav, Navbar } from 'react-bootstrap';

class NavigationBar extends Component {
  render() {
    return (
      <header>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="/tarefas">Lista de Tarefas</Navbar.Brand>
            <Nav className="ml-auto">
              <Nav.Link href="/tarefas">Tarefas</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </header>
    );
  }
}

export default NavigationBar;
