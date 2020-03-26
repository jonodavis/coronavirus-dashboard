import React from "react";
import NZCase from "./nzCase";

const CaseList = ({ cases }) => {
  let caseNumbers = cases.slice(0, -1).map(nzCase => nzCase.totalCases)
  let max = Math.max(...caseNumbers)
  let min = Math.min(...caseNumbers)
  return (
    <div className="cases">
      {cases.map(nzCase => (
        <NZCase nzCase={nzCase} key={nzCase.case} min={min} max={max} />
      ))}
    </div>
  );
};

export default CaseList;
