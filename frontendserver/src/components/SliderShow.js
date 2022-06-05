import React from 'react'
import  Card  from './Cards.js'
import { SliderData, SliderData2 } from './SliderData';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

let sliderD = SliderData
function SliderShow(slide2) {
   
    
    if (slide2.onSlide == true ){
        sliderD = SliderData2;
    } 
    else{
        sliderD = SliderData; 
    }
    return(
   <Row>
        
       { 
       sliderD.map((slide,index) => 
        <div className="col-lg-6 col-md-6" key={index}>
      <Card img={slide.img} Title={slide.title} Subtitle={slide.Text} Text={slide.FB} key={index}></Card>
      </div> 
      )}  
    </Row>





      
    
    
    )
}

export default SliderShow
