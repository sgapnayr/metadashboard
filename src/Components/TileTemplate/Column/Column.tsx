import { useState } from 'react'
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
    hasWideRow: string
    toggle: any
    setToggle: any
    hasFileTree: boolean
}

const Column: React.FC<Props> = ({ dateValue, setDateValue, element, content, hasToggle, numberOfTiles, hasChart, toggle, setToggle, hasWideRow, hasFileTree }) => {
    const [idx, setIdx] = useState<number>(0)

    return (
        <div className="Column">

            {numberOfTiles === 1 ?
                <>
                    <Tile
                        element={element}
                        hasToggle={hasToggle}
                        content={content} idx={idx}
                        hasChart={hasChart}
                        toggle={toggle}
                        hasWideRow={hasWideRow}
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
                            hasWideRow={hasWideRow}
                            hasFileTree={hasFileTree}
                            dateValue={dateValue}
                            setDateValue={setDateValue} />
                        <Tile
                            element={element}
                            hasToggle={hasToggle}
                            content={content} idx={idx}
                            hasChart={hasChart}
                            toggle={toggle}
                            hasWideRow={hasWideRow}
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
                                hasWideRow={hasWideRow}
                                hasFileTree={hasFileTree}
                                dateValue={dateValue}
                                setDateValue={setDateValue} />
                            <Tile
                                element={element}
                                hasToggle={hasToggle}
                                content={content} idx={idx}
                                hasChart={hasChart}
                                toggle={toggle}
                                hasWideRow={hasWideRow}
                                hasFileTree={hasFileTree}
                                dateValue={dateValue}
                                setDateValue={setDateValue} />
                            <Tile
                                element={element}
                                hasToggle={hasToggle}
                                content={content} idx={idx}
                                hasChart={hasChart}
                                toggle={toggle}
                                hasWideRow={hasWideRow}
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
                                    hasWideRow={hasWideRow}
                                    hasFileTree={hasFileTree}
                                    dateValue={dateValue}
                                    setDateValue={setDateValue} />
                                <Tile
                                    element={element}
                                    hasToggle={hasToggle}
                                    content={content} idx={idx}
                                    hasChart={hasChart}
                                    toggle={toggle}
                                    hasWideRow={hasWideRow}
                                    hasFileTree={hasFileTree}
                                    dateValue={dateValue}
                                    setDateValue={setDateValue} />
                                <Tile
                                    element={element}
                                    hasToggle={hasToggle}
                                    content={content} idx={idx}
                                    hasChart={hasChart}
                                    toggle={toggle}
                                    hasWideRow={hasWideRow}
                                    hasFileTree={hasFileTree}
                                    dateValue={dateValue}
                                    setDateValue={setDateValue} />
                                <Tile
                                    element={element}
                                    hasToggle={hasToggle}
                                    content={content} idx={idx}
                                    hasChart={hasChart}
                                    toggle={toggle}
                                    hasWideRow={hasWideRow}
                                    hasFileTree={hasFileTree}
                                    dateValue={dateValue}
                                    setDateValue={setDateValue} />
                            </> : null}
        </div>
    )
}

export default Column