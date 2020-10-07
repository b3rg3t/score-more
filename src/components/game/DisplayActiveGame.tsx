import React from "react"
// , { useContext } 
import GameCard from "./GameCard"

// import { GlobalContext } from "../../store/contexts/mainContext"

const DummyData = [
    {
        id: 1,
        title: "Game 1",
        players: ["Linn", "Kristin", "David"]
    }
]


const DisplayActiveGames = (): React.ReactElement => {
    // const { state } = useContext(GlobalContext)

    const Games = DummyData

    return (
        <section>
            <ul className="list-unstyled">
                {Games.length ? Games.map((game, index) => <GameCard key={index} game={game} />) : null}
            </ul>
        </section>
    )
}

export default DisplayActiveGames;