import React from "react";
import { Container } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";
import "../styles/OrderNow.css";
import { useState } from "react";
import { AiOutlineCheckCircle } from "@react-icons/all-files/ai/AiOutlineCheckCircle";
import { DUMMY_DATA } from "./Categories";
import { Link, useParams } from "react-router-dom";
import { useRef } from "react";
import PageNav from "../components/PageNav";

function Cart() {
  let { id } = useParams();

  const ordered = false;
  const showform = false;

  const saved = localStorage.getItem("name");


  
  return (
    <div className="order mt-3">
      <PageNav />

      {ordered ? (
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ width: "100%", height: "75vh" }}
        >
          <div className="shadow-lg p-4">
            <AiOutlineCheckCircle
              size={100}
              style={{ width: "100%", color: "green" }}
            />
            <h2 style={{ textAlign: "center" }}>Thank You</h2>
            <h3>Order sent successfully</h3>
            <br />
            <Link to="/Categories">
              <button
                className="btn btn-primary"
                style={{ backgroundColor: "#0E3E9E" }}
              >
                Go Back{" "}
              </button>
            </Link>
          </div>
        </div>
      ) : null}
      {showform ? (
        <form >
          <Container>
            <Row>
              <Col sm={8} className="left">
                <h2>{product[0].title}</h2>
                <div className="form-group form-row col-sm-5">
                  <label className="col m-1 pt-1">Quantity</label>
                  {/* <input id='quantity' className='form-control col' type='number' placeholder='1' min='1' /> */}
                  <div className="input" style={{ display: "flex" }}>
                    <button className="btn btn-sm" type="button" onClick={incQ}>
                      <h4>&#43;</h4>
                    </button>
                    <h4 className="m-2">{quantity}</h4>
                    <button className="btn btn-sm" type="button" onClick={decQ}>
                      <h4>&#8722;</h4>
                    </button>
                  </div>
                </div>

                <h1 className="contactinfo">CONTACT INFO</h1>
                <div className="form-group col-sm-6 mt-3">
                  <label for="name">Name</label>
                  <input
                    id="name"
                    className="input form-control"
                    type="text"
                    required
                    ref={inputName}
                  />
                </div>
                <div className="form-group col-sm-6">
                  <label for="email">E-mail</label>
                  <input
                    id="email"
                    className="input form-control"
                    type="email"
                    required
                    ref={inputEmail}
                  />
                  <br />
                </div>
                <div className="form-group col-sm-6">
                  <label for="num">Phone Number</label>
                  <input
                    id="num"
                    className="input form-control"
                    type="tel"
                    required
                    ref={inputNumber}
                  />
                  <br />
                </div>
              </Col>
              <Col sm={4}>
                <img
                  src={product[0].image}
                  alt=""
                  className="mx-auto rightimage"
                  width="100%"
                />
              </Col>
            </Row>
            <h1 style={{ textDecoration: "underline #639DC3 10px" }}>
              LOCATION INFO
            </h1>
            <Row>
              <Col>
                <div className="form-group m-2">
                  <label for="country">Country</label>
                  <select
                    id="country"
                    className="input form-control"
                    onChange={changeoptions}
                    ref={inputCountry}
                  >
                    {options.map((option) => (
                      <option
                        value={option.value}
                        disabled={option.dis}
                        selected={option.selected}
                      >
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
              </Col>
              <Col>
                <div className="form-group m-2">
                  <label for="city">City</label>
                  <select
                    id="city"
                    className="input form-control"
                    onChange={changeopt2}
                    ref={inputCity}
                  >
                    {opt}
                  </select>
                </div>
              </Col>
              <Col>
                <div className="form-group m-2">
                  <label for="district">District</label>
                  <select
                    id="district"
                    className="input form-control"
                    ref={inputRegion}
                  >
                    {opt2}
                  </select>
                </div>
              </Col>
            </Row>
            <h1 style={{ textDecoration: "underline #639DC3 10px" }}>
              PAYMENT METHOD{" "}
            </h1>
            <Row>
              <Col>
                <div className="form-check m-2">
                  <input
                    className="form-check-input"
                    id="cash"
                    type="radio"
                    name="payment"
                    value="cash"
                    checked
                    ref={inputPay}
                  />
                  <label className="form-check-label" for="cash">
                    Cash
                  </label>
                </div>
              </Col>
              <Col>
                <div className="form-check m-2">
                  <input
                    className="form-check-input"
                    id="credit"
                    type="radio"
                    name="payment"
                    value="credit card"
                    ref={inputPay}
                  />
                  <label className="form-check-label" for="credit">
                    Credit Card
                  </label>
                </div>
              </Col>
              <Col>
                <div className="form-check m-2">
                  <input
                    className="form-check-input"
                    id="installment"
                    type="radio"
                    name="payment"
                    value="installment"
                    ref={inputPay}
                  />
                  <label className="form-check-label" for="installment">
                    Installment
                  </label>
                </div>
              </Col>
            </Row>
            <div className="row">
              <div className="col">
                <button
                  className="btn btn-primary m-4 btn-lg"
                  style={{ backgroundColor: "#0E3E9E" }}
                >
                  COMFIRM ORDER
                </button>
              </div>
            </div>
          </Container>
        </form>
      ) : null}
    </div>
  );
}
export default Cart;
