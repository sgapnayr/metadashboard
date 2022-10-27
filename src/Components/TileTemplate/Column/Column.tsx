import Tile from '../Tile/Tile'
import './Column.css'

interface Props {
    element: any
    hasToggle: string
    numberOfTiles: number
    hasChart: string
}

const Column: React.FC<Props> = ({ element, hasToggle, numberOfTiles, hasChart }) => {
    return (
        <div className="Column">

            {
                numberOfTiles === 1 ?
                    <>
                        <Tile element={element} hasToggle={hasToggle} hasChart={hasChart} />
                    </>
                    :
                    numberOfTiles === 2 ?
                        <>
                            <Tile element={element} hasToggle={hasToggle} hasChart={hasChart} />
                            <Tile element={element} hasToggle={hasToggle} hasChart={hasChart} />
                        </>
                        :
                        numberOfTiles === 3 ?
                            <>
                                <Tile element={element} hasToggle={hasToggle} hasChart={hasChart} />
                                <Tile element={element} hasToggle={hasToggle} hasChart={hasChart} />
                                <Tile element={element} hasToggle={hasToggle} hasChart={hasChart} />
                            </>
                            : numberOfTiles === 4 ?
                                <>
                                    <Tile element={element} hasToggle={hasToggle} hasChart={hasChart} />
                                    <Tile element={element} hasToggle={hasToggle} hasChart={hasChart} />
                                    <Tile element={element} hasToggle={hasToggle} hasChart={hasChart} />
                                    <Tile element={element} hasToggle={hasToggle} hasChart={hasChart} />
                                </>
                                : null
            }
        </div>
    )
}

export default Column