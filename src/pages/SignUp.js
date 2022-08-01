/** @format */

import React from "react";
import Footer from "../reactComponents/Footer";
import Navbar from "../reactComponents/Navbar";
import { Link } from 'react-router-dom';
import ButtonSecondary from "../reactComponents/ButtonSecondary";

function SignUp() {
	return (
		<>
			{<Navbar />}
			<section classNameName="signUp">
				<div classNameName="row">
					<h2 className="heading_secondary">
						sign up and enjoy our topnotch services!
					</h2>
					<p className="long_copy">
						Please kindly fill the form below and select you preferred Package
					</p>
					<form action="" method="POST" className="signUp_form">
						<div className="form_group">
							<input
								type="text"
								name="name"
								className="form_input"
								id="name"
								placeholder="Your full name"
								required
							/>
							<label for="name" className="form_label">
								Name
							</label>
						</div>
						<div className="form_group">
							<input
								type="email"
								name="email"
								className="form_input"
								id="email"
								placeholder="Your email address"
								required
							/>
							<label for="email" className="form_label">
								Email address
							</label>
						</div>
						<div className="form_group">
							<input
								type="text"
								name="contact"
								className="form_input"
								id="contact"
								placeholder="Your phone number"
								required
							/>
							<label for="contact" className="form_label">
								Phone number
							</label>
						</div>
						<div className="form_group">
							<select name="program" className="form_input" id="program">
								<option value="select">Select your Package</option>
								<option value="basic">Basic</option>
								<option value="advanced">Advanced</option>
								<option value="premium">Premium</option>
							</select>
						</div>
						<div className="form_group">
							<div className="btn">
								<Link to="SignUp" className="btn_link">
									{<ButtonSecondary btn_name="Submit" />}
								</Link>
							</div>
						</div>
					</form>
				</div>
			</section>

			{<Footer />}
		</>
	);
}

export default SignUp;
