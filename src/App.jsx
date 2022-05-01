import React from "react";
import { BiChevronRight } from "react-icons/bi";

import Nav from "./components/Nav";
import Card from "./components/Card";

import "./app.css";

function App() {
	const apartmentStatus = [
		{
			buy: true,
			isFavourite: false,
		},
		{
			buy: false,
			isFavourite: false,
		},
		{
			buy: true,
			isFavourite: false,
		},
		{
			buy: false,
			isFavourite: false,
		},
		{
			buy: true,
			isFavourite: false,
		},
		{
			buy: true,
			isFavourite: false,
		},
		{
			buy: false,
			isFavourite: false,
		},
	];

	return (
		<div className="container">
			<Nav />
			<div className="grid-container">
				<div className="grid-title">
					<h2>All Apartments</h2>
					<button className="show-all-btn">Show All</button>
					<BiChevronRight
						style={{
							color: "#007882",
							"font-size": "3rem",
							cursor: "pointer",
						}}
					/>
				</div>

				<div className="card-list">
					{apartmentStatus.map(({ buy, isFavourite }, index) => (
						<Card key={++index} buy={buy} isFavourite={isFavourite} />
					))}
				</div>
			</div>
		</div>
	);
}

export default App;
