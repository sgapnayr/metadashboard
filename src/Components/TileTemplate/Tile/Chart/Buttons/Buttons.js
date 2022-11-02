import { useState } from 'react'
import Button from './Button'

function Buttons({ dateValue, setDateValue }) {
    const [buttonActive, setButtonActive] = useState('7d')
    const [buttons, setButtons] = useState([
        {
            number: 7,
            name: '7d'
        },
        {
            number: 30,
            name: '30m'
        },
        {
            number: 365,
            name: '1y'
        },
    ])

    const handleHighlightDate = (dateValue) => {
        const { value } = dateValue.target
        setButtonActive(value)
        console.log(dateValue)
    }

    return (
        <div className="DateButtons">
            {buttons.map(button => {
                return <Button dateValue={button.number} setDateValue={setDateValue} handleHighlightDate={handleHighlightDate} />
            })}
        </div>
    )
}

export default Buttons