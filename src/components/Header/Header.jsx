import logo from "./logo.svg";
import menu from "./menu.svg";
import "./Header.css";

function Header() {
	return (
		<>
			<div className="container">
				<header className="cite-header">
					<div className="header">
						<a className="header-logo-link">
							<img
								className="header-logo"
								src={logo}
								alt="site logo img"
								width="92"
								height="40"
							/>
						</a>
						<div>
						<ul className="header-list">
							<li className="list-item">
								<a className="item-link">Booking</a>
							</li>
							<li className="list-item">
								<a className="item-link">Facilities</a>
							</li>
							<li className="list-item">
								<a className="item-link">About Us</a>
							</li>
							<li className="list-item">
								<a className="item-link">Location</a>
							</li>
							<li className="list-item">
								<a className="item-link">Contact</a>
							</li>
							<div className="header-left-search-content">
							  <img
								className="header-menu"
								src={menu}
								alt="menu img"
								width="24"
								height="24"
							  />
							  <a className="site-regestar" href="#">
								Sign In
							  </a>
						</div>
						</ul>

						
						</div>
					</div>
				</header>
			</div>
		</>
	);
}

export default Header;
