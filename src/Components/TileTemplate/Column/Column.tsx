import { SetStateAction, useEffect, useState } from 'react'
import Tile from '../Tile/Tile'
import './Column.css'

interface Props {
    element: any
    content: string
    hasToggle: string
    numberOfTiles: number
    hasChart: string
    toggle: any
    setToggle: any
    readonly wideRow: any
}

const Column: React.FC<Props> = ({ element, content, hasToggle, numberOfTiles, hasChart, toggle, setToggle, wideRow }) => {
    const [tiles, setTiles] = useState<any[]>([])
    const [idx, setIdx] = useState<number>(0)

    const renderTiles = () => {
        const tiles: SetStateAction<any[]> = []
        for (let i = 0; i < numberOfTiles; i++) {
            tiles.push(<Tile element={element} idx={idx} content={content} hasToggle={hasToggle} hasChart={hasChart} toggle={toggle} wideRow={wideRow} />)
        }
        setTiles(tiles)
    }

    useEffect(() => {
        renderTiles()
    }, [])

    return (
        <div className="Column">
            {tiles.map((tile, idx) => {
                return (
                    <>
                        <Tile element={element} key={idx} idx={idx} content={content} hasToggle={hasToggle} hasChart={hasChart} toggle={toggle} wideRow={wideRow} />
                    </>
                )
            })}

            {/* {numberOfTiles === 1 ?
                <>
                    <Tile element={element} hasToggle={hasToggle} hasChart={hasChart} toggle={toggle} wideRow={wideRow} />
                </> :
                numberOfTiles === 2 ?
                    <>
                        <Tile element={element} hasToggle={hasToggle} hasChart={hasChart} toggle={toggle} wideRow={wideRow} />
                        <Tile element={element} hasToggle={hasToggle} hasChart={hasChart} toggle={toggle} wideRow={wideRow} />
                    </> : numberOfTiles === 3 ?
                        <>
                            <Tile element={element} hasToggle={hasToggle} hasChart={hasChart} toggle={toggle} wideRow={wideRow} />
                            <Tile element={element} hasToggle={hasToggle} hasChart={hasChart} toggle={toggle} wideRow={wideRow} />
                            <Tile element={element} hasToggle={hasToggle} hasChart={hasChart} toggle={toggle} wideRow={wideRow} />
                        </> :
                        numberOfTiles === 4 ?
                            <>
                                <Tile element={element} hasToggle={hasToggle} hasChart={hasChart} toggle={toggle} wideRow={wideRow} />
                                <Tile element={element} hasToggle={hasToggle} hasChart={hasChart} toggle={toggle} wideRow={wideRow} />
                                <Tile element={element} hasToggle={hasToggle} hasChart={hasChart} toggle={toggle} wideRow={wideRow} />
                                <Tile element={element} hasToggle={hasToggle} hasChart={hasChart} toggle={toggle} wideRow={wideRow} />
                            </> :
                            numberOfTiles === 5 ?
                                <>
                                    <Tile element={element} hasToggle={hasToggle} hasChart={hasChart} toggle={toggle} wideRow={wideRow} />
                                    <Tile element={element} hasToggle={hasToggle} hasChart={hasChart} toggle={toggle} wideRow={wideRow} />
                                    <Tile element={element} hasToggle={hasToggle} hasChart={hasChart} toggle={toggle} wideRow={wideRow} />
                                    <Tile element={element} hasToggle={hasToggle} hasChart={hasChart} toggle={toggle} wideRow={wideRow} />
                                    <Tile element={element} hasToggle={hasToggle} hasChart={hasChart} toggle={toggle} wideRow={wideRow} />
                                </> : null} */}
        </div>
    )
}

export default Column