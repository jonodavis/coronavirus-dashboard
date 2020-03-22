import React from 'react';

const Stock = ({ quote }) => {
  if (quote.changePercent > 0) {
    return (
      <div className="stock">
        <p className="symbol">{quote.symbol}</p>
        {/* <img src={`https://storage.googleapis.com/iex/api/logos/${quote.symbol}.png`} alt="" className="stockLogo"></img> */}
        {/* <p>{quote.companyName}</p> */}
        <div className="Green">
          <p className="currentPrice currentPriceGreen">{quote.latestPrice.toFixed(2)}</p>
          <p className="percentChange percentChangeGreen">{(quote.changePercent * 100).toFixed(2)}%</p>
        </div>
      </div>
    );
  } else {
    return (
      <div className="stock">
        <p className="symbol">{quote.symbol}</p>
        {/* <img src={`https://storage.googleapis.com/iex/api/logos/${quote.symbol}.png`} alt="" className="stockLogo"></img> */}
        {/* <p>{quote.companyName}</p> */}
        <div className="Red">
          <p className="currentPrice currentPriceRed">{quote.latestPrice.toFixed(2)}</p>
          <p className="percentChange percentChangeRed">{(quote.changePercent * 100).toFixed(2)}%</p>
        </div>
      </div>
    );
  }
  
}

export default Stock;