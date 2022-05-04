// Output for all generic content and rolls
export default function GeneralOutput (props) {

    const num = props.outTarget[0];
    const content = props.outTarget[1];
    const dTotal = props.outTarget[2];

    var rolledValue="";
    if (dTotal !== undefined && dTotal !== "") {
        rolledValue =  <>a <strong> D{dTotal}</strong></>;
    } else {
        rolledValue = "";
    }



    return (

        <div className="container-fluid" id="consoleOutput">
            {(content || num) &&

                <div className="row justify-content-center">
                    <div className="col-11 col-md-6 output spell-display py-5">

                        {props.generalContentIsLoading ? <p className="loading-text">"Loading..."</p> : ""}

                        {/* Number container */}
                        {num &&
                            <>
                                <p className="spell-key mb-0">You rolled {rolledValue}</p>
                                <p className="mb-0"><strong>{num}</strong></p>
                            </>
                        }
                        {console.log(content)}
                        {/* Content container */}
                        {!(content === undefined || content ==="") &&
                            <>
                                {!(content === "Welcome to DM Tool, a friendly quick reference for DMs and Players alike!") &&
                                    <p className="spell-key mb-0">The result</p>
                                }
                                <p className="mb-0"><strong>{content}</strong></p>
                            </>
                        }
                    </div>
                </div>
            }
        </div>
    )
}