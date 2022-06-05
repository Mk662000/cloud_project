import React from 'react'

export default function ItemDataFrame(props) {
    return (
        <div className="card col-md-4 mt-5" style={{width:"30%",border:'none',borderRadius:"15px",backgroundColor:"rgba(175, 44, 63,0.2)"}}>
          <a className='text-center' href={'Categories/drug/'+props.id} style={{textDecoration: 'none',height: "100%",}}>
            <div className='' style={{ height:"65%","overflow":"hidden" }}>
              <img src={props.image} style={{width: "75%", "min-width": "100%","min-height": "100%", "max-width": "375px" , "max-height": "343px" }} className="card-img py-3"  alt="Card image cap"/>
            </div>
            <div className='my-3' style={{ height:"35%","overflow":"hidden" }}>
            <h5 className="card-title p-3" style={{backgroundColor:"white",textAlign:"center",borderRadius:"5px", color:"black"}}>{props.Name}</h5>
            <h5 className="card-title p-3" style={{backgroundColor:"white",textAlign:"center",borderRadius:"5px", color:"black"}}>{props.price} L.E</h5>
            </div>
          </a>
      </div>
    )
}
