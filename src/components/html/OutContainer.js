import React from "react"

export default function OutContainer (props) {
    return (

        <div className="row justify-content-center">
            <div className="col-6 output spell-display py-5">
                {props.num &&
                    <>
                        <p className="spell-key mb-0">You rolled</p>
                        <p className="mb-0"><strong>{props.num}</strong></p>
                    </>
                }
                {console.log(props.content)}
                {!(props.content == undefined) &&
                    <>
                        {!(props.content == "Welcome to DM Tool, a friendly quick reference for DMs and Players alike!") &&
                            <p className="spell-key mb-0">The result</p>
                        }
                        <p className="mb-0"><strong>{props.content}</strong></p>
                    </>
                }
            </div>
        </div>

    )
}