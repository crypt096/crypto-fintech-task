import React from "react";

function Home() {
  let bitfinexSocket = new WebSocket("wss://api-pub.bitfinex.com/ws/2");

  bitfinexSocket.onmessage = (msg) => {
    console.log(msg.data);
  };

  let msg = JSON.stringify({
    event: "subscribe",
    channel: "ticker",
    symbol: "tBTCUSD",
  });

  bitfinexSocket.onopen = () => bitfinexSocket.send(msg);
  return <div>Hello from Home component</div>;
}

export default Home;
