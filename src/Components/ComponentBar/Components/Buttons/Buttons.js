import { useState } from 'react'
import Button from './Button'
import './Buttons.css'

function Buttons({ dateValue, setDateValue }) {
    const [buttons, setButtons] = useState([
        {
            number: 1,
            isActive: false,
            id: 1
        },
        {
            number: 5,
            isActive: false,
            id: 2
        },
        {
            number: 30,
            isActive: false,
            id: 3
        },
        {
            number: 90,
            isActive: false,
            id: 4
        },
        {
            number: 180,
            isActive: false,
            id: 5
        },
        {
            number: 365,
            isActive: false,
            id: 6
        },
        {
            number: 1301,
            isActive: false,
            id: 7
        },
    ])

    return (
        <div className="Buttons">
            {buttons.map(button => {
                return <Button
                    buttons={buttons}
                    button={button}
                    id={button.id}
                    setButtons={setButtons}
                    dateValue={button.number}
                    setDateValue={setDateValue} />
            })}
        </div>
    )
}

export default Buttons