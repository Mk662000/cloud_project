import React from 'react';
import Card from 'react-bootstrap/Card';
import { BsStarFill } from "@react-icons/all-files/bs/BsStarFill";
import { BsStarHalf } from "@react-icons/all-files/bs/BsStarHalf";

import { BsStar} from "@react-icons/all-files/bs/BsStar";


function Cards(para) {
    return (
        <div>
           <Card className='card1'>
                    <Card.Body>
                        <Card.Img variant="top-left" src={para.img} className='img1' ></Card.Img>
                        <Card.Title>{para.Title}</Card.Title>
                        <Card.Subtitle className="mb-2 " style={{color:"#234CD6"}}> {para.Subtitle} </Card.Subtitle>
                        <Card.Text>
                        {/*<RiDoubleQuotesL/>*/}
                        {para.Text}{/*<RiDoubleQuotesR/>*/}
                        </Card.Text>
                     <BsStarFill size={20} style={{color:"#ffd600" }}/><BsStarFill size={20} style={{color:"#ffd600",marginLeft:"5%"}}/><BsStarFill size={20} style={{color:"#ffd600",marginLeft:"5%"}}/>
                        <BsStarHalf size={20} style={{color:"#ffd600",marginLeft:"5%"}}/><BsStar size={20} style={{color:"#ffd600",marginLeft:"5%"}}/>
                        
                    </Card.Body>
                </Card> 
        </div>
    )
}

export default Cards
