import React from "react"

export default function OutContainer (props) {
    return (

        <div className="row">
            <div className="col-12">
                <div className="row justify-content-center">
                    <div className="col-6 output index-background">
                        {props.num && <p id="consoleOutput">You Rolled a <strong>{props.num}</strong>!</p>}
                        {!(props.content == "") && <p id="consoleOutput">{props.content}</p>}
                    </div>
                </div>
            </div>
        </div>

    )
}