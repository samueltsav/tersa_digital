/** @format */

import React from "react";
import PartnersLogo from "./PartnersLogo";
import etisalat from "../images/9mobile_logo.png";
import mtn from "../images/mtn_logo.png";
import glo from "../images/glo_logo.jpg";
import interswitch from "../images/interswitch_logo.png";

function Partners() {
	return (
		<>
			<section className="partners">
				<div className="row">
					<h2 className="heading_secondary">our global partners</h2>
					{<PartnersLogo name={etisalat} alt="9mobile_logo" />}
					{<PartnersLogo name={mtn} alt="mtn_logo" />}
					{<PartnersLogo name={glo} alt="glo_logo" />}
					{<PartnersLogo name={interswitch} alt="interswitch_logo" />}
				</div>
			</section>
		</>
	);
}

export default Partners;
