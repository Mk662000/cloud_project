import React, { useRef, useEffect, useState, useContext } from "react";
import pass from "../assets/pass.png";
import email from "../assets/email.jpg";
import logo from "../assets/Logo.png";
import conpass from "../assets/conpass.png";
import profile from "../assets/profile.png";
import location from "../assets/location.png";
import register from "../App.css";
import { useNavigate,NavLink } from "react-router-dom";
import axios from "../api/axios";
import {   useCookies } from 'react-cookie';
const REGISTER_URL = "/accounts/register/";

function Register() {
  // const [values, setValues] = useState({
  //     fullname: "",
  //     email: "",
  //     password: "",
  //     confirm: "",

  // });
  // const handlechanage=(event)=>
  // {setValues({
  //     values,[event.target.name]:event.target.value,
  // })}
  // const [errors, setErrors] = useState({});
  // const handleformsubmit = (event) => {
  //     setErrors(Validation(values));
  // }
  const navigate = useNavigate();

  const [cookies] = useCookies(['token']);

    const userRef = useRef();
    const errRef  = useRef();

    const [name, setName ] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail ] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");

    const [errMsg, setErrMsg] = useState("");
    const [success, setSuccess] = useState(false);
    const [token, setToken] = useState(false);

    useEffect(async ()  => {
      setToken(cookies.token);
    }, []);

    useEffect(() => {
      userRef.current.focus();
    }, []);

    useEffect(() => {
      setErrMsg('');
    }, [name, username, password, email, phone, address]);

    const handleSubmit = async (e) => {
      e.preventDefault();
      console.log(name, username, password, email, phone, address);

      try {
        const response = await axios.post(REGISTER_URL, 
          JSON.stringify({
            username:username,
            password:password,
            name:name,
            email:email,
            phone:phone,
            address:address

          }),
          {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: false
          }
        );

        const status = response?.data?.status;
        if( status && status === "success") {
          setSuccess(true);
          navigate("/login");
        }else{
          if(response?.data?.response?.msg){
            setErrMsg(response?.data?.response?.msg);
          }else{
            setErrMsg("something went wrong");
          }
        }


      } catch (err) {

        
        if(!err.response){
          setErrMsg("Registration failed or server error");
        }else if( err.response?.status === 400) {
          setErrMsg("something went wrong");
        }else if( err.response?.status === 401){
          setErrMsg("Unauthorized");
        } else {
          setErrMsg("registration failed failed");
        }

        errRef.current.focus();


      }



    }



    return (
      ( token != "undefined" && token) || success ? (
        <div>
          <script >
            {window.location = "/home"}
          </script>
        </div>
        ) : (
    <div className="main">
      <div className="sub-main">
        <form onSubmit={handleSubmit}>
          <div className="test" style={{ height: "710px", marginTop: "-50px" }}>
            <img src={logo} style={{ width: "30%" }} />
            <h1 style={{ color: "#ffffff" }}>Register</h1>
            <div>

              <input
                type="name"
                placeholder="name"
                className="name"
                name="name"
                ref={userRef} 
                onChange={(e) => setName(e.target.value) }
                value={name}
                //  value={values.name}
                //  onChange={handlechanage}
              />
              </div>
              <div className="second-input">
              
              <input
                type="text"
                placeholder="User Name"
                className="name"
                name="fullname"
                ref={userRef} 
                onChange={(e) => setUsername(e.target.value) }
                value={username}
                // value={values.fullname}
                // onChange={handlechanage}
              />
              {/* {errors.fullname && <p className='error'>{errors.fullname}</p>} */}
            </div>
            <div className="second-input">

              <input
                type="email"
                placeholder="Email address"
                className="name"
                name="email"
                ref={userRef} 
                onChange={(e) => setEmail(e.target.value) }
                value={email}
                //  value={values.email}
                //  onChange={handlechanage}
              />

              {/* {errors.email && <p className='error'>{errors.email}</p>} */}
            </div>
            <div className="second-input">
              <input
                type="password"
                placeholder="Password"
                className="name"
                name="password"
                ref={userRef} 
                onChange={(e) => setPassword(e.target.value) }
                value={password}
                //  value={values.password}
                //  onChange={handlechanage}
              />
              {/* {errors.password && <p className='error'>{errors.password}</p>} */}
            </div>
            <div className="second-input">
              <input
                type="numbers"
                placeholder="Telephone number"
                className="name"
                ref={userRef} 
                onChange={(e) => setPhone(e.target.value) }
                value={phone}
              />
            </div>
            <div className="second-input">
              <input 
                type="longtext" 
                placeholder="Location" 
                className="name" 
                ref={userRef} 
                onChange={(e) => setAddress(e.target.value) }
                value={address}
                />
            </div>
            <div className="login-button">
              <button style={{ textDecoration: "none", color: "white" }} >Register</button>
            </div>

            <p className="link">
              <a href="#">already have an acount?</a>
              <NavLink to="/login">Login</NavLink>
            </p>
          </div>
        </form>
      </div>
    </div>
    )
);
}

export default Register ;
