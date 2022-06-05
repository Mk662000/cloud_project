import React from 'react'
import { useState } from 'react'

function Trial() {
    //change city select menu options
    const [selected,setselected]= useState();
    function changeoptions(event) {
        setselected(event.target.value)
    }
    const options= [
        {   label: "Choose your country",
            value: "cyc",
            dis: "disabled",
            selected: "selected"},
        {   label: "Egypt",
            value: "egypt"},
        {   label: "Saudi Arabia",
            value: "saudi arabia"},
        {   label: "Lebanon",
            value: "lebanon"},
        {   label: "United Arab Emirates",
            value: "UAE"}
    ]
    const Egypt=[
        {   label: "Choose your City",
            value: "cyc",
            dis: "disabled",
            selected: "selected"},
        {   label:"Alexandria",
            value:"alex"},
        {   label: "Cairo",
            value:"cairo"},
        {   label: "Giza",
            value: "giza"}
     ]
    const SA=[
        {   label: "Choose your City",
            value: "cyc",
            dis: "disabled",
            selected: "selected"},
        {   label: "Jaddah",
            value: "jaddah"}, 
        {   label: "Riyadh",
            value: "riyadh"},
        {   label: "Madina",
            value: "madina"}
    ]
    const lebanon=[
        {   label: "Choose your City",
            value: "cyc",
            dis: "disabled",
            selected: "selected"},
        {   label: "Beirut",
            value: "beirut"},
        {   label: "Tripoli",
            value: "tripoli"}
    ]
    const UAE=[
        {   label: "Choose your City",
            value: "cyc",
            dis: "disabled",
            selected: "selected"},
        {   label: "Dubai",
            value: "dubai"},
        {   label: "Abu Dhabi",
            value: "abu dhabi"},
        {   label: "Al Ain",
            value: "al ain"}
    ]

    let city=null;
    let opt=null

    if(selected==="egypt"){
        city=Egypt
    }
    else if(selected==="saudi arabia"){
        city=SA
    }
    else if(selected==="lebanon"){
        city=lebanon
    }
    else if(selected==="UAE"){
        city=UAE
    }
    else{
        city=[
            {   label:"Choose Your City",
                value:"cyc",
                dis:"disabled",
                selected:"selected"}
        ]
    }

    if(city){
        opt=city.map((elm) => <option value={elm.value} disabled={elm.dis} selected={elm.selected}>{elm.label}</option>)
    }

    //change region select menu
    const [cityselected,setcityselected]= useState();

    function changeopt2(event) {
        setcityselected(event.target.value);
    }

    const alex=[
        {   label:"Choose Your District",
            value:"cyd",
            dis:"disabled",
            selected:"selected"},
        {   label:"Azareta",
            value:"azareta"},
        {   label:"Camp Chezar",
            value:"camp chezar"},
        {   label:"Cleopatra",
            value:"cleopatra"},
        {   label:"Glim",
            value:"glim"},
        {   label:"Moharam Bek",
            value:"moharam bek"},
        {   label:"Roshdy",
            value:"roshdy"},
        {   label:"Sporting",
            value:"sporting"},
        {   label:"Miami",
            value:"miami"}
    ]
    const cairo=[
        {   label:"Choose Your District",
            value:"cyd",
            dis:"disabled",
            selected:"selected"},
        {   label:"Ain Shams",
            value:"ain shams"},
        {   label:"El Rehab",
            value:"el rehab"},
        {   label:"Fifth Settlement",
            value:"fifth settlement"},
        {   label:"Garden City",
            value:"garden city"},
        {   label: "Maadi",
            value: "maadi"},
        {   label: "Zamalek",
            value: "zamalek"}
    ]
    const giza=[
        {   label:"Choose Your District",
            value:"cyd",
            dis:"disabled",
            selected:"selected"},
        {   label:"Agouza",
            value:"agouza"},
        {   label:"Dokki",
            value:"dokki"},
        {   label:"Mohandiseen",
            value:"mohandiseen"}
    ]
    const jaddah=[
        {   label:"Choose Your District",
            value:"cyd",
            dis:"disabled",
            selected:"selected"},
        {   label:"Al Safa",
            value:"al safa"},
        {   label:"Azizia",
            value:"azizia"},
        {   label:"Abhar",
            value:"abhar"},
        {   label:"Bryman",
            value:"bryman"},
        {   label:"Dahaban",
            value:"dahaban"},
        {   label:"Tiba",
            value:"tiba"},
        {   label:"Baghdadi",
            value:"baghdadi"}
    ]
    const riyadh=[
        {   label:"Choose Your District",
            value:"cyd",
            dis:"disabled",
            selected:"selected"},
        {   label:"Jarir",
            value:"jarir"},
        {   label:"Al Rabwah",
            value:"al rabwah"},
        {   label:"Al Zahra",
            value:"al zahra"},
        {   label:"Al Safa",
            value:"al safa"},
        {   label:"Al Mataz",
            value:"al mataz"}
    ]
    const madina=[
        {   label:"Choose Your District",
            value:"cyd",
            dis:"disabled",
            selected:"selected"},
        {   label:"Abyar Ali",
            value:"abyar ali"},
        {   label:"Qaba",
            value:"qaba"},
        {   label:"El Saha",
            value:"el saha"},
        {   label:"Ennasr",
            value:"ennasr"},
        {   label:"Wadi Ranuna",
            value:"wadi ranuna"},
        {   label:"El Manshiyya",
            value:"el manshiyya"}
    ]
    const beirut=[
        {   label:"Choose Your District",
            value:"cyd",
            dis:"disabled",
            selected:"selected"},
        {   label:"Nejmeh",
            value:"nejmeh"},
        {   label:"Majidieh",
            value:"majidieh"},
        {   label:"Marfaa",
            value:"marfaa"},
        {   label:"Mina EL Hosn",
            value:"mina el hosn"},
        {   label:"Qantari",
            value:"qantari"},
        {   label:"Serail",
            value:"serail"},
        {   label:"Bachoura",
            value:"bachoura"}
    ]
    const tripoli=[
        {   label:"Choose Your District",
            value:"cyd",
            dis:"disabled",
            selected:"selected"},
        {   label:"Tripoli",
            value:"tripoli"},
        {   label:"Mina",
            value:"mina"},
        {   label:"Qalamoun",
            value:"qalamoun"}
    ]
    const dubai=[
        {   label:"Choose Your District",
            value:"cyd",
            dis:"disabled",
            selected:"selected"},
        {   label:"Al Bastakiya",
            value:"al bastakiya"},
        {   label:"Al Karama",
            value:"al karama"},
        {   label:"Bur Dubai",
            value:"bur dubai"},
        {   label:"Business Bay",
            value:"business bay"},
        {   label:"Dubai Marina",
            value:"dubai marina"}
    ]
    const abudhabi=[
        {   label:"Choose Your District",
            value:"cyd",
            dis:"disabled",
            selected:"selected"},
        {   label:"Madinet Zayed",
            value:"madinat zayed"},
        {   label:"Al Wahda",
            value:"al wahda"},
        {   label:"Khalidiya",
            value:"khalidiya"},
        {   label:"Al Muroor",
            value:"al muroor"},
    ]
    const alAin=[
        {   label:"Choose Your District",
            value:"cyd",
            dis:"disabled",
            selected:"selected"},
        {   label:"Al Bateen",
            value:"al bateen"},
        {   label:"Al Foah",
            value:"al foah"},
        {   label:"Magar Al Dhabi",
            value:"magar al dhabi"},
        {   label:"Saniya",
            value:"saniya"},
        {   label:"Zakhir",
            value:"zakhir"},
    ]
    let region=null
    let opt2=null
    if(cityselected==="alex"){
            region=alex
        }
        else if(cityselected==="cairo"){
            region=cairo
        }
        else if(cityselected==="giza"){
            region=giza
        }
    else if(cityselected==="jaddah"){
            region=jaddah
        }
        else if(cityselected==="riyadh"){
            region=riyadh
        }
        else if(cityselected==="madina"){
            region=madina
        }
    else if(cityselected==="beirut"){
            region=beirut
        }
        else if(cityselected==="tripoli"){
            region=tripoli
        }
    else if(cityselected==="dubai"){
            region=dubai
        }
        else if(cityselected==="abu dhabi"){
            region=abudhabi
        }
        else if(cityselected==="al ain"){
            region=alAin
        }
    else{
        region=[
            {   label:"Choose Your District",
            value:"cyd",
            dis:"disabled",
            selected:"selected"}
        ]
    }

    if(region){
        opt2=region.map((elem)=> <option value={elem.value} disabled={elem.dis} selected={elem.selected}>{elem.label}</option>)
    }

    return (
        <div>
            <form>
                <label>Country</label><br/>
                <select  onChange={changeoptions}>
                    {
                        options.map((option)=>(
                        <option value={option.value} disabled={option.dis} selected={option.selected}>{option.label}</option>
                        ))
                    }
                </select> <br/>
                <label>City</label><br/>
                <select onChange={changeopt2}>
                    {opt}
                </select><br/>
                <label>Region</label><br/>
                <select>
                    {opt2}
                </select>
            </form>
        </div>
    )
}

export default Trial
