import React, { useEffect } from 'react';
import PageNav from '../components/PageNav';
import Footer from '../components/Footer';
import floxamo from '../images/floxamo.png'
import nexicure from '../images/nexture.png'
import { Card, Col, Container, Row } from 'react-bootstrap';
import OrderedCards from '../components/OrderedCards';
import { useCookies,cookies ,removeCookie} from 'react-cookie';


function UserProfile() {
    function showOrders(){
        document.getElementById("profilePart").style.display='none';
        document.getElementById('orderspart').style.display='block';
        document.getElementById('ele1').style.fontWeight='normal';
        document.getElementById('ele2').style.fontWeight='bold';
    }
    function showProfile(){
        document.getElementById("profilePart").style.display='block';
        document.getElementById('orderspart').style.display='none';
        document.getElementById('ele1').style.fontWeight='bold';
        document.getElementById('ele2').style.fontWeight='normal';
    }


 
    const [cookies,removeCookie] = useCookies(['token', 'name', 'username', 'email', 'phone', 'address']);
    const name =  cookies.name;
    const username =  cookies.username;
    const email =  cookies.email;
    const phone =  cookies.phone;
    const address =  cookies.address;

    var uname=name, umail=email, uphone=phone, uloc=address;

    const handleSignout = async (e) => {
        removeCookie('token');
        window.location = "/home"
    }
        
    return(
        <div>
            <PageNav/>
            <div style={{display: 'flex', justifyContent: 'center',backgroundColor:'#e1ecf3'}}>
                <div style={{margin:'4%', marginRight:'25%'}}>
                    <h2>{uname}</h2>
                    <h3>{uloc}</h3>
                </div>
                <button style={{paddingRight:'1%', paddingLeft:'1%', margin:'8%', marginLeft:'30%', marginBottom:'5%'}} onClick={handleSignout} >Sign Out</button>
            </div>
            <div style={{display:'flex'}}>
                <Container style={{border: '1px solid #000000',margin:'5%', width:'25%', height:'25%'}}>
                    <Row>
                        <Col style={{paddingTop:"5%", paddingBottom:'5%'}}>
                            <h4 id='ele1' style={{cursor:'pointer', fontWeight:'bold'}} onClick={showProfile}>Profile</h4>
                            <h4 id='ele2' style={{marginTop:'5%', cursor:'pointer'}} onClick={showOrders}>Orders</h4>
                        </Col>
                    </Row>
                </Container>
                <div id='profilePart' style={{margin:'3em'}}>
                    <h1>
                        Profile
                    </h1>
                    <form style={{marginLeft:'2em'}}>
                        <div style={{display: 'flex'}}>
                            <div className='form-group mt-3 mr-5'>
                                <label for='name'>Name</label> 
                                <input id='name' placeholder={uname} className='input form-control' type='text' />
                            </div>
                            <div className='form-group mt-3 ml-5'>
                                <label for='email'>Email</label> 
                                <input id='email' placeholder={umail} className='input form-control' type='text' />
                            </div>
                        </div>
                        <div style={{display:'flex'}}>
                            <div className='form-group mt-3 mr-5'>
                                <label for='phone'>Phone Number</label> 
                                <input id='phone' placeholder={uphone} className='input form-control' type='text'  />
                            </div>
                            <div className='form-group mt-3 ml-5'>
                                <label for='location'>Location</label> 
                                <input id='location' placeholder={uloc} className='input form-control' type='text' />
                            </div>
                        </div>
                        <div className='row'>
                        <div className='col'>
                        <button className='btn btn-primary m-4 btn-lg' style={{backgroundColor:"#0E3E9E"}}>SAVE CHANGES</button>

                        </div>
                    </div>
                    </form>
                </div>



                <div id='orderspart' style={{display:'none', margin:'3em'}}>
                    <h1>Orders</h1>

                    <OrderedCards ordnum='450' data='1x Floxamo' shipDate='23/4' itemImg={floxamo}/> 
                    <OrderedCards ordnum='120' data='1x Nexicure' shipDate='15/2' itemImg={nexicure}/>
                </div>
            </div>
        </div>
    );
}

export default UserProfile;