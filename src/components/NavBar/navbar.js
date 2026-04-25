import React, { useState } from "react";
import "./navbar.css";
import logo from "../../assets/logo.png";
import menu from "../../assets/menu.png";
import contactImg from "../../assets/message.png";
import { Link } from "react-scroll";

const Navbar = () => {
	const [showMenu, setShowMenu] = useState(false);

	return (
		<nav className='navbar'>
			<img src={logo} alt='Logo' className='logo' />

			{/* Desktop Menu */}
			<div className='desktopMenu'>
				<Link
					to='intro'
					smooth={true}
					spy={true}
					offset={-100}
					duration={500}
					activeClass='active'
					className='desktopMenuListItem'
				>
					Home
				</Link>
				<Link
					to='skills'
					smooth={true}
					spy={true}
					offset={-100}
					duration={500}
					activeClass='active'
					className='desktopMenuListItem'
				>
					About
				</Link>
				<Link
					to='works'
					smooth={true}
					spy={true}
					offset={-100}
					duration={500}
					activeClass='active'
					className='desktopMenuListItem'
				>
					Portfolio
				</Link>
				<Link
					to='formation'
					smooth={true}
					spy={true}
					offset={-100}
					duration={500}
					activeClass='active'
					className='desktopMenuListItem'
				>
					Formation
				</Link>
			</div>

			{/* Contact Button */}
			<button
				className='desktopMenuBtn'
				onClick={() =>
					document
						.getElementById("contact")
						.scrollIntoView({ behavior: "smooth" })
				}
			>
				<img src={contactImg} alt='Contact' className='desktopMenuImg' />
				Contact me
			</button>

			{/* Mobile Menu Icon */}
			<img
				src={menu}
				alt='Menu'
				className='mobMenu'
				onClick={() => setShowMenu(!showMenu)}
			/>

			{/* Mobile Menu */}
			{showMenu && (
				<div className='navMenu'>
					<Link
						to='intro'
						smooth={true}
						spy={true}
						offset={-100}
						duration={500}
						activeClass='active'
						className='listItem'
						onClick={() => setShowMenu(false)}
					>
						Home
					</Link>
					<Link
						to='skills'
						smooth={true}
						spy={true}
						offset={-100}
						duration={500}
						activeClass='active'
						className='listItem'
						onClick={() => setShowMenu(false)}
					>
						About
					</Link>
					<Link
						to='works'
						smooth={true}
						spy={true}
						offset={-100}
						duration={500}
						activeClass='active'
						className='listItem'
						onClick={() => setShowMenu(false)}
					>
						Portfolio
					</Link>
					<Link
						to='formation'
						smooth={true}
						spy={true}
						offset={-100}
						duration={500}
						activeClass='active'
						className='listItem'
						onClick={() => setShowMenu(false)}
					>
						Formation
					</Link>
					<Link
						to='contact'
						smooth={true}
						spy={true}
						offset={-100}
						duration={500}
						activeClass='active'
						className='listItem'
						onClick={() => setShowMenu(false)}
					>
						Contact
					</Link>
				</div>
			)}
		</nav>
	);
};

export default Navbar;
