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
          <p className="card-text countryCases">
            Cases: 
          </p>
          <p className="card-number countryCases">
            {country.cases} (+{country.todayCases})
          </p>
          <p className="card-text countryCases">
            Deaths:
          </p>
          <p className="card-number countryCases">
            {country.deaths} (+{country.todayDeaths})
          </p>
          <p className="card-text perMillion">
            Cases Per Million:
          </p>
          <p className="card-number perMillion">
            {country.casesPerOneMillion}
          </p>
        </div>
      </div>
      
    </div>
  );
}

export default Country;