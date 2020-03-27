import React from 'react';
import twemoji from "twemoji";
import flag from "country-code-emoji";

const Country = ({ country }) => {
  return (
    <div className="country" key={country.country}>

      <div className="card-title">
        <p className="countryName">{country.country}</p>
        <p
          className="flag"
          dangerouslySetInnerHTML={{
            __html: country.countryInfo.iso2 != null
              ? twemoji.parse(flag(country.countryInfo.iso2))
              : twemoji.parse("🌎")
          }}
        ></p>
      </div>

      <div className="card">
        <div className="card-body">
          <p className="card-text">
            Cases: {country.cases} (+{country.todayCases})
          </p>
          <p className="card-text">
            Deaths: {country.deaths} (+{country.todayDeaths})
          </p>
        </div>
      </div>
      
    </div>
  );
}

export default Country;