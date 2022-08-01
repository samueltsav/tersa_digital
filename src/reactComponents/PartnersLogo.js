/** @format */

import React from "react";

function PartnersLogo(props) {
	return (
		<div className="col-1-of-4">
			<img src={props.name} className="partners_logo" alt={props.alt} />
		</div>
	);
}

export default PartnersLogo;
