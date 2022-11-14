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
    return (
        <div className={hasWideRow === 'Yes' ? "WideColumn" : "Column"}>

            {numberOfTiles === 1 ?
                <Tile
                    element={element}
                    content={content}
                    toggle={toggle}
                    dateValue={dateValue}
                    setDateValue={setDateValue}
                    hasChart={hasChart}
                    hasWideRow={hasWideRow}
                    hasFileTree={hasFileTree}
                    hasToggle={'No'}
                    hasImage={'No'} />
                : numberOfTiles === 2 ?
                    <>
                        <Tile
                            element={element}
                            content={'Regional Natural Gas'}
                            toggle={toggle}
                            dateValue={dateValue}
                            setDateValue={setDateValue}
                            hasChart={hasChart}
                            hasWideRow={hasWideRow}
                            hasFileTree={hasFileTree}
                            hasToggle={'Yes'}
                            hasImage={'No'} />
                        <Tile
                            element={element}
                            content={''}
                            toggle={toggle}
                            hasFileTree={hasFileTree}
                            dateValue={dateValue}
                            setDateValue={setDateValue}
                            hasChart={hasChart}
                            hasWideRow={hasWideRow}
                            hasToggle={'No'}
                            hasImage={'Yes'} />
                    </> : numberOfTiles === 3 ?
                        <>
                            <Tile
                                element={element}
                                content={'SPR Storage'}
                                toggle={toggle}
                                dateValue={dateValue}
                                setDateValue={setDateValue}
                                hasChart={hasChart}
                                hasWideRow={hasWideRow}
                                hasFileTree={hasFileTree}
                                hasToggle={'No'}
                                hasImage={'No'} />
                            <Tile
                                element={element}
                                content={'Natural Gas Investments'}
                                toggle={toggle}
                                dateValue={dateValue}
                                setDateValue={setDateValue}
                                hasChart={hasChart}
                                hasWideRow={hasWideRow}
                                hasFileTree={hasFileTree}
                                hasToggle={'Yes'}
                                hasImage={'No'} />
                            <Tile
                                element={element}
                                content={'Crude Oil Reported'}
                                toggle={toggle}
                                dateValue={dateValue}
                                setDateValue={setDateValue}
                                hasChart={hasChart}
                                hasWideRow={hasWideRow}
                                hasFileTree={hasFileTree}
                                hasToggle={'Yes'}
                                hasImage={'No'} />
                        </> :
                        numberOfTiles === 4 ?
                            <>
                                <Tile
                                    element={element}
                                    content={content}
                                    toggle={toggle}
                                    dateValue={dateValue}
                                    setDateValue={setDateValue}
                                    hasChart={hasChart}
                                    hasWideRow={hasWideRow}
                                    hasFileTree={hasFileTree}
                                    hasToggle={'Yes'}
                                    hasImage={'No'} />
                                <Tile
                                    element={element}
                                    content={content}
                                    toggle={toggle}
                                    dateValue={dateValue}
                                    setDateValue={setDateValue}
                                    hasChart={hasChart}
                                    hasWideRow={hasWideRow}
                                    hasFileTree={hasFileTree}
                                    hasToggle={'Yes'}
                                    hasImage={'No'} />
                                <Tile
                                    element={element}
                                    content={content}
                                    toggle={toggle}
                                    dateValue={dateValue}
                                    setDateValue={setDateValue}
                                    hasChart={hasChart}
                                    hasWideRow={hasWideRow}
                                    hasFileTree={hasFileTree}
                                    hasToggle={'Yes'}
                                    hasImage={'No'} />
                                <Tile
                                    element={element}
                                    content={content}
                                    toggle={toggle}
                                    dateValue={dateValue}
                                    setDateValue={setDateValue}
                                    hasChart={hasChart}
                                    hasWideRow={hasWideRow}
                                    hasFileTree={hasFileTree}
                                    hasToggle={'Yes'}
                                    hasImage={'No'} />
                            </> : null}
        </div>
    )
}

export default Column