import React, {useContext ,useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";
import "../styles/OrderNow.css";
import { AiOutlineCheckCircle } from "@react-icons/all-files/ai/AiOutlineCheckCircle";
import { DUMMY_DATA } from "./Categories";
import { Link, useParams } from "react-router-dom";
import { useRef } from "react";
import PageNav from "../components/PageNav";
import { useCookies,cookies ,removeCookie} from 'react-cookie';
import axios from "../api/axios";
import Swal from 'sweetalert2'
const GET_CART_URL = "/accounts/cart/index.php";
const REMOVE_FROM_URL = "/accounts/cart/remove.php";
const CREATE_ORDER_URL = "/orders/create.php";

function Cart() {
  let { id } = useParams();

  const [products_list, setProductsList] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  const [cookies,removeCookie] = useCookies(['token', 'name', 'username', 'email', 'phone', 'address']);
  const token =  cookies.token;
  const name =  cookies.name;
  const username =  cookies.username;
  const email =  cookies.email;
  const phone =  cookies.phone;
  const address =  cookies.address;

  // define function to get cart items
  const get_cart = async () => {
    try {
      const response = await axios.post(GET_CART_URL,
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
      const product_list = response?.data?.cart_list;
      // get product list from server
  
      if (status == 'success') {
  
        setProductsList(product_list);
  
      }else{
        setProductsList({});
        if(response?.data?.response?.msg){
          setErrMsg(response?.data?.response?.msg);
        }else{
          setErrMsg("error with get product");
        }
      }
  
  
    } catch (err) {
  
      if(!err.response){
        setErrMsg("product list fetch error or server error");
      } else {
        setErrMsg("error with get product");
      }
  
    }
  }
  
  useEffect(async  () =>  {

    get_cart();
  
  }, []);
  
  const cart = Array.from(products_list)

  const handleDeleteAll = async (e) => {
    try {
      e.preventDefault();
      const response = await axios.post(REMOVE_FROM_URL,
        JSON.stringify({
              token:token, 
              products:products_list
            }),
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      const status = response?.data?.status;
      const msg = response?.data?.msg;
      // get product list from server
        console.log(response);
      if (status == 'success') {
  
        setProductsList({});
        console.log(products_list);
      }else{
        if(response?.data?.response?.msg){
          setErrMsg(response?.data?.response?.msg);
        }else{
          setErrMsg("error with get product");
        }
      }

    } catch (err) {
      if(!err.response){
        setErrMsg("product list fetch error or server error");
      } else {

        setErrMsg("error with get product");
      }
    }
  }


  const handleDelete = async (e) => {
    try {
      e.preventDefault();
      const response = await axios.post(REMOVE_FROM_URL,
        JSON.stringify({
              token:token, 
              products:[
                {
                  id:e.target.dataset.id,
                }
              ]
                
            }),
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      const status = response?.data?.status;
      const msg = response?.data?.msg;
      // get product list from server
  
      if (status == 'success') {

        get_cart();
        console.log("hello" + e.target.dataset.key);

      }else{
        if(response?.data?.response?.msg){
          setErrMsg(response?.data?.response?.msg);
        }else{
          setErrMsg("error with get product");
        }
      }

    } catch (err) {
      if(!err.response){
        setErrMsg("product list fetch error or server error");
      } else {

        setErrMsg("error with get product");
      }
    }
  }

  const handleConfirmorder = async (e) => {
    try {
      e.preventDefault();
      const response = await axios.post(CREATE_ORDER_URL,
        JSON.stringify({
              token:token, 
              products:products_list
            }),
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      const status = response?.data?.status;
      const msg = response?.data?.msg;
      // get product list from server
  
      if (status == 'success') {

        get_cart();

        Swal.fire({
          title: 'Success!',
          text: 'Order Placed Successfully',
          icon: 'success',
          confirmButtonText: 'OK'
        })

      }else{
        if(response?.data?.response?.msg){
          setErrMsg(response?.data?.response?.msg);
        }else{
          setErrMsg("error with placing order");
        }
      }

    } catch (err) {
      if(!err.response){
        setErrMsg("product list fetch error or server error");
      } else {

        setErrMsg("error with get product");
      }
    }
  }
  


  return (
    <div>
    <PageNav />

    <div className="order mt-3"> 
          <Container>
            <Row>
              <Col className="col-md-12 my-5">
              <table className="table text-center">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Image</th>
                    <th scope="col">price</th>
                    <th scope="col">quantity</th>
                    <th scope="col">Manage</th>
                  </tr>
                </thead>
                <tbody>
                  {cart?.map((product, index) => (
                     <tr key={index}>
                     <th scope="row">{index+1}</th>
                     <td>{product.name}</td>
                     <td> <img src={product.img} /></td>
                     <td>{product.price} L.E</td>
                     <td>{product.count}</td>
                     <td className="">
                       <button  className="btn btn-danger mx-auto text-white" data-key={index} data-id={product.id} onClick={handleDelete} >Delete</button>
                     </td>
                   </tr>
                  ))
                  }
                  <tr>
                    <th scope="row"></th>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>
                    <a  className="btn btn-danger mx-auto text-white" onClick={handleDeleteAll} >Delete All</a>
                    </td>
                  </tr>
                </tbody>
              </table>
              </Col>
            </Row>
            <Row>
              <Col sm={6} className="left text-left">
                <h1 className="contactinfo mb-5">CONTACT INFO</h1>
                <div className="form-group col-sm-8 ">
                  <label htmlFor="name">Name</label>
                  <input
                    id="name"
                    className="input form-control"
                    type="text"
                    value={name}
                    disabled
                  />
                </div>
                <div className="form-group col-sm-8">
                  <label htmlFor="email">E-mail</label>
                  <input
                    id="email"
                    className="input form-control"
                    type="email"
                    value={email}

                    disabled
                  />
                </div>
                <div className="form-group col-sm-8">
                  <label htmlFor="num">Phone Number</label>
                  <input
                    id="num"
                    className="input form-control"
                    type="tel"
                    value={phone}
                    disabled
                  />
                  <br />
                </div>
              </Col>
              <Col sm={6} className="text-left mx-auto">
              <h1 className=" mb-5" style={{ textDecoration: "underline #639DC3 10px" }}>
              Address
            </h1>
                <div className="form-group col-sm-10">
                  <label htmlFor="country">Address</label>
                  <textarea
                    id="num"
                    className="input form-control"
                    type="tel"
                    disabled
                    value={address}
                    rows={8}
                  />
                </div>
    
                
                </Col>

            </Row>
           
            <Row className="my-3" >

            </Row>
            <h1 className="mb-5" style={{ textDecoration: "underline #639DC3 10px" }}>
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
                    // ref={inputPay}
                  />
                  <label className="form-check-label" htmlFor="cash">
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
                    // ref={inputPay}
                  />
                  <label className="form-check-label" htmlFor="credit">
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
                    // ref={inputPay}
                  />
                  <label className="form-check-label" htmlFor="installment">
                    Installment
                  </label>
                </div>
              </Col>
            </Row>
            <div className="row my-3">
              <div className="col-sm-4 mx-auto">
                <button
                  className="btn btn-primary m-4 btn-lg mx-auto"
                  style={{ backgroundColor: "#0E3E9E" }}
                  onClick={handleConfirmorder}
                >
                  COMFIRM ORDER
                </button>
              </div>
            </div>
          </Container>
     </div>
     </div>
  );
}
export default Cart;


