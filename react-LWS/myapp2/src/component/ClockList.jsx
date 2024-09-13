import React, { Component } from 'react'
import Clock from './Clock'

export default function ClockList({ quantity = []}) {
    console.log(quantity)
    return (
        <div>
            {quantity.map((key, index) => (
                <Clock key={key}></Clock>
            ))}
        </div>
    )
}