// Navbar paling atas warna hijau
import Profile from "../assets/profile.png";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import {
	Dropdown,
	DropdownToggle,
	DropdownMenu,
	DropdownItem,
} from "reactstrap";

const NavbarWeb = () => {
	const [dropdownOpen, setDropdownOpen] = useState(false);
	const toggleDropdown = () => setDropdownOpen(!dropdownOpen);
	const location = useLocation();

	// Helper function to determine active link style
	const getLinkClass = (path) => {
		location.pathname === path ? "active-link" : "";

		return (
			<nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top align-items-center">
				<img src="./logo2.png" className="logo me-3" alt="logo" />

				<div className="collapse navbar-collapse">
					<div className="mx-auto d-flex justify-content-center align-items-center">
						<ul className="navbar-nav">
							<li className="nav-item me-5">
								<a className={`nav-link ${getLinkClass("/home")}`} href="/home">
									Dashboard
								</a>
							</li>

							<li className="nav-item me-5">
								<a
									className={`nav-link ${getLinkClass("/kelas")}`}
									href="/kelas">
									Kelas
								</a>
							</li>

							<li className="nav-item me-5">
								<a className="nav-link" href="/sumberdaya">
									Sumber Daya
								</a>
							</li>

							<li className="nav-item me-5">
								<a className="nav-link" href="/tentang">
									Tentang Kita
								</a>
							</li>

							<li className="nav-item me-5">
								<a
									className={`nav-link ${getLinkClass("/komunitas")}`}
									href="/komunitas">
									Komunitas
								</a>
							</li>

							{/* punya ali */}

							{/* <li className="nav-item me-5">
								<a
									className={`nav-link ${getLinkClass("/sumberdaya")}`}
									href="/sumberdaya">
									Sumber Daya
								</a>
						</li> */}

							{/* <li className="nav-item me-5">
								<a
									className={`nav-link ${getLinkClass("/sumberdaya")}`}
									href="/sumberdaya">
									Sumber Daya
								</a>
							</li>
	
							
	
							<li className="nav-item me-5">
								<a
									className={`nav-link ${getLinkClass("/tentangkita")}`}
									href="/tentangkita">
									Tentang Kita
								</a>
							</li> */}
						</ul>
						<div />

						<div className="profile ms-auto">
							<Dropdown isOpen={dropdownOpen} toggle={toggleDropdown}>
								<DropdownToggle
									className="profile-btn d-flex align-items-center"
									style={{
										backgroundColor: "#17412d",
										border: "none",
										marginLeft: "4px",
									}}
									caret>
									<img
										src={Profile}
										alt="Profile"
										className="rounded-circle me-2"
										style={{ width: "30px", height: "30px" }}
									/>
									Profile
								</DropdownToggle>
								<DropdownMenu>
									<DropdownItem href="/">Log Out</DropdownItem>
									<DropdownItem href="/profile">Profile</DropdownItem>
								</DropdownMenu>
							</Dropdown>
						</div>
					</div>
				</div>
			</nav>
		);
	};
};

export default NavbarWeb;
