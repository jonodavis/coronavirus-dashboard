import React from "react";

const NZCase = ({ nzCase, min, max }) => {
  let shading = nzCase.totalCases/max
  if (nzCase.totalCases > max) {
    shading = 0
  }
  return (
    <div className="caseBox">
      <p className="location">{nzCase.location === 'Total' ?  null : <span role="img" aria-label="location">📍</span>} {nzCase.location}</p>
      <div className="nzCase" style={{background: `rgba(246, 139, 139, ${shading})`}}>
        <p className="totalText">Total Cases</p>
        <p className="totalCases">{nzCase.totalCases}</p>
        <p className="perMillionText">Cases Per Million</p>
        <p className="perMillionNumber">{((nzCase.totalCases / nzCase.population)*1000000).toFixed(2)}</p>
      </div>
    </div>
  );
};

export default NZCase;
