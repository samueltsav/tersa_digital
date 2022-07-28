/** @format */

import React from "react";
import { Link } from "react-router-dom";

function Solutions() {
	return (
		<>
			<section className="solutions">
				<h2 className="heading_secondary">our solutions for your business</h2>

				<div className="row">
					<div className="col-1-of-3">
						<div className="solutions_box">
							<h3 className="heading_tertiary heading_tertiary-solutions">
								fountain basic
							</h3>
							<p className="solutions_box-text">
								Lobortis, consectetuer integer felis ridiculus nisl porttitor
								bibendum placerat fringilla duis quisque conubia ad. Conubia at.
								Tempor. Dolor rutrum odio sit nullam convallis. Urna vehicula
								arcu nam. Laoreet sollicitudin erat. Metus. Platea faucibus
								integer facilisis, odio suspendisse metus et suscipit class
								malesuada taciti torquent dictum. Mollis quis consequat sociis
								aliquam elit integer tellus consequat curabitur dictum feugiat.
								Nostra mauris penatibus non dolor aptent mauris. Est. Gravida
								augue. Dictum non purus montes tristique auctor consequat sapien
								est ultricies vivamus neque sociis ultrices bibendum. Eu egestas
								lacus, luctus morbi Metus a ullamcorper. Turpis suspendisse
								libero scelerisque risus iaculis velit pharetra nisl dignissim.
							</p>
							<div className="solutions_btn">
								<Link to="/" className="btn_link">
									<button className="btn_secondary btn_secondary-solutions">
										sign up now
									</button>
								</Link>
							</div>
						</div>
					</div>
					<div className="col-1-of-3">
						<div className="solutions_box">
							<h3 className="heading_tertiary heading_tertiary-solutions">
								fountain advanced
							</h3>
							<p className="solutions_box-text">
								Lobortis, consectetuer integer felis ridiculus nisl porttitor
								bibendum placerat fringilla duis quisque conubia ad. Conubia at.
								Tempor. Dolor rutrum odio sit nullam convallis. Urna vehicula
								arcu nam. Laoreet sollicitudin erat. Metus. Platea faucibus
								integer facilisis, odio suspendisse metus et suscipit class
								malesuada taciti torquent dictum. Mollis quis consequat sociis
								aliquam elit integer tellus consequat curabitur dictum feugiat.
								Nostra mauris penatibus non dolor aptent mauris. Est. Gravida
								augue. Dictum non purus montes tristique auctor consequat sapien
								est ultricies vivamus neque sociis ultrices bibendum. Eu egestas
								lacus, luctus morbi Metus a ullamcorper. Turpis suspendisse
								libero scelerisque risus iaculis velit pharetra nisl dignissim.
							</p>
							<div className="solutions_btn">
								<Link to="/">
									<button className="btn_secondary btn_secondary-solutions">
										sign up now
									</button>
								</Link>
							</div>
						</div>
					</div>
					<div className="col-1-of-3">
						<div className="solutions_box">
							<h3 className="heading_tertiary heading_tertiary-solutions">
								fountain premium
							</h3>
							<p className="solutions_box-text">
								Lobortis, consectetuer integer felis ridiculus nisl porttitor
								bibendum placerat fringilla duis quisque conubia ad. Conubia at.
								Tempor. Dolor rutrum odio sit nullam convallis. Urna vehicula
								arcu nam. Laoreet sollicitudin erat. Metus. Platea faucibus
								integer facilisis, odio suspendisse metus et suscipit class
								malesuada taciti torquent dictum. Mollis quis consequat sociis
								aliquam elit integer tellus consequat curabitur dictum feugiat.
								Nostra mauris penatibus non dolor aptent mauris. Est. Gravida
								augue. Dictum non purus montes tristique auctor consequat sapien
								est ultricies vivamus neque sociis ultrices bibendum. Eu egestas
								lacus, luctus morbi Metus a ullamcorper. Turpis suspendisse
								libero scelerisque risus iaculis velit pharetra nisl dignissim.
							</p>
							<div className="solutions_btn">
								<Link to="/">
									<button className="btn_secondary btn_secondary-solutions">
										sign up now
									</button>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

export default Solutions;
