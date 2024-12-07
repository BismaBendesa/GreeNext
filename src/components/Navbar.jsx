import Profile from "../assets/profile.png";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import {
	Dropdown,
	DropdownToggle,
	DropdownMenu,
	DropdownItem,
} from "reactstrap";

const Navbar = () => {
	const [dropdownOpen, setDropdownOpen] = useState(false);
	const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

	const location = useLocation();

	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
			<img src="./logo2.png" className="logo" alt="logo" />

			<div
				className="collapse navbar-collapse justify-content-center"
				id="navbarNav">
				<ul className="navbar-nav">
					<li className="nav-item me-5">
						<a
							className={`nav-link ${
								location.pathname === "/dashboard" ? "active-link" : ""
							}`}
							href="/dashboard">
							Dashboard
						</a>
					</li>

					<li className="nav-item me-5">
						<a
							className={`nav-link ${
								location.pathname === "/kelas" ? "active-link" : ""
							}`}
							href="/kelas">
							Kelas
						</a>
					</li>

					<li className="nav-item me-5">
						<a
							className={`nav-link ${
								location.pathname === "/sumberdaya" ? "active-link" : ""
							}`}
							href="/sumberdaya">
							Sumber Daya
						</a>
					</li>

					<li className="nav-item me-5">
						<a
							className={`nav-link ${
								location.pathname === "/tentang" ? "active-link" : ""
							}`}
							href="/tentang">
							Tentang Kita
						</a>
					</li>
				</ul>

				<div className="profile">
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
		</nav>
	);
};

export default Navbar;
