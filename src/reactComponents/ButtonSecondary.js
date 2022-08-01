/** @format */

import { projectScope } from "npm";
import React from "react";
import { Link } from "react-router-dom";

function ButtonSecondary(props) {
	return (
		<>
			<div className="btn">
				<Link to="Contact" className="btn_link">
					<button className="btn_secondary">{props.btn_name}</button>
				</Link>
			</div>
		</>
	);
}

export default ButtonSecondary;
