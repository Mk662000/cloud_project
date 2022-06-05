import React from 'react'
import DrugsItem from './DrugsItem'
import classes from './DrugsList.module.css'
function DrugsList(props) {
    return (
        <div>
           <ul className={classes.list}>
            {props.drugs.map((drug, i) => (
                <DrugsItem
                key={i}
                id={drug.id}
                image={drug.img}
                title={drug.name}
                price={drug.price}
                categories={drug.category}
                />
            ))}

           </ul>

        </div>
    )
}

export default DrugsList
