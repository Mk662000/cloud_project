import "../App.css";
import { Hidden } from "@material-ui/core";
import React, { useRef,useState, useContext, useEffect } from "react";
import { useCookies } from 'react-cookie';
import email from "../assets/pass.png";
import pass from "../assets/email.jpg";
import logo from "../assets/Logo.png";
import {useNavigate, NavLink } from "react-router-dom";
import axios from "../api/axios";
const LOGIN_URL = "/accounts/login/";

// import "./Yarab.css";
function Login() {

    const navigate = useNavigate();

    const [cookies, setCookie , getCookie] = useCookies(['accessToken', 'name', 'username', 'email', 'phone', 'address']);

    const userRef = useRef();
    const errRef  = useRef();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errMsg, setErrMsg] = useState("");
    const [success, setSuccess] = useState(false);
    const [token, setToken] = useState(false);
  

    // check if user is logged in
    useEffect(async ()  => {
      setToken(cookies.token);
    }, []);


    useEffect(() => {
      userRef.current.focus();
    }, []);

    useEffect(() => {
      setErrMsg('');
    }, [username, password]);

    const handleSubmit = async (e) => {
      e.preventDefault();
      console.log(username, password);

      try {
        const response = await axios.post(LOGIN_URL, 
          JSON.stringify({username:username,password:password}),
          {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: false
          }
        );

        const token = response?.data?.token;
        const Dname = response?.data?.user_info?.name; 
        const Dusername = response?.data?.user_info?.username; 
        const Demail = response?.data?.user_info?.email; 
        const Dphone = response?.data?.user_info?.phone; 
        const Daddress = response?.data?.user_info?.address; 

        if (token) {
          setCookie('token', token);
          setCookie('name', Dname);
          setCookie('username', Dusername);
          setCookie('email', Demail);
          setCookie('phone', Dphone);
          setCookie('address', Daddress);

          setSuccess(true);
        }else{
          if(response?.data?.response?.msg){
            setErrMsg(response?.data?.response?.msg);
          }else{
            setErrMsg("Invalid username or password");
          }
        }


      } catch (err) {

        
        if(!err.response){
          setErrMsg("Invalid username or password or server error");
        }else if( err.response?.status === 400) {
          setErrMsg("Invalid username or password");
        }else if( err.response?.status === 401){
          setErrMsg("Unauthorized");
        } else {
          setErrMsg("Login failed");
        }

        errRef.current.focus();


      }



    }

      console.log(token);
  return (
    <>
    { ( token != "undefined" && token) || success  ? (
        <div>
        <script >
          {window.location = "/home"}
        </script>
      </div>      
      ) : (
  <div>
    <form onSubmit={handleSubmit}>
      <div className="main">
        <div className="sub-main">
          <div className="test">
            <img src={logo} style={{ width: "30%" }} />
            <h1 style={{ color: "#ffffff" }}>Login</h1>
            <div>
              <p ref={errRef} className={errMsg ? "errmsg" : "offscreen" } aria-live="assertive" >{errMsg}</p>
              <input  type="text" 
                      placeholder="Username" 
                      className="username" 
                      ref={userRef} 
                      onChange={(e) => setUsername(e.target.value) }
                      value={username}
                      required  />
            </div>
            <div className="second-input">
              <input  type="password" 
                      placeholder="Password" 
                      className="password" 
                      onChange={(e) => setPassword(e.target.value) }
                      value={password}
                      required 
                      />
            </div>
            <div className="login-button">
              <button>Login</button>
            </div>

            <p className="link">
              <a href="#">Forgot password?</a>
              <NavLink to="/">Register</NavLink>
            </p>
          </div>
        </div>
      </div>
    </form>
    </div>
      )}
      </>
  );
}
export default Login;
