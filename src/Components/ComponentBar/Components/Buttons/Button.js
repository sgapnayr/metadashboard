import { useState } from 'react'
import './Button.css'

function Button({ id, button, buttons, setButtons, dateValue, setDateValue }) {

    const handleButtonActive = (button) => {
        const newButtonList = buttons.map(buttonId => {
            if (id === buttonId.id) {
                buttonId.isActive = !buttonId.isActive
                handleButtonDeActivate(buttonId)
            }
            return buttonId
        })
        setButtons(newButtonList)
    }

    const handleButtonDeActivate = (button) => {
        const otherButtons = buttons.filter(b => b.isActive === !button.isActive)
        // otherButtons.map(otherButton => {
        //     otherButton.isActive === false
        //     return otherButton
        // })

        // IDEAS
        // Push old button to prevButton var
        // Filter works great, but it keeps filtering... hmm
        // Need to fix that, I guess that is same issue
        console.log(otherButtons, 'The unselected buttons')
        console.log(button, 'Button Selected')
    }

    return (
        <div>
            <div className="Button" onClick={() => setDateValue(dateValue)}>
                <button
                    className={button.isActive ? 'ButtonActive' : 'Button'}
                    dateValue={dateValue}
                    onClick={handleButtonActive}>
                    {dateValue > 1200 ? 'Max' : dateValue > 364 ? Math.floor(dateValue / 365) + 'y' : dateValue > 29 ? Math.floor(dateValue / 30) + 'm' : dateValue + 'd'}
                </button>
            </div>
        </div>
    )
}

export default Button
