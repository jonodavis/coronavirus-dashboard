import React from 'react';
import twemoji from "twemoji";
import flag from "country-code-emoji";
import { getCode, getNames } from "country-list";

const Country = ({ country }) => {
  return (
    <div className="country" key={country.country}>

      <div className="card-title">
        <p className="countryName">{country.country}</p>
        <p
          className="flag"
          dangerouslySetInnerHTML={{
            __html: getNames().includes(country.country)
              ? twemoji.parse(flag(getCode(country.country)))
              : (country.country === 'USA') ? twemoji.parse("🇺🇸")
              : (country.country === 'Iran') ? twemoji.parse("🇮🇷")
              : (country.country === 'UK') ? twemoji.parse("🇬🇧")
              : (country.country === 'S. Korea') ? twemoji.parse("🇰🇷")
              : (country.country === 'Russia') ? twemoji.parse("🇷🇺")
              : (country.country === 'UAE') ? twemoji.parse("🇦🇪")
              : (country.country === 'Taiwan') ? twemoji.parse("🇹🇼")
              : (country.country === 'Vietnam') ? twemoji.parse("🇻🇳")
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