import React from "react";

function Home() {
  const BTCUSDSocket = new WebSocket("wss://api-pub.bitfinex.com/ws/2");
  const BTCEURSocket = new WebSocket("wss://api-pub.bitfinex.com/ws/2");
  const ETHUSDSocket = new WebSocket("wss://api-pub.bitfinex.com/ws/2");
  const ETHEURSocket = new WebSocket("wss://api-pub.bitfinex.com/ws/2");
  const EOSUSDSocket = new WebSocket("wss://api-pub.bitfinex.com/ws/2");

  // Socket onmessage
  BTCUSDSocket.onmessage = (BTCUSD) => {
    console.log(Array.from(JSON.parse(BTCUSD.data))[1]);
  };

  BTCEURSocket.onmessage = (BTCEUR) => {
    console.log(`I am BTCEUR response: ${JSON.parse(BTCEUR.data)}`);
  };

  ETHUSDSocket.onmessage = (ETHUSD) => {
    console.log(`I am ETHUSD response: ${JSON.parse(ETHUSD.data)}`);
  };

  ETHEURSocket.onmessage = (ETHEUR) => {
    console.log(`I am ETHEUR response: ${JSON.parse(ETHEUR.data)}`);
  };

  EOSUSDSocket.onmessage = (EOSUSD) => {
    console.log(`I am EOSUSD response: ${JSON.parse(EOSUSD.data)}`);
  };

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

  return <div>Hello from Home component</div>;
}

export default Home;
