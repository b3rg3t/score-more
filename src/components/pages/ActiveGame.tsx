import React from "react"
import CreateNewGame from "../creategame/CreateNewGame";

const ActiveGame = ({ match }: any) => {
    const { params: { id: agreementId }, } = match;
    
    console.log(agreementId)
    return (
        <main>
            <h1>Dynamic route</h1>
            {agreementId}
            <CreateNewGame />
        </main>
    )
}

export default ActiveGame;