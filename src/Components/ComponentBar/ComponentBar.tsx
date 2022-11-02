import Buttons from '../TileTemplate/Tile/Chart/Buttons/Buttons'
import './ComponentBar.css'
import LinkComponent from './Components/LinkComponent'

interface Props {
    dateValue: number
    setDateValue: React.Dispatch<React.SetStateAction<number>>
}

const ComponentBar: React.FC<Props> = ({ dateValue, setDateValue }) => {
    return (
        <div className='ComponentBar'>
            <LinkComponent
                link={'https://energynewsbeat.co/ep/'}
                textContent={' News Povided by Energy News Beat™'} />
            <Buttons
                dateValue={dateValue}
                setDateValue={setDateValue} />
            <LinkComponent
                link={'https://sportsubmit.netlify.app/'}
                textContent={'Want a personalized dashboard?'} />
        </div>
    )
}

export default ComponentBar