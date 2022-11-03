import ShowChart from './Chart/Chart.js'
import './Tile.css'
import Toggle from './Toggle'
import { useState } from 'react'
import styled from "styled-components";
import FileTree from './FileTree/FileTree';

// interface Props {
//     dateValue: number
//     setDateValue: React.Dispatch<React.SetStateAction<number>>
//     element: string
//     idx: number
//     content: string
//     hasToggle: string
//     hasChart: string
//     toggle: any
//     readonly wideRow: any
//     hasFileTree: boolean
// }

const TileDiv = styled.div`
    width: 100%;
    margin: .25rem 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    overflow: scroll;
    color: white;
    transition: .2s all ease-in-out;
    cursor: pointer;
    flex: ${(props) => props.hasWideRow === 'Yes' ? '3' : '1'};
    border-radius: 10px;
    font-size: small;
    box-shadow: 1px 1px 15px rgba(0, 0, 0, .25);
    overflow: hidden;
    background: rgba(255, 255, 255, .015);
`;

const Tile = ({ dateValue, setDateValue, element, content, idx, hasToggle, hasChart, toggle, hasWideRow, hasFileTree }) => {
    const [toggled, setToggle] = useState(true);

    const handleToggle = () => {
        setToggle(!toggled);
    };

    return (
        <div className={hasWideRow === 'Yes' ? 'Tile2' : 'Tile'} onClick={handleToggle} >
            {hasToggle === 'Yes' ? <Toggle toggled={toggled} handleToggle={handleToggle} /> : null}
            <div className="TileHeader">
                {content}
            </div>
            {hasChart === 'Yes' ? <ShowChart dateValue={dateValue} setDateValue={setDateValue} /> : null}
            {hasFileTree ? <FileTree /> : null}
        </div >

    )
}

export default Tile