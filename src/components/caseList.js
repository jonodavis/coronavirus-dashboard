import React from "react";
import NZCase from "./nzCase";
import {useSpring, animated} from 'react-spring'

const CaseList = ({ cases }) => {
  let caseNumbers = cases.slice(0, -1).map(nzCase => nzCase.totalCases)
  let max = Math.max(...caseNumbers)
  let min = Math.min(...caseNumbers)
  const props = useSpring({opacity: 1, from: {opacity: 0}})
  return (
    <animated.div style={props}>
      <div className="cases">
        {cases.map(nzCase => (
          <NZCase nzCase={nzCase} key={nzCase.case} min={min} max={max} />
        ))}
      </div>
    </animated.div>
  );
};

export default CaseList;
