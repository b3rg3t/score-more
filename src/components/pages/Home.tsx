import React, { useContext } from "react"
import { GlobalContext } from "../../store/contexts/mainContext"
import DisplayActiveGames from "../game/DisplayActiveGame"
// import Loader from "../Loader"

const Home = () => {
    
    const { state } = useContext(GlobalContext)
    console.log(state)
    return (
        <main>
            <h1>Home</h1>
            {/* {state.data.activeGame.length > 0 ? <DisplayActiveGames /> : <Loader />} */}
            <DisplayActiveGames />
        </main>
    )
}

export default Home;