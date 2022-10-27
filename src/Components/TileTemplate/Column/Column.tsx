import { SetStateAction, useEffect, useState } from 'react'
import Tile from '../Tile/Tile'
import './Column.css'

interface Props {
    element: any
    hasToggle: string
    numberOfTiles: number
    hasChart: string
}

const Column: React.FC<Props> = ({ element, hasToggle, numberOfTiles, hasChart }) => {
    const [tiles, setTiles] = useState<any[]>([])

    const renderTiles = () => {
        const tiles: SetStateAction<any[]> = []
        for (let i = 0; i < numberOfTiles; i++) {
            tiles.push(<Tile element={element} hasToggle={hasToggle} hasChart={hasChart} />)
        }
        setTiles(tiles)
    }

    useEffect(() => {
        renderTiles()
    }, [tiles])

    return (
        <div className="Column">
            {tiles.map((value, idx) => {
                return (
                    <Tile element={element} hasToggle={hasToggle} hasChart={hasChart} />
                )
            })}

        </div>
    )
}

export default Column