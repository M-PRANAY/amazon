import React from "react";
import "./Header.css";
import logo from "./amazon-logo.png";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
export default function Header() {
	return (
		<nav className="header">
			{/* image logo */}
			<Link to="/home">
				<img className="header__logo" src={logo} alt="amazon-logo"></img>{" "}
			</Link>

			{/* search box */}
			<div className="header_search">
				<input type="text" className="header_searchbar"></input>
				<SearchIcon className="header_searchIcon" />
			</div>

			{/* 3 links */}
			<div className="header_nav">
				{/* 1st link */}
				<Link to="/login" className="header_link">
					<div className="header_option">
						<span>Hello,</span>
						<span>Sign In</span>
					</div>
				</Link>
				{/* 2nd link */}
				<Link to="/" className="header_link">
					<div className="header_option">
						<span>Returns,</span>
						<span>& Orders</span>
					</div>
				</Link>
				{/* 3rd link */}
				<Link to="/login" className="header_link">
					<div className="header_option">
						<span>Your</span>
						<span>Prime</span>
					</div>
				</Link>
			</div>
		</nav>
	);
}
