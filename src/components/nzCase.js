import React from "react";

const NZCase = ({ nzCase, min, max }) => {
  let shading = nzCase.totalCases/max
  if (nzCase.totalCases > max) {
    shading = 0
  }
  return (
    <div className="caseBox">
      <div className="nzCase" style={{background: `rgba(246, 139, 139, ${shading})`}}>
        <p className="location">{nzCase.location === 'Total' ?  null : <span role="img" aria-label="location">📍</span>} {nzCase.location}</p>
        <p className="totalCases">{nzCase.totalCases}</p>
      </div>
    </div>
  );
};

export default NZCase;
