import React from 'react';
import CoinItem from './CoinRow';
import "../styles/Coins.css";
import { Link } from 'react-router-dom';

const Coins = (props) => {
  return (
    <div className="container">
        <div>
            <div className="header">
                <p>#</p>
                <p className="coin-name">Coin</p>
                <p>Price</p>
                <p>24h</p>
                <p className="hide-sm">Volume</p>
                <p className="hide-sm">Mkt Cap</p>
            </div>
            
            {props.coins.map(coins => {
                return(
                    <Link to={`/coin/${coins.id}`}>
                        <CoinItem coins={coins} key={coins.id} />
                    </Link>
                )
            })}
        </div>
    </div>
  )
}

export default Coins;