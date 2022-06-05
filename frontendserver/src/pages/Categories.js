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
const PRODUCTS_URL = "/inventory/product_by_category.php";


function Categories() {
  let { id } = useParams();

  const [cookies] = useCookies(['token']);
  const [products_list, setProductsList] = useState("");
  const [category_name, setCategoryName] = useState("");

  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);
  const [token, setToken] = useState(false);


  useEffect(async ()  => {
    // console.log(  cookies.token)
    setToken(cookies.token);
  }, []);

  // console.log("hey "+name+ " your token is "+ token );
  useEffect(async  () =>  {
   
    try {
      const response = await axios.post(PRODUCTS_URL,
        JSON.stringify({token:cookies.token , cat_id:id }),
        {
          headers: { 
            'Content-Type': 'application/json',
          },
        }
      );
  
      const status = response?.data?.status;
      const msg = response?.data?.msg;
      const products_list = response?.data?.product_list;
      const cat_name = response?.data?.cat_name;
      // get categories list from server
  
      if (status == 'success') {

        setProductsList(products_list);
        setCategoryName(cat_name)
        // console.log(products_list);

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
  
  }, [id]);
  const data = Array.from(products_list)

  return (
    <section className="fok">
      <PageNav />

      <h1 className="Categories">{category_name}</h1>
      <DrugsList drugs={data} />
    </section>
  );
}

export default Categories;
