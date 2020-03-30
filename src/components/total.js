import React from 'react';
import twemoji from "twemoji";

const Total = ({ covidCountries, searchField }) => {
  if (searchField) {
    return (
      <div></div>
    )
  }
  return (
    <div className="country">
      <div className="card-title">
        <p className="countryName">Total</p>
        <p className="flag" dangerouslySetInnerHTML={ 
          { 
          __html: twemoji.parse('🌎')
          } 
          }>
        </p>
      </div>
      <div className="card">
        <div className="card-body">
          <p className="card-text countryCases">
            Cases:
          </p>
          <p className="card-number countryCases">
            {covidCountries.reduce((acc, curr) => acc + curr.cases, 0)} (+
            {covidCountries.reduce((acc, curr) => acc + curr.todayCases, 0)}
            )
          </p>
          <p className="card-text countryCases">
            Deaths:
          </p>
          <p className="card-number countryCases">
            {covidCountries.reduce((acc, curr) => acc + curr.deaths, 0)} (+
            {covidCountries.reduce(
              (acc, curr) => acc + curr.todayDeaths,
              0
            )}
            )
          </p>
          <p className="card-text perMillion">
            Cases Per Million:
          </p>
          <p className="card-number perMillion">
            {((covidCountries.reduce((acc, curr) => acc + curr.cases, 0)/7800000000)*1000000).toFixed(0)}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Total;