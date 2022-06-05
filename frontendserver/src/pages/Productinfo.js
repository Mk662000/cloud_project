import React, {useContext ,useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useCookies, Cookies } from 'react-cookie';

import "../styles/Productinfo.css";

import PageNav from "../components/PageNav";
import axios from "../api/axios";
import Swal from 'sweetalert2'
const PRODUCT_INFO_URL = "/inventory/detailproduct.php";
const ADD_TO_CART_URL = "/accounts/cart/create.php";

function Productinfo() {
  let { id } = useParams();

  const Swal = require('sweetalert2')

  const [cookies] = useCookies(['token']);
  const token =  cookies.token;
  const [products_list, setProductsList] = useState("");

  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);


  useEffect(async ()  => {
    console.log(token)
  }, []);
  
  const [product_info, setproductInfo] = useState("");


  // console.log("hey "+name+ " your token is "+ token );

useEffect(async  () =>  {

  try {
    const response = await axios.post(PRODUCT_INFO_URL,
      JSON.stringify({
            token:token, 
            id:id
          }),
      {
        headers: { 
          'Content-Type': 'application/json',
        },
      }
    );

    const status = response?.data?.status;
    const msg = response?.data?.msg;
    const product_info = response?.data?.product_info;
    // get product list from server

    if (status == 'success') {

      setproductInfo(product_info);

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

}, []);

  // handle add to cart
  const handleAddToCart = async ()  => {

    try {
      const response = await axios.post(ADD_TO_CART_URL,
        JSON.stringify({
              token:token, 
              products:
                [{
                   product_id:id,
                 count:1,
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
  
        setSuccess(true);

        Swal.fire({
          title: 'Success!',
          text: 'Product added to cart',
          icon: 'success',
          confirmButtonText: 'OK'
        })
  
      }else{
        if(response?.data?.response?.msg){
          setErrMsg(response?.data?.response?.msg);
        }else{
          setErrMsg("error with adding to cart");
        }
      }
  
  
    } catch (err) {
  
      if(!err.response){
        setErrMsg("adding to list error or server error");
      } else {
        setErrMsg("error with adding to cart");
      }
  
    }

  };
  
  
  return (
    <div>
    <PageNav />
    <div className="container mt-3">
      <div className="row">
        <div className="col-8">
          <h1 style={{ textDecoration: "underline #639DC3 10px" }}>
            {product_info.name}
          </h1>
          <br />
          <h3>Price:</h3>
        <p>
          <big>{product_info.price} EGP</big>
        </p>
        <h3>Customer rating :</h3>
        <p>
          <big>{product_info.rating} / 5</big>
        </p>
          <h3 className="mt-4">Description :</h3>
          <p>
            <big>{product_info.desc}</big>
          </p>       
        </div>
        <div className="col-4">
          <img src={product_info.img} className="drug" style={{ width: "90%" }} />
        </div>
      </div>
      <div className="row text-center">
        <a  className="m-3" style={{ float: "right" }}>
          <button
            className="btn btn-lg btn-primary"
            style={{ backgroundColor: "#0E3E9E" }}
            onClick={handleAddToCart}
          >
            Add to cart
          </button>
        </a>
      </div>
    </div>
    </div>
  );
}

export default Productinfo;
