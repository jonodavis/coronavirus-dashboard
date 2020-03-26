import "./App.css";
import React, { Component } from "react";
import CountryList from "./components/countryList";
import SearchBox from "./components/searchBox";
import CaseList from "./components/caseList";
import covid from "novelcovid";
import "circular-std";
import cases from "./data/cases.json";
import ChartList from "./components/chartList";

class App extends Component {
  constructor() {
    super();
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
        "FB"
      ],
      indexSymbols: ["SPY", "DIA", "QQQ", "XLP"],
      stocks: [],
      indicies: [],
      lng: 172.767,
      lat: -41.161,
      zoom: 4.6
    };
  }

  requestCovidData = () => {
    let covidAll = covid.all();
    let covidCountries = covid.countries();
    covidAll
      .then(data => {
        this.setState({ covidAll: data });
      })
      .catch(console.log);
    covidCountries
      .then(data => {
        this.setState({ covidCountries: data, filteredCountries: data });
      })
      .catch(console.log);
  };

  requestStocks = () => {
    this.state.stockSymbols.forEach(symbol => {
      fetch(
        `https://cloud.iexapis.com/v1/stock/${symbol}/quote?token=pk_6544ddef60034ad3bba9032c28bf940b`
      )
        .then(res => res.json())
        .then(data =>
          this.setState({ stocks: this.state.stocks.concat([data]) })
        )
        .catch(console.log);
    });

    this.state.indexSymbols.forEach(symbol => {
      fetch(
        `https://cloud.iexapis.com/v1/stock/${symbol}/quote?token=pk_6544ddef60034ad3bba9032c28bf940b`
      )
        .then(res => res.json())
        .then(data =>
          this.setState({ indicies: this.state.indicies.concat([data]) })
        )
        .catch(console.log);
    });
  };

  searchChange = event => {
    this.setState({
      filteredCountries: this.state.covidCountries.filter(country => {
        return country.country
          .toLowerCase()
          .includes(event.target.value.toLowerCase());
      })
    });
    this.setState({ searchField: event.target.value });
  };

  componentDidMount() {
    this.requestStocks();
    this.requestCovidData();
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
        <CaseList cases={cases} />
        <h1>Financial Markets</h1>
        <ChartList />
        {/* <StockList stocks={this.state.indicies} /> */}
        {/* <h1>Stock Prices</h1> */}
        {/* <StockList stocks={this.state.stocks} /> */}
        <h1>Confirmed Global Cases</h1>
        <SearchBox searchChange={this.searchChange} />
        <CountryList
          covidCountries={this.state.filteredCountries}
          searchField={this.state.searchField}
        />
      </div>
    );
  }
}

export default App;
