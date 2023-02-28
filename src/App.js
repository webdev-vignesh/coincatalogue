import "./index.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Coins from "./components/Coins";
import CoinItem from "./components/CoinItem";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";

function App() {

  const [coins, setCoins] = useState([]);
  const url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=50&page=1&sparkline=false";

  useEffect(() => {
    axios.get(url).then((response) =>{
      setCoins(response.data)
      // console.log(response.data[0])
    }).catch((error) => {
      console.log(error)
    })
  }, [])

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/coincatalogue" element={ <Coins coins={coins} /> } />
        <Route path="/coin/:coinId" element={ <CoinItem  /> } />
      </Routes>
    </div>
  );
}

export default App;