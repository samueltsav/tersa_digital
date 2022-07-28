/** @format */

import React from "react";
import { Link } from "react-router-dom";

function Button() {
	return (
		<>
			<div className="btn_primary">
				<Link to="/" className="btn_link">
					<button className="btn_primary-full">enquire</button>
					<button className="btn_primary-ghost">sign up</button>
				</Link>
			</div>
		</>
	);
}

export default Button;
