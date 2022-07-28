/** @format */

import React from "react";
import etisalat from "../images/9mobile_logo.png";
import mtn from "../images/mtn_logo.png";
import glo from "../images/glo_logo.jpg";
import interswitch from "../images/interswitch_logo.png";

function Partners() {
	return (
		<>
			<section className="partners">
				<h2 className="heading_secondary heading_secondary-partners">
					our partners
				</h2>
				<div className="row">
					<div className="col-1-of-4">
						<img src={etisalat} className="partners_logo" alt="9mobile-logo" />
					</div>
					<div className="col-1-of-4">
						<img src={mtn} className="partners_logo" alt="9mobile-logo" />
					</div>
					<div className="col-1-of-4">
						<img src={glo} className="partners_logo" alt="9mobile-logo" />
					</div>
					<div className="col-1-of-4">
						<img
							src={interswitch}
							className="partners_logo"
							alt="9mobile-logo"
						/>
					</div>
				</div>
			</section>
		</>
	);
}

export default Partners;
