import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useState } from "react";
import { Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom"; // Import useNavigate
const Webinar = () => {
	const [activeButton, setActiveButton] = useState("home"); // Initialize activeButton state
	const navigate = useNavigate(); // Initialize navigation

	const handleButtonClick = (buttonName, path) => {
		setActiveButton(buttonName);
		navigate(path);
	};

	return (
		<>
			<Navbar />

			<Row
				className="py-3 d-flex text-left"
				style={{
					marginTop: "70px",
					marginLeft: "-255px",
					marginBottom: "-90px",
				}}>
				<Col>
					<h1 style={{ color: "#17412d" }}>Sumber Daya</h1>
				</Col>
				<Col
					className="text-end me-auto text-left"
					style={{ marginLeft: "-200px" }}>
					<Button
						className={`button-custom ${
							activeButton === "sumber" ? "active" : ""
						}`}
						onClick={() => handleButtonClick("sumber", "/sumberdaya")}>
						E-Book
					</Button>
					<Button
						className={`button-custom ${
							activeButton === "webinar" ? "active" : ""
						}`}
						onClick={() => handleButtonClick("webinar", "/webinar")}>
						Webinar & Seminar
					</Button>
					<Button
						className={`button-custom ${
							activeButton === "studikasus" ? "active" : ""
						}`}
						onClick={() => handleButtonClick("studikasus", "/studikasus")}>
						Studi Kasus
					</Button>
					<Button
						className={`button-custom ${
							activeButton === "histori" ? "active" : ""
						}`}
						onClick={() => handleButtonClick("histori", "/histori")}>
						Katalog teknologi
					</Button>
				</Col>
			</Row>

			<div className="container" style={{ marginBottom: "35%" }}>
				<div className="header">
					<div>
						<button className="button-filter justify-content-center align-items-center">
							Filter
						</button>
					</div>
					<div className="search-bar display-flex background-transparent">
						<i className="fa-solid fa-magnifying-glass"></i>
						<input type="text" placeholder="Cari kursus..." />
					</div>
					<i className="fa-regular fa-heart"></i>
					<i className="fa-solid fa-cart-shopping"></i>
				</div>

				<div>
					<h2 style={{ fontSize: "20pt" }}>62 Hasil Untuk "Pertanian"</h2>
				</div>

				{/* <div clasclassNames="container">
                        <div className="header">
                            <input type="text" placeholder="Search" className="search-bar" value="pertanian"/>
                            <p className="result-count">62 hasil untuk “pertanian”</p>
                        </div> */}

				<div className="highlighted-event">
					<img src="./foto3.jpg" alt="Highlight Event" />
					<div className="highlight-content">
						<h2>Pengenalan Sistem Pertanian Presisi</h2>
						<p>Lokasi: Lembang, Kabupaten Bandung, Jawa Barat</p>
						<p>24-25 Jan 2025</p>
					</div>
				</div>
				{/* </div> */}

				<div className="event-list">
					<div className="event-card">
						<img src="./foto5.jpg" alt="Event Thumbnail" />
						<div className="event-info">
							<h3>Pengenalan Sistem Pertanian </h3>
							<p>Lokasi: Lembang, Kabupaten Bandung, Jawa Barat</p>
							<p>Tanggal: 24-25 Jan 2025</p>
						</div>
						<button className="btn-status">Offline</button>
					</div>

					<div className="event-card">
						<img src="./foto5.jpg" alt="Event Thumbnail" />
						<div className="event-info">
							<h3>Pengenalan Sistem Pertanian</h3>
							<p>Lokasi: Lembang, Kabupaten Bandung, Jawa Barat</p>
							<p>Tanggal: 24-26 Jan 2025</p>
						</div>
						<button className="btn-status">Offline</button>
					</div>

					<div className="event-card">
						<img src="./foto5.jpg" alt="Event Thumbnail" />
						<div className="event-info">
							<h3>Pengenalan Sistem Pertanian</h3>
							<p>Lokasi: Lembang, Kabupaten Bandung, Jawa Barat</p>
							<p>Tanggal: 24-26 Jan 2025</p>
						</div>
						<button className="btn-status">Offline</button>
					</div>
				</div>
			</div>

			<Footer />
		</>
	);
};

export default Webinar;