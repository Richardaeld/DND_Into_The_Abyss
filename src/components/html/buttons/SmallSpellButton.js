import React from 'react'

export default function smallSpellButton (props) {

    const styles = {
        display: props.open ? "inline-block" : "none"
    }

    return (
        <div
            style={styles}
            className="dice custom-button col-xl-2 col-lg-3 col-md-4"
            onClick={props.click}
        >
            <p><strong>{props.name}</strong></p>
        </div>
    )
}