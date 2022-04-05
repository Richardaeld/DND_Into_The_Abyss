import React from "react"

export default function OutContainer (props) {
    return (

        // <div className="col-12 activeItem">
        //     <a href="#spellInfoname" className="blank-anchor">
        //         <div id="outputListInformation" className="row no-gutters justify-content-center">
        //             <p>{prop.content}</p>
        //         </div>
        //     </a>
        // </div>

        <div className="col-12">
            <div className="row no-gutters justify-content-center">
                <div className="col-6 narrow-Miss-Output">
                    <h1 id="consoleOutput">{props.content}</h1>
                </div>
            </div>
        </div>


    )
}