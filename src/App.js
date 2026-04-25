import Navbar from "./components/NavBar/navbar";
import Intro from "./components/Intro/intro";
import Skills from "./components/Skills/skills";
import Technologies from "./components/Technologies/technologies";
import Works from "./components/Works/works";
import Contact from "./components/Contact/contact";
import Footer from "./components/Footer/footer";

function App() {
	return (
		<div className='App'>
			<Navbar />
			<Intro />
			<Skills />
			<Technologies />
			<Works />
			<Contact />
			<Footer />
		</div>
	);
}

export default App;
