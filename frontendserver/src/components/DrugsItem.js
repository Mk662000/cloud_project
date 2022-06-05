import React from 'react'
import classes from './DrugsItem.module.css'
import Card from "../components/ui/Card";

function DrugsItem(props) {
    return (
        <li className={classes.item}>
            <Card>
            <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <p>{props.price} L.E</p>
          <a href={'/Categories/drug/'+props.id}><button className='btn btn-lg btn-primary' style={{backgroundColor:"#0E3E9E"}}>View More</button></a>
        </div>
        <div>
          
        </div>
        </Card>
        </li>
    )
}

export default DrugsItem
