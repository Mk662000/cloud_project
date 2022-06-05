import React from "react";
import Header from "../components/Home/Header";
import ItemDataFram from "../components/Home/ItemDataFrame";
import PageNav from "../components/PageNav";

export default function Home(props) {
  return (
    <div>
      <PageNav />
      <Header />
      
      <div className="container">
        <h1
          className="text-start mt-3"
          style={{ textDecoration: "underline #639DC3 10px" }}
        >
          New Release
        </h1>
        <div className="row justify-content-between  pb-5">
          {props.Items.slice(0,9).map((Data,key) => (
            <ItemDataFram
              image={Data.img}
              About={Data.id}
              Name={Data.name}
              price={Data.price}
              id={Data.id}
              key={key}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
