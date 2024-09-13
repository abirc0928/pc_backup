import React from 'react'

const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit'
}

export default function TemparetureInput({ scale, temperature, onTemperatureChange }) {

    return (
        <fieldset>
            <p>Enter temperature in {scaleNames[scale]}:</p>
            <input
                type="text"
                value={temperature}
                onChange={(e) => onTemperatureChange(e, scale)}
            />
        </fieldset>
    )
}