import React from "react"
const Form = props => (
    <form onSubmit={props.getWeather}>
        <input type="text" name="city" placeholder="Your City"  />
        <input type="text" name="country" placeholder="Your Nation"  />
        <button>Get Current Conditions</button>
    </form>
)
export default Form 