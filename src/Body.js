import React, { useState } from 'react'

const Body = ({ Candidate1, Candidate2, voteCandidate,account }) => {
    const [candidate, setCandidate] = useState("");

    onsubmit = (e) => {
        e.preventDefault();
        if(candidate.id !==0) voteCandidate(Number(candidate));
        else window.alert("There is error in submission")

    }

    return (
        <div className="mt-4 text-center" style={{ color: "#000000" }}>
            <h2>Election Results</h2>
            <hr
                style={{
                    width: "70%",
                    borderStyle: "solid",
                    borderWidth: "2px",
                    borderColor: "#000000",
                }}
            />
            <div className="p-3 ml-auto mr-auto" style={{ width: "40%" }}>
                <div className="row ml-auto mr-auto mb-2" style={{ width: "90%" }}>
                    <div className="col">
                        <p><strong>#</strong></p>
                    </div>
                    <div className="col">
                        <p><strong>Name</strong></p>
                    </div>
                    <div className="col">
                        <p><strong>Votes</strong></p>
                    </div>
                </div>
                <hr
                    style={{
                        width: "90%",
                        borderStyle: "solid",
                        borderColor: "#000000",
                    }}
                />
                <div className="row ml-auto mr-auto mt-2 mb-2" style={{ width: "90%" }}>
                    <div className="col">
                        <p>{Candidate1.id}</p>
                    </div>
                    <div className="col">
                        <p>{Candidate1.name}</p>
                    </div>
                    <div className="col">
                        <p>{Candidate1.votecount}</p>
                    </div>
                </div>
                <hr
                    style={{
                        width: "90%",
                        borderStyle: "solid",
                        borderColor: "#000000",
                    }}
                />
                <div className="row ml-auto mr-auto mt-2 mb-2" style={{ width: "90%" }}>
                    <div className="col">
                        <p>{Candidate2.id}</p>
                    </div>
                    <div className="col">
                        <p>{Candidate2.name}</p>
                    </div>
                    <div className="col">
                        <p>{Candidate2.votecount}</p>
                    </div>
                </div>
            </div>
            <div className="my-5 mr-auto ml-auto text-left" style={{ width: "70%" }}>
                <h5>Cast Your Vote:</h5>
                <form onSubmit={onsubmit}>
                    <select name="candidate" className="form-control" onChange={(e) => setCandidate(e.target.value)}>
                        <option defaultValue value="">
                            Select
                        </option>
                        <option value="1">{Candidate1.name}</option>
                        <option value="2">{Candidate2.name}</option>
                    </select>
                    <button className="btn btn-primary mt-2 btn-md w-100">
                        Vote Candidate {" "} {candidate}
                    </button>
                </form>
            </div>
            <p className="my-5">
                Your Address: <span className="font-weight-bold">{account}</span>{""}
            </p>

        </div>
    )
}

export default Body
