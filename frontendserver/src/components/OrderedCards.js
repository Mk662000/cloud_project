import React from "react";
import floxamo from '../images/floxamo.png'
import { Card, Col, Container, Row } from 'react-bootstrap';

function OrderedCards(params) {
    return(
        <Card style={{ Maxwidth:'110%',marginBottom:'1em',paddingLeft:'1em'}}>
            <Row style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <div className='col-3'>
                    <h3>Order #{params.ordnum}</h3>
                        {params.data}
                </div>
                <div className='col-6' style={{justifyContent:'center'}}>Shipped {params.shipDate}</div>
                <div className='col-3 p-2' style={{backgroundColor:'#eecacf', display:'flex', justifyContent:'center'}}><img src={params.itemImg} style={{width:'75%'}} /></div>
            </Row>
                        
        </Card>
    );
}

export default OrderedCards;