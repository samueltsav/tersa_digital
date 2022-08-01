/** @format */

import React from "react";
import Navbar from "./Navbar";
import ButtonPrimary from "./ButtonPrimary";

function Header() {
	return (
		<>
			<header className="header">
				{<Navbar />}
				<div className="text_box">
					<h1 className="heading_primary">
						<span className="heading_primary-main">tersa digital solutions</span>
						<span className="heading_primary-sub">
							making school administration easier
						</span>
					</h1>
				</div>
				{<ButtonPrimary btn_name="Make Enquiry" />}
			</header>
		</>
	);
}

export default Header;
