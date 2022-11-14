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
                content={'Information2'}
                numberOfTiles={3}
                toggle={toggle}
                setToggle={setToggle}
                dateValue={dateValue}
                setDateValue={setDateValue}
                hasChart={'No'}
                hasWideRow={'No'}
                hasFileTree={false}
            />
            <Column
                element={'Chart'}
                content={'Information2'}
                numberOfTiles={1}
                toggle={toggle}
                setToggle={setToggle}
                dateValue={dateValue}
                setDateValue={setDateValue}
                hasChart={'Yes'}
                hasWideRow={'Yes'}
                hasFileTree={false}
            />
            <Column
                element={'Demographics'}
                content={'Information3'}
                numberOfTiles={2}
                toggle={toggle}
                setToggle={setToggle}
                dateValue={dateValue}
                setDateValue={setDateValue}
                hasChart={'No'}
                hasWideRow={'No'}
                hasFileTree={false}
            />

        </div>
    )
}

export default TileTemplate