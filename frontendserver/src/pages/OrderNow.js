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

function OrderNow() {
  let { id } = useParams();
  let product = {id:2}.filter((drug) => drug.id == id);
  //change city select menu options
  const [selected, setselected] = useState();
  function changeoptions(event) {
    setselected(event.target.value);
  }
  const options = [
    {
      label: "Choose your country",
      value: "cyc",
      dis: "disabled",
      selected: "selected",
    },
    { label: "Egypt", value: "egypt" },
    { label: "Saudi Arabia", value: "saudi arabia" },
    { label: "Lebanon", value: "lebanon" },
    { label: "United Arab Emirates", value: "UAE" },
  ];
  const Egypt = [
    {
      label: "Choose your City",
      value: "cyc",
      dis: "disabled",
      selected: "selected",
    },
    { label: "Alexandria", value: "alex" },
    { label: "Cairo", value: "cairo" },
    { label: "Giza", value: "giza" },
  ];
  const SA = [
    {
      label: "Choose your City",
      value: "cyc",
      dis: "disabled",
      selected: "selected",
    },
    { label: "Jaddah", value: "jaddah" },
    { label: "Riyadh", value: "riyadh" },
    { label: "Madina", value: "madina" },
  ];
  const lebanon = [
    {
      label: "Choose your City",
      value: "cyc",
      dis: "disabled",
      selected: "selected",
    },
    { label: "Beirut", value: "beirut" },
    { label: "Tripoli", value: "tripoli" },
  ];
  const UAE = [
    {
      label: "Choose your City",
      value: "cyc",
      dis: "disabled",
      selected: "selected",
    },
    { label: "Dubai", value: "dubai" },
    { label: "Abu Dhabi", value: "abu dhabi" },
    { label: "Al Ain", value: "al ain" },
  ];

  let city = null;
  let opt = null;

  if (selected === "egypt") {
    city = Egypt;
  } else if (selected === "saudi arabia") {
    city = SA;
  } else if (selected === "lebanon") {
    city = lebanon;
  } else if (selected === "UAE") {
    city = UAE;
  } else {
    city = [
      {
        label: "Choose Your City",
        value: "cyc",
        dis: "disabled",
        selected: "selected",
      },
    ];
  }

  if (city) {
    opt = city.map((elm) => (
      <option value={elm.value} disabled={elm.dis} selected={elm.selected}>
        {elm.label}
      </option>
    ));
  }

  //change region select menu
  const [cityselected, setcityselected] = useState();

  function changeopt2(event) {
    setcityselected(event.target.value);
  }

  const alex = [
    {
      label: "Choose Your District",
      value: "cyd",
      dis: "disabled",
      selected: "selected",
    },
    { label: "Azareta", value: "azareta" },
    { label: "Camp Chezar", value: "camp chezar" },
    { label: "Cleopatra", value: "cleopatra" },
    { label: "Glim", value: "glim" },
    { label: "Moharam Bek", value: "moharam bek" },
    { label: "Roshdy", value: "roshdy" },
    { label: "Sporting", value: "sporting" },
    { label: "Miami", value: "miami" },
  ];
  const cairo = [
    {
      label: "Choose Your District",
      value: "cyd",
      dis: "disabled",
      selected: "selected",
    },
    { label: "Ain Shams", value: "ain shams" },
    { label: "El Rehab", value: "el rehab" },
    { label: "Fifth Settlement", value: "fifth settlement" },
    { label: "Garden City", value: "garden city" },
    { label: "Maadi", value: "maadi" },
    { label: "Zamalek", value: "zamalek" },
  ];
  const giza = [
    {
      label: "Choose Your District",
      value: "cyd",
      dis: "disabled",
      selected: "selected",
    },
    { label: "Agouza", value: "agouza" },
    { label: "Dokki", value: "dokki" },
    { label: "Mohandiseen", value: "mohandiseen" },
  ];
  const jaddah = [
    {
      label: "Choose Your District",
      value: "cyd",
      dis: "disabled",
      selected: "selected",
    },
    { label: "Al Safa", value: "al safa" },
    { label: "Azizia", value: "azizia" },
    { label: "Abhar", value: "abhar" },
    { label: "Bryman", value: "bryman" },
    { label: "Dahaban", value: "dahaban" },
    { label: "Tiba", value: "tiba" },
    { label: "Baghdadi", value: "baghdadi" },
  ];
  const riyadh = [
    {
      label: "Choose Your District",
      value: "cyd",
      dis: "disabled",
      selected: "selected",
    },
    { label: "Jarir", value: "jarir" },
    { label: "Al Rabwah", value: "al rabwah" },
    { label: "Al Zahra", value: "al zahra" },
    { label: "Al Safa", value: "al safa" },
    { label: "Al Mataz", value: "al mataz" },
  ];
  const madina = [
    {
      label: "Choose Your District",
      value: "cyd",
      dis: "disabled",
      selected: "selected",
    },
    { label: "Abyar Ali", value: "abyar ali" },
    { label: "Qaba", value: "qaba" },
    { label: "El Saha", value: "el saha" },
    { label: "Ennasr", value: "ennasr" },
    { label: "Wadi Ranuna", value: "wadi ranuna" },
    { label: "El Manshiyya", value: "el manshiyya" },
  ];
  const beirut = [
    {
      label: "Choose Your District",
      value: "cyd",
      dis: "disabled",
      selected: "selected",
    },
    { label: "Nejmeh", value: "nejmeh" },
    { label: "Majidieh", value: "majidieh" },
    { label: "Marfaa", value: "marfaa" },
    { label: "Mina EL Hosn", value: "mina el hosn" },
    { label: "Qantari", value: "qantari" },
    { label: "Serail", value: "serail" },
    { label: "Bachoura", value: "bachoura" },
  ];
  const tripoli = [
    {
      label: "Choose Your District",
      value: "cyd",
      dis: "disabled",
      selected: "selected",
    },
    { label: "Tripoli", value: "tripoli" },
    { label: "Mina", value: "mina" },
    { label: "Qalamoun", value: "qalamoun" },
  ];
  const dubai = [
    {
      label: "Choose Your District",
      value: "cyd",
      dis: "disabled",
      selected: "selected",
    },
    { label: "Al Bastakiya", value: "al bastakiya" },
    { label: "Al Karama", value: "al karama" },
    { label: "Bur Dubai", value: "bur dubai" },
    { label: "Business Bay", value: "business bay" },
    { label: "Dubai Marina", value: "dubai marina" },
  ];
  const abudhabi = [
    {
      label: "Choose Your District",
      value: "cyd",
      dis: "disabled",
      selected: "selected",
    },
    { label: "Madinet Zayed", value: "madinat zayed" },
    { label: "Al Wahda", value: "al wahda" },
    { label: "Khalidiya", value: "khalidiya" },
    { label: "Al Muroor", value: "al muroor" },
  ];
  const alAin = [
    {
      label: "Choose Your District",
      value: "cyd",
      dis: "disabled",
      selected: "selected",
    },
    { label: "Al Bateen", value: "al bateen" },
    { label: "Al Foah", value: "al foah" },
    { label: "Magar Al Dhabi", value: "magar al dhabi" },
    { label: "Saniya", value: "saniya" },
    { label: "Zakhir", value: "zakhir" },
  ];
  let region = null;
  let opt2 = null;
  if (selected === "egypt") {
    if (cityselected === "alex") {
      region = alex;
    } else if (cityselected === "cairo") {
      region = cairo;
    } else if (cityselected === "giza") {
      region = giza;
    } else {
      region = [
        {
          label: "Choose Your District",
          value: "cyd",
          dis: "disabled",
          selected: "selected",
        },
      ];
    }
  } else if (selected === "saudi arabia") {
    if (cityselected === "jaddah") {
      region = jaddah;
    } else if (cityselected === "riyadh") {
      region = riyadh;
    } else if (cityselected === "madina") {
      region = madina;
    } else {
      region = [
        {
          label: "Choose Your District",
          value: "cyd",
          dis: "disabled",
          selected: "selected",
        },
      ];
    }
  } else if (selected === "lebanon") {
    if (cityselected === "beirut") {
      region = beirut;
    } else if (cityselected === "tripoli") {
      region = tripoli;
    } else {
      region = [
        {
          label: "Choose Your District",
          value: "cyd",
          dis: "disabled",
          selected: "selected",
        },
      ];
    }
  } else if (selected === "UAE") {
    if (cityselected === "dubai") {
      region = dubai;
    } else if (cityselected === "abu dhabi") {
      region = abudhabi;
    } else if (cityselected === "al ain") {
      region = alAin;
    } else {
      region = [
        {
          label: "Choose Your District",
          value: "cyd",
          dis: "disabled",
          selected: "selected",
        },
      ];
    }
  } else {
    region = [
      {
        label: "Choose Your District",
        value: "cyd",
        dis: "disabled",
        selected: "selected",
      },
    ];
  }

  if (region) {
    opt2 = region.map((elem) => (
      <option value={elem.value} disabled={elem.dis} selected={elem.selected}>
        {elem.label}
      </option>
    ));
  }

  const [quantity, setquant] = useState(1);
  function incQ() {
    setquant((prevCount) => prevCount + 1);
  }
  function decQ() {
    if (quantity != 1) setquant((prevCount) => prevCount - 1);
  }
  const [ordered, setordered] = useState(false);
  const [showform, setshowform] = useState(true);
  //input display
  let inputName = useRef();
  let inputEmail = useRef();
  let inputNumber = useRef();
  let inputCountry = useRef();
  let inputCity = useRef();
  let inputRegion = useRef();
  let inputPay = useRef();
  function Submittt(event) {
    setshowform(false);
    setordered(true);
    event.preventDefault();
    let nameentered = inputName.current.value;
    let emailentered = inputEmail.current.value;
    let numberentered = inputNumber.current.value;
    let countryentered = inputCountry.current.value;
    let cityentered = inputCity.current.value;
    let regionentered = inputRegion.current.value;
    let paymententered = inputPay.current.value;
    console.log(quantity);
    console.log(nameentered);
    console.log(emailentered);
    console.log(numberentered);
    console.log(countryentered);
    console.log(cityentered);
    console.log(regionentered);
    console.log(paymententered);
  }
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
        <form onSubmit={Submittt}>
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
export default OrderNow;
