import React from "react";
import JSONDATA from "./static/tickers.json";
import "./styles/Home.css";
import { useState } from "react";
import Stock from "./Stock";
import { useNavigate } from "react-router-dom";
function Home() {
    let history = useNavigate();
    const [symbol, setSymbol] = useState('');
  const [searchTerm, setSearchTerm] = useState("");
  const passTickerInfo = (x) => {
      let path = x.val;
      setSearchTerm(path);
      console.log(path);
      history('/stock', { state: path });
  }
  return (
    <div className="Home">
      <input type="text" placeholder="Search for stock..." 
      onChange={event => {
          setSearchTerm(event.target.value)
          }}/>
      {JSONDATA.filter((val) => {
          if (searchTerm == '') {
              return val
          } else if (val.toLowerCase().includes(searchTerm.toLowerCase())) {
              return val
          }
      }).map((val, key) => {
        return (
          <button onClick={() => passTickerInfo({val})} className="tickers" key={key}>
            <p>{val}</p>
          </button>
        );
      })}
    </div>
  );
}

export default Home;
