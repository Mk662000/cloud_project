import React, {useContext ,useState, useEffect } from "react";
import "../styles/Categories.css";
import DrugsList from "../components/DrugsList";
import val from "../images/valsatens-plus160_1.png";
import nex from "../images/nexture.png";
import nat from "../images/Natrilix-sr.png";
import flo from "../images/floxamo.png";
import Dermatop from "../assets/Home/dermatop.png";
import Paramol from "../assets/Home/paramol-sol-tabs.png";
import Metformin from "../assets/Home/Metformin.png";
import uripan from "../assets/Home/uripan.png";
import PageNav from "../components/PageNav";
import { Link, useParams } from "react-router-dom";
import { useCookies } from 'react-cookie';
import axios from "../api/axios";
import { useLocation } from 'react-router-dom'
const PRODUCTS_URL = "/inventory/search.php";

function Search() {
  let { key } = useParams();
  const location = useLocation();
  const [cookies] = useCookies(['token']);
  const [products_list, setProductsList] = useState("");

  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);
  const [token, setToken] = useState(false);


  useEffect(async ()  => {
    console.log(  cookies.token)
    setToken(cookies.token);
  }, []);

  // console.log("hey "+name+ " your token is "+ token );
  useEffect(async  () =>  {
   console.log('run');
    try {
      const response = await axios.post(PRODUCTS_URL,
        JSON.stringify({token:cookies.token , name:key }),
        {
          headers: { 
            'Content-Type': 'application/json',
          },
        }
      );
  
      const status = response?.data?.status;
      const msg = response?.data?.msg;
      const products_list = response?.data?.product_list;
      // get Search list from server
  
      if (status == 'success') {

        setProductsList(products_list);
        console.log(products_list);

      }else{
        if(response?.data?.response?.msg){
          setErrMsg(response?.data?.response?.msg);
        }else{
          setErrMsg("error with get Search");
        }
      }
  
  
    } catch (err) {

      if(!err.response){
        setErrMsg("Search list fetch error or server error");
      } else {
        setErrMsg("error with get Search");
      }
  
    }
  
  }, [location]);
  const data = Array.from(products_list)

  return data.length > 0 ? (
    <section className="fok">
      <PageNav />

      <DrugsList drugs={data} />
    </section>
  ) :(
    <section className="fok">
    <PageNav />
    <center>No data found</center> 
    </section>
  ) 
}

export default Search;
