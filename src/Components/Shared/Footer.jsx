import React, { Component } from 'react';

import { Navbar } from "react-bootstrap";

class Footer extends Component {
  render() {
    return (
      <footer>
        <Navbar bg="dark" fixed="bottom" className="pt-1 pb-1">
          <Navbar.Brand className="text-white mx-auto p-0">
            ADS - Desenvolvimento Web 2020
          </Navbar.Brand>
        </Navbar>
      </footer>
    );
  }
}

export default Footer;
