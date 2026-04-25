import React from "react";
import "./intro.css";
import bg from "../../assets/image.png";
import { Link } from "react-scroll";
import hire from "../../assets/hire.png";
import photo from "../../assets/photo.png";
import picture from "../../assets/picture.png";
import cv from "../../assets/CV.pdf";

const Intro = () => {
	return (
		<section id='intro'>
			<div className='introContent'>
				<span className='hello'>Hello,</span>
				<span className='introText'>
					I'm <span className='introName'>Lamine</span>
					<br /> Software Engineer
				</span>
				<p className='introPara'>
					I'm a dedicated software engineer specializing in application
					development,
					<br /> with a strong focus on web development and DevOps practices.
					<br />I build efficient, scalable applications with a commitment to
					quality <br /> and user experience.
				</p>

				<div className='buttonGroup'>
					<button className='btn' onClick={() => window.open(cv, "_blank")}>
						<img src={hire} alt='Download CV' className='btnImg' />
						Download CV
					</button>
				</div>
			</div>
			<img src={picture} alt='Profile' className='bg' />
		</section>
	);
};

export default Intro;
