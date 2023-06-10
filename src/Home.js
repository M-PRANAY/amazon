import React from "react";
import Header from "./Header";
import "./Home.css";
import Product from "./Product";
export default function Home() {
	return (
		<>
			<Header />
			<div className="home">
				<img
					className="home_image"
					src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Fashion/GW/MFD/Jun/Rev/Group_35-1500._CB603142420_.jpg"
					alt=""
				></img>
				<Product
					id="123456"
					title="Product 1"
					price={199.99}
					rating={4}
					image="/"
				/>
			</div>
		</>
	);
}
