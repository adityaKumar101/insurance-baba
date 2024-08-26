import React from 'react'
import ControlledCarousel from './components/CarouselSec'
import { Col, Container, Row } from 'react-bootstrap'

const Home = () => {
  return (
    <Container>
      <Row>
        <Col md={4}></Col>
        <Col md={4}></Col>

        <Col md={4}>
          <ControlledCarousel />
        </Col>

      </Row>
    </Container>
  )
}

export default Home