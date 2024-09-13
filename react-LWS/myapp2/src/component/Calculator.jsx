import React from 'react'
import BoilingVerdict from './BoilingVerdict'
import TemparetureInput from './TemparetureInput'
import { convert, toCelsius, toFahrenheit } from '../lib/Conveter';
export default class Calculator extends React.Component {
    state = {
        temperature: '',
        scale: 'c'
    }
    handleChange = (e, scale) => {
        this.setState({
            temperature: e.target.value,
            scale,
        });
    };
    
    render() {
        const { temperature, scale } = this.state;
        const celsius = scale === 'f' ? convert(temperature, toCelsius) : temperature;
        const fahrenheit = scale === 'c' ? convert(temperature, toFahrenheit) : temperature;
      
        return (
            <div>
                <TemparetureInput
                    scale="c"
                    temperature={celsius}
                    onTemperatureChange={this.handleChange}
                />
                <TemparetureInput
                    scale="f"
                    temperature={fahrenheit}
                    onTemperatureChange={this.handleChange}
                />
            </div>

        )
        
    }
}