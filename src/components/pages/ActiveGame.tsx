import React from "react"

const ActiveGame = ({ match }: any) => {
    const { params: { id: agreementId }, } = match;
    
    console.log(agreementId)
    return (
        <main>
            <h1>Dynamic route</h1>
            {agreementId}
        </main>
    )
}

export default ActiveGame;