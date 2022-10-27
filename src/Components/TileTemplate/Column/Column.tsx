import { SetStateAction, useEffect, useState } from 'react'
import Tile from '../Tile/Tile'
import './Column.css'

interface Props {
    element: any
    hasToggle: string
    numberOfTiles: number
    hasChart: string
    toggle: any
    setToggle: any
}

const Column: React.FC<Props> = ({ element, hasToggle, numberOfTiles, hasChart, toggle, setToggle }) => {
    const [tiles, setTiles] = useState<any[]>([])

    const renderTiles = () => {
        const tiles: SetStateAction<any[]> = []
        for (let i = 0; i < numberOfTiles; i++) {
            tiles.push(<Tile element={element} hasToggle={hasToggle} hasChart={hasChart} toggle={toggle} />)
        }
        setTiles(tiles)
    }

    useEffect(() => {
        renderTiles()
    }, [])

    return (
        <div className="Column">
            {tiles.map((idx) => {
                return (
                    <Tile key={idx} element={element} hasToggle={hasToggle} hasChart={hasChart} toggle={toggle} />
                )
            })}

        </div>
    )
}

export default Column