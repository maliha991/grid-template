import React from "react";
import { BiChevronRight } from "react-icons/bi";

import Nav from "./components/Nav";
import Card from "./components/Card";

import "./app.css";

function App() {
	const apartmentBuyingStatus = [true, false, true, false, true, true, true];
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
					{apartmentBuyingStatus.map((status) => (
						<Card status={status} />
					))}
				</div>
			</div>
		</div>
	);
}

export default App;
