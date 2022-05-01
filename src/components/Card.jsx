import React, { useState, useEffect } from "react";
import { AiOutlineHeart } from "react-icons/ai";

import apartment1 from "../images/apartment1.jpg";
import apartment2 from "../images/apartment2.jpg";
import apartment3 from "../images/apartment3.jpg";
import apartment4 from "../images/apartment4.jpg";
import apartment5 from "../images/apartment5.jpg";
import bath from "../images/bath.png";
import bed from "../images/bed (1) 1.png";
import fullScreen from "../images/full-screen 1.png";

import "./Card.css";

const Card = ({ buy, isFavourite }) => {
	const images = [apartment1, apartment2, apartment3, apartment4, apartment5];
	const [activeImageIndex, setActiveImageIndex] = useState(0);
	const [activeImage, setActiveImage] = useState(images[activeImageIndex]);
	const [favourite, setFavourite] = useState(isFavourite);

	useEffect(() => {
		setActiveImage(images[activeImageIndex]);
	}, [activeImageIndex]);

	setTimeout(
		() => setActiveImageIndex((activeImageIndex + 1) % images.length),
		3000
	);

	useEffect(() => {
		isFavourite = favourite;
	}, [favourite]);

	return (
		<div className="card-container">
			<img className="apartment" src={activeImage} alt="apartment" />

			<div
				onClick={() => setFavourite(!isFavourite)}
				className="heart-container"
			>
				<AiOutlineHeart
					style={{
						color: favourite ? "#D35D5D" : "#ffffff",
						"font-size": "2rem",
					}}
				/>
			</div>

			<div className="carousel">
				{images.map((image, index) => (
					<div
						className={index === activeImageIndex ? "active-dot" : "dot"}
					></div>
				))}
			</div>

			<h2 className="address">5300 Lakeside, Newyork</h2>

			<div className="buy-rate">
				<button> {buy ? "For Buy" : "For Rent"} </button>
				<h2>$14,500</h2>
				{!buy && <h3>$16,500</h3>}
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
