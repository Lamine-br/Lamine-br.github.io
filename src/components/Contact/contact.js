import React, { useRef, useState } from "react";
import "./contact.css";
import image from "../../assets/image.png";
import linkedin from "../../assets/linkedin.png";
import instagram from "../../assets/Instagram.png";
import esi from "../../assets/esi_white.png";
import UM from "../../assets/logoUM.png";
import emailjs from "@emailjs/browser";

const Contact = () => {
	const form = useRef();
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");

	const sendEmail = (e) => {
		e.preventDefault();

		// Validation
		if (!name || !email || !message) {
			alert("Please fill in all the fields.");
			return;
		}

		emailjs
			.sendForm("service_ic6krar", "template_nl8tb9u", form.current, {
				publicKey: "jJOELp9Pa7Bs77_lR",
			})
			.then(
				() => {
					console.log("SUCCESS!");
					e.target.reset();
					alert("Email sent successfully");
					// Reset the state after success
					setName("");
					setEmail("");
					setMessage("");
				},
				(error) => {
					console.log("FAILED...", error.text);
				}
			);
	};

	return (
		<section id='contactPage'>
			{/* <div id='clients'>
				<h1 className='contactPageTitle'>My Clients</h1>
				<p className='clientDesc'>
					I have the opportunity to work with a diverse group of companies. Some
					of the notable companies I have worked with includes
				</p>
				<div className='clientImgs'>
					<img src={esi} alt='Client' className='clientImg' />
					<img src={image} alt='Client' className='clientImg' />
					<img src={image} alt='Client' className='clientImg' />
					<img src={image} alt='Client' className='clientImg' />
				</div>
			</div> */}
			<div id='formation'>
				<h1 className='formationPageTitle'>Formation</h1>
				<p className='formationDesc'>
					Throughout my academic journey, I have had the privilege of gaining
					knowledge from leading institutions. Some of the notable institutions
					I have attended include :
				</p>
				<div className='formationList'>
					<div className='formationItem'>
						<img
							src={esi}
							alt='École Nationale Supérieure d’Informatique (ESI)'
							className='formationImg'
							style={{ width: "60%", cursor: "pointer" }}
							onClick={() => window.open("https://www.esi.dz", "_blank")}
						/>
						<p className='formationItemDesc'>
							École Nationale Supérieure d’Informatique (ESI) – Computer Science
							Engineering Degree.
						</p>
					</div>
					<div className='formationItem'>
						<img
							src={UM}
							alt='University of Montpellier'
							className='formationImg'
							style={{ width: "40%", cursor: "pointer" }}
							onClick={() =>
								window.open("https://www.umontpellier.fr/", "_blank")
							}
						/>
						<p className='formationItemDesc'>
							University of Montpellier – Master’s in Software Engineering.
						</p>
					</div>
				</div>
			</div>

			<div id='contact'>
				<h1 className='contactPageTitle'>Contact Me</h1>
				<span className='contactDesc'>
					Please fill out the form below to discuss any work opportunities.
				</span>
				<form className='contactForm' ref={form} onSubmit={sendEmail}>
					<input
						type='text'
						className='name'
						placeholder='Your Name'
						name='to_name'
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
					<input
						type='email'
						className='email'
						placeholder='Your Email'
						name='from_name'
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
					<textarea
						className='msg'
						name='message'
						rows={5}
						placeholder='Your Message'
						value={message}
						onChange={(e) => setMessage(e.target.value)}
					></textarea>
					<button type='submit' value='Send' className='submitBtn'>
						Submit
					</button>
					<div className='links'>
						<a
							href='https://www.instagram.com/brahami_lamine/'
							target='_blank'
							rel='noopener noreferrer'
						>
							<img src={instagram} alt='Instagram' className='link' />
						</a>
						<a
							href='https://www.linkedin.com/in/lamine-brahami-b0a6991b0/'
							target='_blank'
							rel='noopener noreferrer'
						>
							<img src={linkedin} alt='Linkedin' className='link' />
						</a>
					</div>
				</form>
			</div>
		</section>
	);
};

export default Contact;
