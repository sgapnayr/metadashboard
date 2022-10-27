import ShowChart from './Chart'
import './Tile.css'
import Toggle from './Toggle'

interface Props {
    element: string
    hasToggle: string
    hasChart: string
}

const Tile: React.FC<Props> = ({ element, hasToggle, hasChart }) => {
    return (
        <div className='Tile' >
            {hasToggle === 'Yes' ? <Toggle /> : null
            }
            {element}
            {hasChart === 'Yes' ? <ShowChart /> : null}
        </div >
    )
}

export default Tile