import React from "react";
import "./works.css";
import image from "../../assets/image.png";
import gestion_recettes from "../../assets/gestion-menu.png";
import InterimWeb from "../../assets/intérim_web.png";
import InterimMobile from "../../assets/intérim_mobile.png";
import mobile_candidature from "../../assets/mobile_candidature.png";
import mobile_agenda from "../../assets/mobile_agenda.png";
import mobile_amis from "../../assets/mobile_amis.png";
import mobile_emploi from "../../assets/mobile_emploi.png";
import mobile_emplois from "../../assets/mobile_emplois.png";
import CrimeReportingSystem from "../../assets/crime_reporting_system.png";
import SmartBev from "../../assets/smart_bev.png";
import Slider from "./Slider";

import slide_image_1 from "../../assets/intérim_web.png";
import slide_image_2 from "../../assets/intérim_offres.png";
import slide_image_3 from "../../assets/intérim_candidatures.png";
import slide_image_4 from "../../assets/intérim_groupes.png";
import slide_image_5 from "../../assets/intérim_agenda.png";
import slide_image_6 from "../../assets/intérim_candidature.png";
import slide_image_7 from "../../assets/intérim_metiers.png";

const images_interim = [
	slide_image_1,
	slide_image_2,
	slide_image_3,
	slide_image_4,
	slide_image_5,
	slide_image_6,
	slide_image_7,
];

const images_myRecipes = [gestion_recettes];

const images_CrimeReportingSystem = [CrimeReportingSystem];

const images_SmartBev = [SmartBev];

const images_InterimMobile = [
	InterimMobile,
	mobile_candidature,
	mobile_agenda,
	mobile_amis,
	mobile_emploi,
	mobile_emplois,
];

const Works = () => {
	return (
		<section id='works'>
			<h2 className='worksTitle'>My Portfolio</h2>
			<span className='workDesc'>
				dedicated and passionate web developer with a strong foundation in
				front-end and back-end technologies. My expertise lies in creating
				responsive, user-friendly websites and web applications that deliver
				seamless user experiences.
			</span>
			<div className='worksImgs'>
				<div className='swiper_container'>
					<Slider
						title={"Intérim"}
						description={
							"A web application for managing job offers and applications for temporary work. This platform allows administrators to post job listings, track applications, and manage candidate information efficiently."
						}
						images={images_interim}
						type={"web"}
						technologies={["React", "Node.js", "Express", "MongoDB"]}
					/>
				</div>
				<div className='swiper_container'>
					<Slider
						title={"MyRecipes"}
						description={
							"A recipe guide website using HTML5, CSS3, PHP, JQuery, JavaScript, and Ajax. The website provides a management application for a recipe site, covering overall functionality and ingredient management."
						}
						images={images_myRecipes}
						type={"web"}
						technologies={["HTML", "CSS5", "Javascript", "JQuery", "PHP"]}
					/>
				</div>
				<div className='swiper_container'>
					<Slider
						title={"Crime Reporting System"}
						description={
							"A website designed for reporting thefts and incidents provides users with a secure platform to quickly log details of incidents, such as location, time, and type of theft or incident. Users can submit reports, attach images or documents for evidence, and view a dashboard of recent reports in their area."
						}
						images={images_CrimeReportingSystem}
						type={"web"}
						technologies={["React", "Tailwind CSS", "MUI"]}
					/>
				</div>
				<div className='swiper_container'>
					<Slider
						title={"Smart Bev"}
						description={
							"This web application enables remote management of automatic hot beverage dispensers, providing real-time statistics on usage, popular drinks, and machine status. Administrators can monitor inventory, schedule refills, and detect maintenance needs. I worked on it with a competent team and mainly participated in the front."
						}
						images={images_SmartBev}
						type={"web"}
						technologies={["React", "Tailwind CSS"]}
					/>
				</div>
				<div className='swiper_container'>
					<Slider
						title={"Intérim - Mobile App"}
						description={
							"A mobile application for managing job offers and applications for temporary work. This platform allows administrators to post job listings, track applications, and manage candidate information efficiently."
						}
						images={images_InterimMobile}
						technologies={["React Native", "Node.js", "Express", "MongoDB"]}
					/>
				</div>
				{/* <img src={InterimWeb} alt='' className='worksImg' />
				<img src={InterimMobile} alt='' className='worksImg' />
				<img src={CrimeReportingSystem} alt='' className='worksImg' />
				<img src={SmartBev} alt='' className='worksImg' /> */}
			</div>
			<button
				className='workBtn'
				onClick={() => window.open("https://github.com/Lamine-br", "_blank")}
			>
				See More
			</button>
		</section>
	);
};

export default Works;
