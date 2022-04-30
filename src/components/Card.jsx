import React from "react";

import apartment from "../images/harold-wainwright-HfMqFSgrQmw-unsplash.jpg";
import bath from "../images/bath.png";
import bed from "../images/bed (1) 1.png";
import fullScreen from "../images/full-screen 1.png";

import "./Card.css";

const Card = ({ status }) => {
	return (
		<div className="card-container">
			<img className="apartment" src={apartment} alt="apartment" />
			<h2 className="address">5300 Lakeside, Newyork</h2>

			<div className="buy-rate">
				<button>For Buy</button>
				<h2>$14,500</h2>
			</div>

			<div className="info">
				<div className="area">
					<img src={fullScreen} alt="full-screen" />
					<h3>1150 Sqft</h3>
				</div>

				<div className="rooms">
					<img src={bed} alt="bed" />
					<h3>4 Rooms</h3>
				</div>

				<div className="bath">
					<img src={bath} alt="bath" />
					<h3>2 Bath</h3>
				</div>
			</div>
		</div>
	);
};

export default Card;
