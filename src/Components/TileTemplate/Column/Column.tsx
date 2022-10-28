import { SetStateAction, useEffect, useState } from 'react'
import Tile from '../Tile/Tile'
import './Column.css'

interface Props {
    dateValue: number
    setDateValue: React.Dispatch<React.SetStateAction<number>>
    element: any
    content: string
    hasToggle: string
    numberOfTiles: number
    hasChart: string
    toggle: any
    setToggle: any
    readonly wideRow: any
    hasFileTree: boolean
}

const Column: React.FC<Props> = ({ dateValue, setDateValue, element, content, hasToggle, numberOfTiles, hasChart, toggle, setToggle, wideRow, hasFileTree }) => {
    // const [tiles, setTiles] = useState<any[]>([])
    const [idx, setIdx] = useState<number>(0)

    // const renderTiles = () => {
    //     const tiles: SetStateAction<any[]> = []
    //     for (let i = 0; i < numberOfTiles; i++) {
    //         tiles.push(<Tile element={element} idx={idx} content={content} hasToggle={hasToggle} hasChart={hasChart} toggle={toggle} wideRow={wideRow} />)
    //     }
    //     setTiles(tiles)
    // }

    // useEffect(() => {
    //     renderTiles()
    // }, [])

    return (
        <div className="Column">
            {/* {tiles.map((tile, idx) => {
                return (
                    <>
                        <Tile element={element} key={idx} idx={idx} content={content} hasToggle={hasToggle} hasChart={hasChart} toggle={toggle} wideRow={wideRow} />
                    </>
                )
            })} */}

            {numberOfTiles === 1 ?
                <>
                    <Tile
                        element={element}
                        hasToggle={hasToggle}
                        content={content} idx={idx}
                        hasChart={hasChart}
                        toggle={toggle}
                        wideRow={wideRow}
                        hasFileTree={hasFileTree}
                        dateValue={dateValue}
                        setDateValue={setDateValue} />

                </> :
                numberOfTiles === 2 ?
                    <>
                        <Tile
                            element={element}
                            hasToggle={hasToggle}
                            content={content} idx={idx}
                            hasChart={hasChart}
                            toggle={toggle}
                            wideRow={wideRow}
                            hasFileTree={hasFileTree}
                            dateValue={dateValue}
                            setDateValue={setDateValue} />
                        <Tile
                            element={element}
                            hasToggle={hasToggle}
                            content={content} idx={idx}
                            hasChart={hasChart}
                            toggle={toggle}
                            wideRow={wideRow}
                            hasFileTree={hasFileTree}
                            dateValue={dateValue}
                            setDateValue={setDateValue} />
                    </> : numberOfTiles === 3 ?
                        <>
                            <Tile
                                element={element}
                                hasToggle={hasToggle}
                                content={content} idx={idx}
                                hasChart={hasChart}
                                toggle={toggle}
                                wideRow={wideRow}
                                hasFileTree={hasFileTree}
                                dateValue={dateValue}
                                setDateValue={setDateValue} />
                            <Tile
                                element={element}
                                hasToggle={hasToggle}
                                content={content} idx={idx}
                                hasChart={hasChart}
                                toggle={toggle}
                                wideRow={wideRow}
                                hasFileTree={hasFileTree}
                                dateValue={dateValue}
                                setDateValue={setDateValue} />
                            <Tile
                                element={element}
                                hasToggle={hasToggle}
                                content={content} idx={idx}
                                hasChart={hasChart}
                                toggle={toggle}
                                wideRow={wideRow}
                                hasFileTree={hasFileTree}
                                dateValue={dateValue}
                                setDateValue={setDateValue} />
                        </> :
                        numberOfTiles === 4 ?
                            <>
                                <Tile
                                    element={element}
                                    hasToggle={hasToggle}
                                    content={content} idx={idx}
                                    hasChart={hasChart}
                                    toggle={toggle}
                                    wideRow={wideRow}
                                    hasFileTree={hasFileTree}
                                    dateValue={dateValue}
                                    setDateValue={setDateValue} />
                                <Tile
                                    element={element}
                                    hasToggle={hasToggle}
                                    content={content} idx={idx}
                                    hasChart={hasChart}
                                    toggle={toggle}
                                    wideRow={wideRow}
                                    hasFileTree={hasFileTree}
                                    dateValue={dateValue}
                                    setDateValue={setDateValue} />
                                <Tile
                                    element={element}
                                    hasToggle={hasToggle}
                                    content={content} idx={idx}
                                    hasChart={hasChart}
                                    toggle={toggle}
                                    wideRow={wideRow}
                                    hasFileTree={hasFileTree}
                                    dateValue={dateValue}
                                    setDateValue={setDateValue} />
                                <Tile
                                    element={element}
                                    hasToggle={hasToggle}
                                    content={content} idx={idx}
                                    hasChart={hasChart}
                                    toggle={toggle}
                                    wideRow={wideRow}
                                    hasFileTree={hasFileTree}
                                    dateValue={dateValue}
                                    setDateValue={setDateValue} />
                            </> : null}
        </div>
    )
}

export default Column