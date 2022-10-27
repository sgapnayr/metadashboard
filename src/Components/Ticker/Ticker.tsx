import './Ticker.css'

interface Props {

}

const Ticker: React.FC<Props> = () => {
    return (
        <div className="TickerWrapper">
            <div className="Ticker">
                <div className="TickerInfo">
                    ↑CPI: 2.3%
                </div>
            </div>
            <div className="Ticker">
                <div className="TickerInfo">
                    HPI increases
                </div>
            </div>
        </div>
    )
}

export default Ticker