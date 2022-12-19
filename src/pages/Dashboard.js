import { Link } from "react-router-dom";

export default function Dashboard(props){
    const { stocks, getStock } = props;
    
    return (
        <div className="Dashboard">
            <table className="table">
                <tr className="table">
                    <th className="table-header">Company</th>
                    <th className="table-header">Symbol</th>
                    <th className="table-header">Last Price</th>
            </tr>
                {stocks.map((element) => {
                    
                    return (
                        <>
                            <tr>
                                <td className="row">
                                    <Link className="" to={`/stocks/${element.symbol}`}>{element.name}</Link>
                                    </td>
                                <td className="row">{element.symbol}</td>
                                <td className="row last-row">{element.lastPrice}</td>
                            </tr>
                        </>
                    )
                })}
            </table>
        </div>
    )
}
