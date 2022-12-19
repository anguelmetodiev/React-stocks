import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import stocks from "../data";


export default function Stock(){
    const [stock, setStock] = useState({})

    const { symbol } = useParams();

    const findBySymbol = () => {
        setStock(stocks.find((element) => {
            return (
                element.symbol === symbol
            )
        }))
    }

    useEffect(() => {
        findBySymbol()
    }, [])

    

    return (
        <div className="ShowStock">
            <h1 className="stock-name">{stock.name}</h1>
            <h2>Symbol: {stock.symbol}</h2>
            <h2>Last Price: {stock.lastPrice}</h2>
            <h2>Change: {stock.change}</h2>
            <h2>High: {stock.high}</h2>
            <h2>Low: {stock.low}</h2>
            <h2>Open: {stock.open}</h2>
        </div>
    )
}