import React from 'react'

export default function smallSpellButton (props) {

    const styles = {
        display: props.open ? "inline-block" : "none"
    }

    return (
        <div
            style={styles}
            className="dice custom-button col-2"
            onClick={props.click}
        >
            <p><strong>{props.name}</strong></p>
        </div>
    )
}