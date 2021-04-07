import logo from './assets/images/logo.svg';
import hamburger from './assets/images/hamburger.svg';

function Header() {
	return (
		<header>
			<img src={logo} alt="Logo" />
			<button type="button" class="hamburger-menu">
				<img src={hamburger} alt="Botão do menu" />
			</button>
			<nav class="navbar">
				<a href="#" class="navbar-home">
					Home
				</a>
				<a href="#">Pokédex</a>
				<a href="#" class="navbar-legendaries">
					Legendaries
				</a>
				<a href="#">Documentation</a>
			</nav>
		</header>
	);
}

export default Header;
