import React from "react";
import "./skills.css";
import image from "../../assets/image.png";
import web from "../../assets/web.png";
import mobile from "../../assets/mobile.png";

const Skills = () => {
	return (
		<section id='skills'>
			<span className='skillTitle'>What I do</span>
			<span className='skillDesc'>
				I am a skilled and passionate web developer with experience in
				developping intuitive and highly responsive web apps
			</span>
			<div className='skillBars'>
				<div className='skillBar'>
					<img src={web} alt='UIDesign' className='skillBarImg' />
					<div className='skillBarText'>
						<h2>Web Development</h2>
						<p>
							I can build a customized website tailored to your needs using the
							MERN Stack, delivering a responsive and high-performance solution.
						</p>
					</div>
				</div>
				<div className='skillBar'>
					<img src={mobile} alt='WebDesign' className='skillBarImg' />
					<div className='skillBarText'>
						<h2>Mobile Development</h2>
						<p>
							Additionally, I can develop a mobile app to complement your
							website, ensuring a seamless user experience across all platforms
							using Kotlin or React Native.
						</p>
					</div>
				</div>
				{/* <div className='skillBar'>
					<img src={image} alt='AppDesign' className='skillBarImg' />
					<div className='skillBarText'>
						<h2>App Design</h2>
						<p>This is a demo text, you can write your content here</p>
					</div>
				</div> */}
			</div>
		</section>
	);
};

export default Skills;
