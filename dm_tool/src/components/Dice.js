import React from "react"

export default function Dice(props) {
    return (

        <div 
            className="subactiveItem col-3 dice"
            id={"rolldice" + props.name}
            onClick={props.click}
        >
            <h1>{props.name}</h1>
        </div>
    )
}