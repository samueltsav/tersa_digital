/** @format */

import React from "react";
import Header from "../reactComponents/Header";
import Features from "../reactComponents/Features";
import Solutions from "../reactComponents/Solutions";
import Partners from "../reactComponents/Partners";
import Footer from "../reactComponents/Footer";

function Home() {
	return (
		<>
			{<Header />}
			{<Features />}
			{<Solutions />}
			{<Partners />}
			{<Footer />}
		</>
	);
}

export default Home;
