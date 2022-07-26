/** @format */

import React from "react";
import Navbar from "./Navbar";
import Button from "./Button";

function Header() {
	return (
		<>
			<header className="header">
				{<Navbar />}
				<div className="text-box">
					<h1 className="heading-primary">
						<span className="heading-primary-main">fountain soft</span>
						<span className="heading-primary-sub">
							making school administration easier
						</span>
					</h1>
				</div>
				{<Button />}
			</header>
		</>
	);
}

export default Header;
