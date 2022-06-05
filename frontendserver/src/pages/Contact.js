import React from "react";
import "../styles/Contact.css";
import { useRef } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineCheckCircle } from "@react-icons/all-files/ai/AiOutlineCheckCircle";
import PageNav from "../components/PageNav";

function Contact() {
  let nameInput = useRef();
  let mailInput = useRef();
  let textInput = useRef();

  const [form, setform] = useState(true);
  const [sent, setsent] = useState(false);
  function submitHandler(event) {
    event.preventDefault();
    let nameEntered = nameInput.current.value;
    let mailEntered = mailInput.current.value;
    let textEntered = textInput.current.value;
    console.log(nameEntered);
    console.log(mailEntered);
    console.log(textEntered);
    setform(false);
    setsent(true);
  }

  return (
    <div>
      <PageNav />
      {sent ? (
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
            <h3>Message sent ;)</h3>
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
      {form ? (
        <section className="contact">
          <form onSubmit={submitHandler} className="container">
            <div className="row">
              <div className="leftSide col">
                <h1>CONTACT INFORMATION</h1>
                Full Name
                <input
                  type="text"
                  className="d-block form-control col-6"
                  aria-label="Large"
                  required
                  placeholder="Full Name"
                  ref={nameInput}
                />
                Email
                <input
                  type="text"
                  className="d-block form-control col-6"
                  aria-label="Large"
                  required
                  placeholder="email@example.com"
                  ref={mailInput}
                />
                Phone
                <input
                  type="tel"
                  className="d-block form-control col-6"
                  aria-label="Large"
                  required
                  placeholder="+2012*******"
                  ref={mailInput}
                />
              </div>
            </div>
            <div className="row">
              <div className="rightSide col">
                <h1>REACH US</h1>
                <br></br>
                <textarea
                  className="d-block form-control col-8"
                  required
                  placeholder="your msg"
                  ref={textInput}
                />
                <button
                  className="btn btn-lg btn-primary col-2.5"
                  style={{ backgroundColor: "#0E3E9E" }}
                >
                  SEND MESSAGE
                </button>
              </div>
            </div>
          </form>
        </section>
      ) : null}
    </div>
  );
}
export default Contact;
