import Column from './Column/Column'
import './TileTemplate.css'

interface Props {
    dateValue: number
    setDateValue: React.Dispatch<React.SetStateAction<number>>
    sliderActive: boolean
    setSliderActive: React.Dispatch<React.SetStateAction<boolean>>
    dataName: string
    setDataName: React.Dispatch<React.SetStateAction<string>>
}

const TileTemplate: React.FC<Props> = ({ dateValue, setDateValue, sliderActive, setSliderActive, dataName, setDataName }) => {
    return (
        <div className='Tiles'>

            <Column
                element={'Rates'}
                hasToggle={'Yes'}
                numberOfTiles={4}
                hasChart={'No'}
            />

            <Column
                element={'Chart'}
                hasToggle={'No'}
                numberOfTiles={1}
                hasChart={'No'}
            />

            <Column
                element={'Demographics'}
                hasToggle={'No'}
                numberOfTiles={1}
                hasChart={'No'}
            />

        </div>
    )
}

export default TileTemplate