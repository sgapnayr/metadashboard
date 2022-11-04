import { useState } from 'react'
import './Button.css'

function Button({ dateValue, setDateValue, handleHighlightDate, inActiveButtons, setInActiveButtons, }) {
    const [buttonIsActive, setButtonIsActive] = useState(false)

    const handleButtonActive = () => {
        handleHighlightDate(buttonIsActive, setButtonIsActive)
        setButtonIsActive(!buttonIsActive)
    }

    return (
        <div>
            <div className="Button" onClick={() => setDateValue(dateValue)}>
                <button
                    className={buttonIsActive ? 'ButtonActive' : 'Button'}
                    dateValue={dateValue}
                    onClick={handleButtonActive}>
                    {dateValue > 1200 ? 'Max' : dateValue > 364 ? Math.floor(dateValue / 365) + 'y' : dateValue > 29 ? Math.floor(dateValue / 30) + 'm' : dateValue + 'd'}
                </button>
            </div>
        </div>
    )
}

export default Button