import { useState } from 'react'
import Button from './Button'
import './Buttons.css'

function Buttons({ dateValue, setDateValue }) {
    const [inActiveButtons, setInActiveButtons] = useState(false)
    const [buttons, setButtons] = useState([
        {
            number: 1,
            isActive: false
        },
        {
            number: 5,
            isActive: false
        },
        {
            number: 30,
            isActive: false
        },
        {
            number: 90,
            isActive: false
        },
        {
            number: 180,
            isActive: false
        },
        {
            number: 365,
            isActive: false
        },
        {
            number: 1301,
            isActive: false
        },
    ])

    const handleHighlightDate = (buttonIsActive, setButtonIsActive) => {
        setButtonIsActive(buttonIsActive = false)
    }

    return (
        <div className="Buttons">
            {buttons.map(button => {
                return <Button
                    dateValue={button.number}
                    setDateValue={setDateValue}
                    inActiveButtons={inActiveButtons}
                    setInActiveButtons={setInActiveButtons}
                    handleHighlightDate={handleHighlightDate} />
            })}
        </div>
    )
}

export default Buttons