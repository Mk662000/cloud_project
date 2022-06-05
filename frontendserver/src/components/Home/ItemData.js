import React, {useContext ,useState, useEffect } from "react";
import Dermatop from '../../assets/Home/dermatop.png'
import Paramol from '../../assets/Home/paramol-sol-tabs.png'
import Metformin from '../../assets/Home/Metformin.png'
import { useCookies, Cookies } from 'react-cookie';
import Home from '../../pages/Home';
import axios from "../../api/axios";
const INVENTORY_URL = "/inventory/";


export default function ItemData() {
    
const [cookies] = useCookies(['token']);
const token =  cookies.token;
const [product_list, setproductList] = useState("");
const [errMsg, setErrMsg] = useState("");

// console.log("hey "+name+ " your token is "+ token );
useEffect(async  () =>  {

  try {
    const response = await axios.post(INVENTORY_URL,
      JSON.stringify({token:token}),
      {
        headers: { 
          'Content-Type': 'application/json',
        },
      }
    );

    const status = response?.data?.status;
    const msg = response?.data?.msg;
    const product_list = response?.data?.product_list;
    // get product list from server

    if (status == 'success') {

      setproductList(product_list);

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
 const data = Array.from(product_list)
    return(
        <div>
            <Home Items={data}/>
        </div>
    );
    
}
