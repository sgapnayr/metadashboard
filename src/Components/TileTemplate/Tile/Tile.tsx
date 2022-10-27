import ShowChart from './Chart'
import './Tile.css'
import Toggle from './Toggle'
import { useState } from 'react'

interface Props {
    element: string
    hasToggle: string
    hasChart: string
    toggle: any
}

const Tile: React.FC<Props> = ({ element, hasToggle, hasChart, toggle }) => {
    const [toggled, setToggle] = useState(true);

    const handleToggle = () => {
        setToggle(!toggled);
    };

    return (
        <div className='Tile' onClick={handleToggle}>
            {hasToggle === 'Yes' ? <Toggle toggled={toggled} handleToggle={handleToggle} /> : null}
            {element}
            {hasChart === 'Yes' ? <ShowChart /> : null}
        </div >
    )
}

export default Tile