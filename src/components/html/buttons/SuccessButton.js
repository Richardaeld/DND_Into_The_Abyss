import React from 'react'

export default function SuccessButton(props) {

    const styles = {
        display: props.open ? "inline-block" : "none"
    }

    return (
        <div
            style={styles}
            className="dice custom-button"
            onClick={props.click}
        >
            <p><strong>{props.name}</strong></p>

        </div>
    )
}