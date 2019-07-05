import React from "react"
import "./App.css"
import logo from './sun.png';
import Title from "./components/title.js"
import Form from "./components/form.js"
import Weather from "./components/weather"
const _API_KEY = "b6feec1665cdc43c08914d42eaec3d3c"
class App extends React.Component {
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    pressure: undefined,
    wind: undefined,
    description: undefined,
  }
  getWeather = async (e) => {
    e.preventDefault()
    const city = e.target.elements.city.value
    const country = e.target.elements.country.value
    const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${_API_KEY}&units=imperial`)
    const data = await api_call.json()
    if (city && country) {
      this.setState({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        pressure: data.main.pressure,
        description: data.weather[0].description,
      })
    } else {
      alert("Please enter values into fields")
    }
  }
  render() {
    return (
    <div>
      <header className="header" ref="headerT">
        <br />
        <h1><Title /></h1>
        <img src={logo} alt="Logo"></img>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
          <polygon class="svg--sm" fill="white" points="0,0 30,100 65,21 90,100 100,75 100,100 0,100"/>
          <polygon class="svg--lg" fill="white" points="0,0 15,100 33,21 45,100 50,75 55,100 72,20 85,100 95,50 100,80 100,100 0,100" />
        </svg>
      </header>
      <div className="center margin">
        <Form getWeather={this.getWeather} />
      </div>
      <div className="custom">
        <Weather
          temperature={this.state.temperature} 
          humidity={this.state.humidity}
          city={this.state.city}
          country={this.state.country}
          pressure={this.state.pressure}
          description={this.state.description}
        />
      </div>
    </div>
    )
  }
}
export default App
//<div>Icons made by <a href="https://www.flaticon.com/authors/good-ware" title="Good Ware">Good Ware</a> 
//from <a href="https://www.flaticon.com/"                 title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" 
//title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>