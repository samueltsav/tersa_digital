/** @format */

import React from "react";
import cbt from "../images/cbt.png";
import studying from "../images/student_studying.jpg";
import attendance from "../images/attendance_register.png";
import school from "../images/school.jpg";
import clock from "../images/clock.jpg";

function Features() {
	return (
		<>
			<section className="features">
				<h2 className="heading_secondary">our core features</h2>
				<div className="row">
					<div className="col-1-of-3">
						<img src={cbt} className="features_icon" alt="cbt-icon" />
					</div>
					<div className="col-2-of-3">
						<div className="features_text">
							<h3 className="heading_tertiary">computer-based testing</h3>
							<p className="features_text-paragraph">
								Quisque quam potenti felis. Feugiat nisi sagittis dapibus nec.
								Class ipsum semper convallis duis consectetuer natoque pede
								ligula aptent ipsum ultricies. Rutrum euismod elit vehicula
								maecenas. Ultricies erat nascetur parturient lacus amet magnis.
								Inceptos velit felis tellus Pellentesque dolor rutrum eu. Sed
								donec interdum. Sollicitudin netus. Quis, turpis. Class lorem.
							</p>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-1-of-3">
						<img
							src={studying}
							className="features_icon"
							alt="Child studying"
						/>
					</div>
					<div className="col-2-of-3">
						<div className="features_text">
							<h3 className="heading_tertiary">online learning</h3>
							<p className="features_text-paragraph">
								tNonummy pharetra fringilla dis enim id Morbi magna potenti
								maecenas montes volutpat tellus quis. Tortor primis porta non
								lacus cras. Dui est commodo duis adipiscing arcu adipiscing, ac
								risus vitae. Pharetra porttitor primis. Dapibus euismod felis
								vitae hendrerit ornare fermentum sem a fames taciti feugiat
								molestie sem et gravida elit.
							</p>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-1-of-3">
						<img
							src={attendance}
							className="features_icon"
							alt="register-icon"
						/>
					</div>
					<div className="col-2-of-3">
						<div className="features_text">
							<h3 className="heading_tertiary">online attendance register</h3>
							<p className="features_text-paragraph">
								Pulvinar sem sem torquent. Per rutrum odio id dolor faucibus.
								Orci sollicitudin per auctor nec sodales adipiscing mauris.
								Varius eget taciti bibendum sit lacus egestas aptent pharetra
								lacinia nisl. In. Ornare maecenas metus lacus nibh gravida duis
								viverra dis varius class vitae lectus. Justo nonummy. Tempus
								Montes nam adipiscing. Semper.
							</p>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-1-of-3">
						<img src={school} className="features_icon" alt="school-icon" />
					</div>
					<div className="col-2-of-3">
						<div className="features_text">
							<h3 className="heading_tertiary">general school management</h3>
							<p className="features_text-paragraph">
								Tortor ultrices sapien euismod. Natoque Quisque turpis ante at
								suscipit vehicula id magnis lacinia nec. Nec, proin ornare duis
								felis faucibus consequat felis. Faucibus pulvinar integer dolor
								phasellus quis nunc elit sapien mollis bibendum pede leo Etiam.
								Elit feugiat augue turpis blandit. Justo mollis ultrices
								penatibus nascetur eleifend vitae. Cum.
							</p>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-1-of-3">
						<img src={clock} className="features_icon" alt="clock-icon" />
					</div>
					<div className="col-2-of-3">
						<div className="features_text">
							<h3 className="heading_tertiary">24 hours support</h3>
							<p className="features_text-paragraph">
								Lacinia proin netus aenean Augue fermentum nisl elit dignissim
								Penatibus quis metus vulputate sociosqu habitant sem fermentum
								nam velit sem egestas odio. Quam per, litora malesuada ad class.
								Turpis, leo hendrerit. Ipsum purus. Metus aliquet proin ligula
								integer laoreet imperdiet urna mi. Mus suscipit interdum, quam
								quisque non vestibulum mauris.
							</p>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

export default Features;
