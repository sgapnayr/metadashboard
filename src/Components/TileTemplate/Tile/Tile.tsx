import ShowChart from './Chart/Chart.js'
import './Tile.css'
import Toggle from './Toggle'
import { useState } from 'react'
import styled from "styled-components";
import FileTree from './FileTree/FileTree';

interface Props {
    dateValue: number
    setDateValue: React.Dispatch<React.SetStateAction<number>>
    element: string
    idx: number
    content: string
    hasToggle: string
    hasChart: string
    toggle: any
    readonly wideRow: any
    hasFileTree: boolean
}

const TileDiv = styled.div<Props>`
    width: 100%;
    margin: .5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    overflow: scroll;
    color: white;
    transition: .1s all ease-in-out;
    cursor: pointer;
    flex: ${(props): string => props.wideRow ? '2' : '1'};
    border-radius: 10px;
    font-size: small;
    box-shadow: 1px 1px 15px rgba(0, 0, 0, .25);
`;

const Tile: React.FC<Props> = ({ dateValue, setDateValue, element, content, idx, hasToggle, hasChart, toggle, wideRow, hasFileTree }) => {
    const [toggled, setToggle] = useState(true);

    const handleToggle = () => {
        setToggle(!toggled);
    };

    return (
        <>
            <div className={'Tile'} onClick={handleToggle}>
                {hasToggle === 'Yes' ? <Toggle toggled={toggled} handleToggle={handleToggle} /> : null}
                <div className="TileHeader">
                    {element}
                </div>
                {hasChart === 'Yes' ? <ShowChart dateValue={dateValue} setDateValue={setDateValue} /> : null}
                {hasFileTree ? <FileTree /> : null}
                {/* {idx === 0 ? content : ' NOT'} */}
            </div >
        </>
    )
}

export default Tile