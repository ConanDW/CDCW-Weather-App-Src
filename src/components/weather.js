import React from "react"
const Weather = props => (
    <div>
        { props.city && props.country && <p>Location: { props.city }, { props.country } </p> }
        { props.temperature && <p>Temperature: { props.temperature } F</p> }
        { props.humidity && <p>Humidity: { props.humidity }%</p> }
        { props.pressure && <p>Pressure: { props.pressure } InHg</p> }
        { props.description && <p>Description: { props.description.toUpperCase() }</p> }
    </div>
)
export default Weather