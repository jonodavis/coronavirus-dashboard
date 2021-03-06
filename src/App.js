import "./App.css"
import React, { Component } from "react"
import CountryList from "./components/countryList"
import SearchBox from "./components/searchBox"
import CaseList from "./components/caseList"
import "circular-std"
import cases from "./data/cases.json"
import ChartList from "./components/chartList"

// api used for covid19 data https://github.com/novelcovid/api

class App extends Component {
  constructor() {
    super()
    this.state = {
      covidAll: {},
      covidCountries: [],
      filteredCountries: [],
      searchField: "",
      stockSymbols: [
        "AAPL",
        "AMZN",
        "MSFT",
        "VXX",
        "BA",
        "AMD",
        "V",
        "ZM",
        "DIS",
        "TSLA",
        "NFLX",
        "FB",
      ],
      indexSymbols: ["SPY", "DIA", "QQQ", "XLP"],
      stocks: [],
      indicies: [],
      lng: 172.767,
      lat: -41.161,
      zoom: 4.6,
    }
  }

  requestCovidData = () => {
    fetch("https://corona.lmao.ninja/v2/countries?sort=cases")
      .then((res) => res.json())
      .then((data) => {
        this.setState({ covidCountries: data, filteredCountries: data })
      })
      .catch(console.log)
  }

  searchChange = (event) => {
    this.setState({
      filteredCountries: this.state.covidCountries.filter((country) => {
        return country.country
          .toLowerCase()
          .includes(event.target.value.toLowerCase())
      }),
    })
    this.setState({ searchField: event.target.value })
  }

  componentDidMount() {
    this.requestCovidData()
  }

  render() {
    return (
      <div className="content">
        <div className="caseHeader">
          <h1>New Zealand Confirmed Cases</h1>
          <a
            href="https://www.health.govt.nz/our-work/diseases-and-conditions/covid-19-novel-coronavirus/covid-19-current-cases"
            target="_blank"
            rel="noopener noreferrer"
          >
            Source
          </a>
        </div>
        <p>
          New Zealand case information is obtained from the Ministry of Health
          website and is updated daily as data is made available. Delays in data
          updates could be caused by the Ministry of Health changing how the
          website displays data, as has happened quite frequently as the number
          of cases has increased. Totals are the number of confirmed and
          probable cases. Highlighting of the boxes below is based on the total
          number of cases per DHB.
        </p>
        <CaseList cases={cases} />
        <h1>Financial Markets</h1>
        <ChartList />
        <h1>Global Confirmed Cases</h1>
        <SearchBox searchChange={this.searchChange} />
        <CountryList
          covidCountries={this.state.filteredCountries}
          searchField={this.state.searchField}
        />
      </div>
    )
  }
}

export default App
