import Flag from "../img/flag.png";
import Seatch from "../img/seatch.png";
import './card.css'



const Card = () => {
    return (
        <li className="site-card-li">

            <img className="card-img" src={Flag} width="264" height="160" alt="" />
            <div className="card-div">

                <h2 className="card-heading">
                    Uzbekistan
                </h2>

                 <ul className="site-card-list">
                    <li className="site-card-item"><p className="card-text"><span className="site-card-text">Population:</span>  35 445 000 </p></li>

                    <li className="site-card-item"><p className="card-text"><span className="site-card-text">Region:</span> Evropa </p></li>

                    <li className="site-card-item"><p className="card-text"><span className="site-card-text">Capital:</span> Toshkent.</p></li>
                 </ul>
            </div>
        </li>
    )

}

export default Card;