import React from 'react';

import { Link } from 'react-router-dom';

import Nav from 'react-bootstrap/Nav';

const Navigation = () => {
  return (
    <Nav>
      <Container>
        <Link className="navbar-brand" to="/">플리마켓</Link>
      </Container>
    </Nav>
  );
};

export default Navigation;