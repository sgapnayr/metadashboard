import { useState } from 'react'
import Tile from '../Tile/Tile'
import './Column.css'

interface Props {
    dateValue: number
    setDateValue: React.Dispatch<React.SetStateAction<number>>
    element: any
    content: string
    numberOfTiles: number
    hasChart: string
    hasWideRow: string
    toggle: any
    setToggle: any
    hasFileTree: boolean
}

const Column: React.FC<Props> = ({ dateValue, setDateValue, element, content, numberOfTiles, hasChart, toggle, setToggle, hasWideRow, hasFileTree }) => {
    const [idx, setIdx] = useState<number>(0)

    return (
        <div className={hasWideRow === 'Yes' ? "WideColumn" : "Column"}>

            {numberOfTiles === 1 ?
                <Tile
                    element={element}
                    content={content} idx={idx}
                    hasChart={hasChart}
                    hasToggle={'No'}
                    toggle={toggle}
                    hasWideRow={hasWideRow}
                    hasFileTree={hasFileTree}
                    dateValue={dateValue}
                    setDateValue={setDateValue} />
                : numberOfTiles === 2 ?
                    <>
                        <Tile
                            element={element}
                            content={'Regional Natural Gas'} idx={idx}
                            hasChart={hasChart}
                            hasToggle={'Yes'}
                            toggle={toggle}
                            hasWideRow={hasWideRow}
                            hasFileTree={hasFileTree}
                            dateValue={dateValue}
                            setDateValue={setDateValue} />
                        <Tile
                            element={element}
                            content={'Enverus'} idx={idx}
                            hasChart={hasChart}
                            hasToggle={'No'}
                            toggle={toggle}
                            hasWideRow={hasWideRow}
                            hasFileTree={hasFileTree}
                            dateValue={dateValue}
                            setDateValue={setDateValue} />
                    </> : numberOfTiles === 3 ?
                        <>
                            <Tile
                                element={element}
                                content={'SPR Storage'} idx={idx}
                                hasChart={hasChart}
                                hasToggle={'No'}
                                toggle={toggle}
                                hasWideRow={hasWideRow}
                                hasFileTree={hasFileTree}
                                dateValue={dateValue}
                                setDateValue={setDateValue} />
                            <Tile
                                element={element}
                                content={'Natural Gas Investments'} idx={idx}
                                hasChart={hasChart}
                                hasToggle={'Yes'}
                                toggle={toggle}
                                hasWideRow={hasWideRow}
                                hasFileTree={hasFileTree}
                                dateValue={dateValue}
                                setDateValue={setDateValue} />
                            <Tile
                                element={element}
                                content={'Crude Oil Reported'} idx={idx}
                                hasChart={hasChart}
                                hasToggle={'Yes'}
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
                                    content={content} idx={idx}
                                    hasChart={hasChart}
                                    hasToggle={'Yes'}
                                    toggle={toggle}
                                    hasWideRow={hasWideRow}
                                    hasFileTree={hasFileTree}
                                    dateValue={dateValue}
                                    setDateValue={setDateValue} />
                                <Tile
                                    element={element}
                                    content={content} idx={idx}
                                    hasChart={hasChart}
                                    hasToggle={'Yes'}
                                    toggle={toggle}
                                    hasWideRow={hasWideRow}
                                    hasFileTree={hasFileTree}
                                    dateValue={dateValue}
                                    setDateValue={setDateValue} />
                                <Tile
                                    element={element}
                                    content={content} idx={idx}
                                    hasChart={hasChart}
                                    hasToggle={'Yes'}
                                    toggle={toggle}
                                    hasWideRow={hasWideRow}
                                    hasFileTree={hasFileTree}
                                    dateValue={dateValue}
                                    setDateValue={setDateValue} />
                                <Tile
                                    element={element}
                                    content={content} idx={idx}
                                    hasChart={hasChart}
                                    hasToggle={'Yes'}
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