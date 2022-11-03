import { useState } from 'react'
import './Button.css'

function Button({ dateValue, setDateValue, handleHighlightDate, isActive }) {
    const [buttonIsActive, setButtonIsActive] = useState(false)

    const handleButtonActive = () => {
        if (buttonIsActive) {
            setButtonIsActive(!buttonIsActive)
        }
        else {
            setButtonIsActive(!buttonIsActive)
        }
    }

    return (
        <div>
            <div className="Button" onClick={() => setDateValue(dateValue)}>
                <button
                    className={buttonIsActive ? 'ButtonActive Button' : 'Button'}
                    dateValue={dateValue}
                    onClick={(dateValue) => handleHighlightDate(dateValue)}>
                    {dateValue > 1200 ? 'Max' : dateValue > 364 ? Math.floor(dateValue / 365) + 'y' : dateValue > 29 ? Math.floor(dateValue / 30) + 'm' : dateValue + 'd'}
                </button>
            </div>
        </div>
    )
}

export default Button