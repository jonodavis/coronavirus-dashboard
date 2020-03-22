import React from 'react';
import Stock from './stock'

const StockList = ({ stocks }) => {
  if (stocks.length > 0) {
    return (
      <div className="stockList">
        {stocks.map(quote => ( <Stock quote={ quote } key={ quote.symbol } /> )).sort()}
        </div>
      );
    }
  return (
    <div>
      <center><h2>Loading...</h2></center>   
    </div>
  );
}

export default StockList;