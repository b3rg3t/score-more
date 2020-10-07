import React, { useContext } from "react"
import { GlobalContext } from "../../store/contexts/mainContext"

const Home = () => {
    const { state, dispatch } = useContext(GlobalContext)
    console.log(state)
    return (
        <main>
            <h1>This is home page</h1>
        </main>
    )
}

export default Home;