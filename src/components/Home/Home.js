import React, { useEffect } from "react";

function Home() {
  // Sockets
  const BTCUSDSocket = new WebSocket("wss://api-pub.bitfinex.com/ws/2");
  const BTCEURSocket = new WebSocket("wss://api-pub.bitfinex.com/ws/2");
  const ETHUSDSocket = new WebSocket("wss://api-pub.bitfinex.com/ws/2");
  const ETHEURSocket = new WebSocket("wss://api-pub.bitfinex.com/ws/2");
  const EOSUSDSocket = new WebSocket("wss://api-pub.bitfinex.com/ws/2");
  // Socket onmessage
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

  // BTCEURSocket.onmessage = (BTCEUR) => {
  //   console.log(`I am BTCEUR response: ${JSON.parse(BTCEUR.data)}`);
  // };

  // ETHUSDSocket.onmessage = (ETHUSD) => {
  //   console.log(`I am ETHUSD response: ${JSON.parse(ETHUSD.data)}`);
  // };

  // ETHEURSocket.onmessage = (ETHEUR) => {
  //   console.log(`I am ETHEUR response: ${JSON.parse(ETHEUR.data)}`);
  // };

  // EOSUSDSocket.onmessage = (EOSUSD) => {
  //   console.log(`I am EOSUSD response: ${JSON.parse(EOSUSD.data)}`);
  // };

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
              <td id="BTCUSDDailyChange"></td>
              <td id="BTCUSDVolume"></td>
              <td id="BTCUSDLastPrice"></td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Larry the Bird</td>
              <td>just a test</td>
              <td>@twitter</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">4</th>
              <td>Larry the Bird</td>
              <td>just a test</td>
              <td>@twitter</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">5</th>
              <td>Larry the Bird</td>
              <td>just a test</td>
              <td>@twitter</td>
              <td>@mdo</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Home;
