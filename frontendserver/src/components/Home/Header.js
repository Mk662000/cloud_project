import React from 'react'
import "../../styles/header.css"
import capsule from "../../assets/Home/capsule-edit.png"
import dots from "../../assets/Home/dots.png"
import drugs from "../../assets/Home/drugs-new.png"
import { Link } from 'react-router-dom'
export default function Header() {
    return (
        <header>
               
                <div
                        className="text-center bg-image "
                        style={{backgroundImage:`url(${drugs})`
                        ,height:"580px",position:'relative'}}
                >
                    <div className='d-flex align-items-center position-absolute top-50  ' style={{zIndex:1,left:'2%'}}>
                        <img src={dots} height="280rem" style={{width:"100%"}}/>
                    </div>
                    <div className="mask position-absolute " style={{backgroundColor: "rgba(25, 107, 161, 0.4)",zIndex:2}}>
                        <div className=" row d-flex align-items-center h-75 w-75 mx-sm-auto ">
                            <div className="text-white col-sm-6 d-flex flex-row flex-wrap text-start col-6 " >
                                <h1 className='p-3' style={{color:"white"}}>Medical Rep</h1>
                                <p className='p-2 '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                    Sed gravida egestas purus, vestibulum faucibus mi luctus in. 
                                    Vivamus gravida dictum aliquam. Quisque aliquet nunc a metus
                                    rhoncus, et varius tortor sodales. Nam faucibus,
                                    ligula in lacinia dapibus, diam quam malesuada 
                                    lorem,vel placerat turpis neque non augue.</p>
                                    <Link to="/About" className="btn btn-lg btn-danger p-2" role="button" style={{textDecoration:"none",color:"white"}}>Learn More</Link>
                            </div>
                            <div className="col-sm-6  col-2 ">
                                <img src={capsule} height="250rem"/>
                            </div>
                        </div>
                    </div>
                    
                </div>
        </header>
    )
}

