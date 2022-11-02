import { useState } from 'react'
import Button from './Button'
import './Buttons.css'

function Buttons({ dateValue, setDateValue }) {
    const [buttonActive, setButtonActive] = useState('7d')
    const [buttons, setButtons] = useState([
        {
            number: 1,
        },
        {
            number: 5,
        },
        {
            number: 30,
        },
        {
            number: 90,
        },
        {
            number: 180,
        },
        {
            number: 365,
        },
        {
            number: 1200,
        },
        {
            number: 1501,
        },
    ])

    const handleHighlightDate = (dateValue) => {
        const { value } = dateValue.target
        setButtonActive(value)
        console.log(dateValue)
    }

    return (
        <div className="Buttons">
            {buttons.map(button => {
                return <Button dateValue={button.number} setDateValue={setDateValue} handleHighlightDate={handleHighlightDate} />
            })}
        </div>
    )
}

export default Buttons