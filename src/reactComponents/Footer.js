/** @format */

import React from "react";
import { Link } from "react-router-dom";

function Footer() {
	return (
		<>
			<footer className="footer">
				<div className="row">
					<small className="col-1-of-3">
						<ul className="footer_links">
							<Link to="/" className="link">
								<li>subscribe to our news letter</li>
							</Link>
							<Link to="/" className="link">
								<li>company profile</li>
							</Link>
							<Link to="/" className="link">
								<li>resources</li>
							</Link>
							<Link to="/" className="link">
								<li>contact us</li>
							</Link>
						</ul>
					</small>
					<small className="col-1-of-3">
						<ul className="footer_social-links">
							<Link to="/" className="link">
								<li>twitter</li>
							</Link>
							<Link to="/" className="link">
								<li>facebook</li>
							</Link>
							<Link to="/" className="link">
								<li>instagram</li>
							</Link>
						</ul>
					</small>
					<div className="col-1-of-3">
						<small className="footer_contact">
							<p>
								2nd Avenue, Off Iorzua Ayatse Street, Logo I, Makurdi, Benue
								State
							</p>
							<p>09098406763</p>
							<p>08160943669</p>
							<p>08098406763</p>
							<p className="copyright">
								&copy; Tersa Digital Solutions 2022. All rights
								reserved.
							</p>
						</small>
					</div>
				</div>
			</footer>
		</>
	);
}

export default Footer;
