import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";
import aboutimg from "../assets/drugedit.png";
import "../styles/About.css";
import {
  BsCaretRightFill /*BsCaretRight*/,
} from "@react-icons/all-files/bs/BsCaretRightFill";
import {
  /*BsCaretLeft ,*/ BsCaretLeftFill,
} from "@react-icons/all-files/bs/BsCaretLeftFill";
import SliderShow from "../components/SliderShow";
import { useState } from "react";
import PageNav from "../components/PageNav";

function About() {
  const [slide2, setslide2] = useState(false);
  function slideRight() {
    setslide2(true);
  }
  function slideLeft() {
    setslide2(false);
  }

  // let sliderD = "SliderData";
  // if (slide2 == true ){
  //     sliderD= "SliderData2";
  // }

  return (
    <div>
    <PageNav />
    <Container style={{ width: "3000px" }}>
      <Container>
        <Row>
          <Col>
            <h1 className="Header">Medical Rep</h1>
            <p className="Text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              gravida egestas purus, vestibulum faucibus mi luctus in. Vivamus
              gravida dictum aliquam.
              <br />
              Quisque aliquet nunc a metus rhoncus, et varius tortor sodales.
              Nam faucibus, ligula in lacinia dapibus, diam quam malesuada
              lorem,vel placerat turpis neque non augue. Nam faucibus, ligula in
              lacinia dapibus, diam quam malesuada lorem,vel placerat turpis
              neque non augue. Nam faucibus, ligula in lacinia dapibus,
            </p>
          </Col>

          <Col>
            <img src={aboutimg} className="aboutimg"></img>
          </Col>
        </Row>

        <SliderShow onSlide={slide2} />

        <Row className="arrows">
          <Col>
            {/* <BsCaretLeft size={50} style={{marginLeft:"95%"}} onClick={slideLeft}/> */}
            <BsCaretLeftFill
              size={50}
              style={{ marginLeft: "95%" }}
              onClick={slideLeft}
            />
          </Col>
          <Col>
            <BsCaretRightFill
              size={50}
              style={{ marginLeft: "%50" }}
              onClick={slideRight}
            />
            {/* <BsCaretRight size={50} style={{marginLeft:"%50"}} /> */}
          </Col>
        </Row>
      </Container>
    </Container>
    </div>
     );
}

export default About;
