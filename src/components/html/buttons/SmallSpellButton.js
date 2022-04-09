import React from 'react'

export default function smallSpellButton (props) {

    const styles = {
        display: props.open ? "inline-block" : "none"
    }

    return (
        <div
            style={styles}
            className="small-spell-buttons col-2"
            onClick={props.click}
        >
            <p>{props.name}</p>
        </div>
    )
}