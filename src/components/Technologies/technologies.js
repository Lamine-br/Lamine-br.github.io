import React from "react";
import "./technologies.css";
import react from "../../assets/react.png";
import node from "../../assets/node.png";
import mongoDB from "../../assets/mongoDB.png";
import express from "../../assets/express-js.png";
import java from "../../assets/java.png";

// List of technologies with their logos
const technologiesList = [
	{ name: "React", logo: react },
	{ name: "Node.js", logo: node },
	{ name: "Express", logo: express },
	{ name: "MongoDB", logo: mongoDB },
	{ name: "Java", logo: java },
	// Add more technologies as needed
];

const Technologies = () => {
	return (
		<section id='technologies'>
			<h2 className='technologiesTitle'>Technologies I Work With</h2>
			<div className='sliderContainer'>
				<div className='slider'>
					{technologiesList.map((tech, index) => (
						<div className='techItem' key={index}>
							<img src={tech.logo} alt={tech.name} className='techLogo' />
						</div>
					))}
					{/* Repeat the items for infinite effect */}
					{technologiesList.map((tech, index) => (
						<div className='techItem' key={index + technologiesList.length}>
							<img src={tech.logo} alt={tech.name} className='techLogo' />
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Technologies;
