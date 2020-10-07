import React from "react"
import CreateNewGame from "../game/CreateNewGame";

const ActiveGame = ({ match }: any) => {
    const { params: { id }, } = match;
    
    console.log(id)
    return (
        <main>
            <h1>Dynamic route</h1>
            {id}
            <CreateNewGame />
        </main>
    )
}

export default ActiveGame;