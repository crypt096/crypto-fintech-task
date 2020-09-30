import React, { useEffect } from "react";

function Home() {
  // Sockets
  const BTCUSDSocket = new WebSocket("wss://api-pub.bitfinex.com/ws/2");
  const BTCEURSocket = new WebSocket("wss://api-pub.bitfinex.com/ws/2");
  const ETHUSDSocket = new WebSocket("wss://api-pub.bitfinex.com/ws/2");
  const ETHEURSocket = new WebSocket("wss://api-pub.bitfinex.com/ws/2");
  const EOSUSDSocket = new WebSocket("wss://api-pub.bitfinex.com/ws/2");

  // Socket onmessage, multiple useEffect,one for each socket
  useEffect(() => {
    BTCUSDSocket.onmessage = (BTCUSD) => {
      let response = Array.from(JSON.parse(BTCUSD.data))[1];
      if (response !== undefined && response !== "hb") {
        document.getElementById("BTCUSDDailyChange").innerHTML = response[4];
        document.getElementById("BTCUSDVolume").innerHTML = response[7];
        document.getElementById("BTCUSDLastPrice").innerHTML = response[6];
      }
    };
  }, [BTCUSDSocket.onmessage]);

  useEffect(() => {
    BTCEURSocket.onmessage = (BTCEUR) => {
      let response = Array.from(JSON.parse(BTCEUR.data))[1];
      if (response !== undefined && response !== "hb") {
        document.getElementById("BTCEURDailyChange").innerHTML = response[4];
        document.getElementById("BTCEURVolume").innerHTML = response[7];
        document.getElementById("BTCEURLastPrice").innerHTML = response[6];
      }
    };
  }, [BTCEURSocket.onmessage]);

  useEffect(() => {
    ETHUSDSocket.onmessage = (ETHUSD) => {
      let response = Array.from(JSON.parse(ETHUSD.data))[1];
      if (response !== undefined && response !== "hb") {
        document.getElementById("ETHUSDDailyChange").innerHTML = response[4];
        document.getElementById("ETHUSDVolume").innerHTML = response[7];
        document.getElementById("ETHUSDLastPrice").innerHTML = response[6];
      }
    };
  }, [ETHUSDSocket.onmessage]);

  useEffect(() => {
    ETHEURSocket.onmessage = (ETHEUR) => {
      let response = Array.from(JSON.parse(ETHEUR.data))[1];
      if (response !== undefined && response !== "hb") {
        document.getElementById("ETHEURDailyChange").innerHTML = response[4];
        document.getElementById("ETHEURVolume").innerHTML = response[7];
        document.getElementById("ETHEURLastPrice").innerHTML = response[6];
      }
    };
  }, [ETHEURSocket.onmessage]);

  useEffect(() => {
    EOSUSDSocket.onmessage = (EOSUSD) => {
      let response = Array.from(JSON.parse(EOSUSD.data))[1];
      if (response !== undefined && response !== "hb") {
        document.getElementById("EOSUSDDailyChange").innerHTML = response[4];
        document.getElementById("EOSUSDVolume").innerHTML = response[7];
        document.getElementById("EOSUSDLastPrice").innerHTML = response[6];
      }
    };
  }, [EOSUSDSocket.onmessage]);

  // Socket Config
  const BTCUSD = JSON.stringify({
    event: "subscribe",
    channel: "ticker",
    symbol: "tBTCUSD",
  });

  const BTCEUR = JSON.stringify({
    event: "subscribe",
    channel: "ticker",
    symbol: "tBTCEUR",
  });

  const ETHUSD = JSON.stringify({
    event: "subscribe",
    channel: "ticker",
    symbol: "tETHUSD",
  });

  const ETHEUR = JSON.stringify({
    event: "subscribe",
    channel: "ticker",
    symbol: "tETHEUR",
  });

  const EOSUSD = JSON.stringify({
    event: "subscribe",
    channel: "ticker",
    symbol: "tEOSUSD",
  });

  // Socket onopen
  BTCUSDSocket.onopen = () => BTCUSDSocket.send(BTCUSD);
  BTCEURSocket.onopen = () => BTCEURSocket.send(BTCEUR);
  ETHUSDSocket.onopen = () => ETHUSDSocket.send(ETHUSD);
  ETHEURSocket.onopen = () => ETHEURSocket.send(ETHEUR);
  EOSUSDSocket.onopen = () => EOSUSDSocket.send(EOSUSD);

  return (
    <>
      <div className="container-fluid-1280 mx-5 my-5">
        <table className="table table-bordered table-hover">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Symbol</th>
              <th scope="col">Daily change</th>
              <th scope="col">Volume</th>
              <th scope="col">Last price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>BTCUSD</td>
              <td id="BTCUSDDailyChange">0</td>
              <td id="BTCUSDVolume">0</td>
              <td id="BTCUSDLastPrice">0</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>BTCEUR</td>
              <td id="BTCEURDailyChange">0</td>
              <td id="BTCEURVolume">0</td>
              <td id="BTCEURLastPrice">0</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>ETHUSD</td>
              <td id="ETHUSDDailyChange">0</td>
              <td id="ETHUSDVolume">0</td>
              <td id="ETHUSDLastPrice">0</td>
            </tr>
            <tr>
              <th scope="row">4</th>
              <td>ETHEUR</td>
              <td id="ETHEURDailyChange">0</td>
              <td id="ETHEURVolume">0</td>
              <td id="ETHEURLastPrice">0</td>
            </tr>
            <tr>
              <th scope="row">5</th>
              <td>EOSUSD</td>
              <td id="EOSUSDDailyChange">0</td>
              <td id="EOSUSDVolume">0</td>
              <td id="EOSUSDLastPrice">0</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Home;
