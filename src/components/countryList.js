import React from "react";
import Total from "./total";
import Country from "./country";
import {useSpring, animated} from 'react-spring'

const CountryList = ({ covidCountries, searchField }) => {
  const props = useSpring({opacity: 1, from: {opacity: 0}})
  return (
    <animated.div style={props}>
      <div className="countries">
        <Total covidCountries={covidCountries} searchField={searchField} />
        {covidCountries.map(country => (
          <Country country={country} key={country.name} />
        ))}
      </div>
    </animated.div>
  );
};

export default CountryList;
