import React from 'react'
import ControlledCarousel from './components/CarouselSec'
import { Button, Col, Container, Image, Row } from 'react-bootstrap'
import { GoArrowRight } from "react-icons/go";
import ProductSec from './ProductSec';
import ContactForm from './ContactForm';
import { MdChecklist } from 'react-icons/md';
import { AiFillThunderbolt } from 'react-icons/ai';
import ReviewSection from './components/ReviewSection';
import Articles from './components/Articles';
const Home = () => {
  return (
    <Container className='header-sec d-grid gap-3'>
      <div>
        <Row>
          <Col md={4}>
            <article class="txt-part mobilehide">
              <h1>Let's find you<br /> the <span>Best Insurance</span></h1>
              <div class="header-part1">
                <span class="lowest-price"><MdChecklist className='icon-header' /> 50+ insurers with one<br class="hide-small" /> of the best prices</span>
                <span class="hassle-free"><AiFillThunderbolt className='icon-header' />Quick, easy &amp;<br /> hassle free</span>
              </div>
            </article>
            <Button className='rounded-pill getQuotedBtn'>Get Quoted <GoArrowRight /></Button> </Col>
          <Col md={4}></Col>

          <Col md={4}>
            <ControlledCarousel />
          </Col>

        </Row>
      </div>
      <ProductSec />
      <ReviewSection />
      <Articles />
      <ContactForm />
    </Container >
  )
}

export default Home