import React from "react"

export default function OutContainer (props) {
    return (

        <div className="row justify-content-center">
            <div className="col-6 output spell-display">
                {props.num &&
                    <>
                        <p className="spell-key mb-0">You rolled</p>
                        <p><strong>{props.num}</strong></p>
                    </>
                }
                {console.log(props.content)}
                {!(props.content == undefined) &&
                    <>
                        <p className="spell-key mb-0">The result</p>
                        <p><strong>{props.content}</strong></p>
                    </>
                }
            </div>
        </div>

    )
}