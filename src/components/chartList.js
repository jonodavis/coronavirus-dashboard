import React from "react";
import TradingViewWidget from "react-tradingview-widget";

const ChartList = () => {
  return (
    <div className="charts">
      <TradingViewWidget
        symbol="SPY"
        interval="1"
        range="1d"
        width="550"
        height="400"
        timezone="Pacific/Auckland"
      />
      <TradingViewWidget
        symbol="BINANCE:BTCUSDT"
        interval="1"
        range="1d"
        width="550"
        height="400"
        timezone="Pacific/Auckland"
      />
      <TradingViewWidget
        symbol="OANDA:NZDUSD"
        interval="1"
        range="1d"
        width="550"
        height="400"
        timezone="Pacific/Auckland"
      />
      <TradingViewWidget
        symbol="NASDAQ:QQQ"
        interval="1"
        range="1d"
        width="550"
        height="400"
        timezone="Pacific/Auckland"
      />
    </div>
  );
};

export default ChartList;
