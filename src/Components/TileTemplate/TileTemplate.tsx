import Column from './Column/Column'
import './TileTemplate.css'

interface Props {
    dateValue: number
    setDateValue: React.Dispatch<React.SetStateAction<number>>
    sliderActive: boolean
    setSliderActive: React.Dispatch<React.SetStateAction<boolean>>
    dataName: string
    setDataName: React.Dispatch<React.SetStateAction<string>>
    toggle: any
    setToggle: any
}

const TileTemplate: React.FC<Props> = ({ dateValue, setDateValue, sliderActive, setSliderActive, dataName, setDataName, toggle, setToggle }) => {
    return (
        <div className='Tiles'>

            <Column
                element={'Rates'}
                hasToggle={'Yes'}
                numberOfTiles={4}
                hasChart={'No'}
                toggle={toggle}
                setToggle={setToggle}
                wideRow={false}
            />

            <Column
                element={'Chart'}
                hasToggle={'No'}
                numberOfTiles={1}
                hasChart={'No'}
                toggle={toggle}
                setToggle={setToggle}
                wideRow={true}
            />

            <Column
                element={'Demographics'}
                hasToggle={'Yes'}
                numberOfTiles={2}
                hasChart={'No'}
                toggle={toggle}
                setToggle={setToggle}
                wideRow={false}
            />

        </div>
    )
}

export default TileTemplate