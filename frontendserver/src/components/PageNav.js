import React, {useContext ,useState, useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import logo from "../assets/Medical Rep Logo.png";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import "../styles/Nav.css";
import NavDropdown from "react-bootstrap/NavDropdown";
import { NavLink, useNavigate  } from "react-router-dom";

import { redirect  } from 'react-router';
import { useCookies } from 'react-cookie';
 
import axios from "../api/axios";
const CATEGORIES_URL = "/inventory/categories.php";

function PageNav() {


  const Navigate = useNavigate();

  const [cookies] = useCookies(['token', 'name', 'username', 'email', 'phone', 'address']);
  const token =  cookies.token;
  const [categories_list, setCategoriesList] = useState("");

  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);
  const [search, setSearch] = useState("");




  
    const handleChange = event => {
      setSearch(event.target.value);
    }

    const handleGoSearch = e => {
      if(search.length > 0){
        Navigate('/search/'+search);
      }
    }


  // console.log("hey "+name+ " your token is "+ token );
  useEffect(async () => {
    try {
      const response = await axios.post(CATEGORIES_URL,
        JSON.stringify({
          token:token
        }),
        {
          headers: { 
            'Content-Type': 'application/json',
          },
        }
      );
  
      const status = response?.data?.status;
      const msg = response?.data?.msg;
      const cat_list = response?.data?.categories_list;
      // get categories list from server
  
      if (status == 'success') {

        setCategoriesList(cat_list);
        // console.log(categories_list);

      }else{
        if(response?.data?.response?.msg){
          setErrMsg(response?.data?.response?.msg);
        }else{
          setErrMsg("error with get categories");
        }
      }
  
  
    } catch (err) {

      if(!err.response){
        setErrMsg("categories list fetch error or server error");
      } else {
        setErrMsg("error with get categories");
      }
  
    }
  }, []);

  return token !== undefined && token !== "undefined" ?  (
    <Navbar className="Nav">
      <div className="container pt-4 ">
        <Row style={{     minWidth: "100%" }}>
        <Col className="col-md-12">

        <Row>

          <Col>
            <NavLink to="/home">
              <img src={logo} width="80rem"></img>
            </NavLink>
          </Col>
          <Col style={{ marginTop: "1%" }}>
            <NavLink
              className="active links"
              style={{ textDecoration: "none" }}
              to="/home"
            >
              Home
            </NavLink>
          </Col>
          <Col>
            <NavDropdown
              id="nav-dropdown-example"
              title="Categories"
              menuVariant="light"
              style={{ width: "300%", marginLeft: "50px" }}
            >
              <div className="row">
                <div className="col-12">
                    {
                      Object.entries(categories_list).map(([key, category], i )  => { 
                        // console.log(category);
                        return (
                        <NavDropdown.Item className="dropItem" key={i}>
                        <Link
                          to={"/Categories/"+category.id}
                          style={{ textDecoration: "none", color: "black" }}
                          key={key}
                          id={key}
                          >
                          {category.name}
                        </Link>
                        </NavDropdown.Item>
                        );
                    })
                  }
                </div>
              </div>
            </NavDropdown>
          </Col>
          <Col style={{ marginTop: "1%" }}>
            <NavLink
              to="/About"
              className="active links"
              style={{ textDecoration: "none" }}
            >
              About
            </NavLink>
          </Col>
          <Col style={{ marginTop: "1%", marginLeft: "20px" }}>
            <NavLink
              to="/Contact"
              className="active links"
              style={{ textDecoration: "none" }}
            >
              Contact
            </NavLink>
          </Col>
          <Col style={{marginTop:"1%"}}>
            <NavLink activeclassname="active" to="/profile" className='links' style={{textDecoration:"none"}}>Profile</NavLink>
          </Col>
          <Col style={{marginTop:"1%"}}>
            <NavLink activeclassname="active" to="/cart" className='links' style={{textDecoration:"none"}}>Cart</NavLink>
          </Col>
          </Row>
        </Col>
          <Col className="text-center mx-auto col-md-4 my-3" style={{marginTop:"1%"}}>
            <input className="search" value={search} onChange={handleChange} type="search" placeholder="Search" aria-label="Search" />
            <button
                  className="btn btn-lg btn-primary col-2.5 search mx-2"
                  style={{ backgroundColor: "#0E3E9E" }}
                  onClick={handleGoSearch}
                >
                  Search
                </button>
                </Col>
        </Row>
      </div>
    </Navbar>
  ) :<div><script ></script></div>;
  
}

export default  PageNav ;
