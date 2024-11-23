import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useState } from "react";
import { Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom"; // Import useNavigate
const StudiKasus = () => {
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
					<h1 style={{ color: "#17412d" }}>Studi Kasus</h1>
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
						onClick={() => handleButtonClick("katalogteknologi", "/katalogteknologi")}>
						Katalog teknologi
					</Button>
				</Col>
			</Row>

            <div className="container" id="studikasus" style={{ marginBottom: "23%" }}>
                <div className="header">
                    <div className="search-bar display-flex background-transparent">
                        <i className="fa-solid fa-magnifying-glass"></i>
                        <input type="text" placeholder="Pertanian" />
                    </div>
                        {/* <i className="fa-regular fa-heart"></i>
                        <i className="fa-solid fa-cart-shopping"></i> */}

                        <div className="course-item-horizontal">
							<a href="/studikasusdetail">
								<div className="konten-course-horizontal">
									<p className="title-course">Penerapan Pertanian Presisi (Presisi Agriculture)</p>
									
									<div className="tag-course">
										<span>isi icon sukai/love</span>
										<span>isi icon download</span>
										<span>isi icon simpan</span>
									</div>
								</div>
							</a>
							
							<div className="image-button-container">
								<img src="./foto2.jpg" alt="Course" className="course-image" />
								<div className="tag-course">
									<span>isi icon mata/tlh dibaca</span>
									<span>isi icon panah kanan/tlh teruskan</span>
								</div>
							</div>
						</div>
                        
                        <div className="course-item-horizontal">
							<a href="/studikasusdetail">
								<div className="konten-course-horizontal">
									<p className="title-course">Penerapan Pertanian Presisi (Presisi Agriculture)</p>
									
									<div className="tag-course">
										<span>isi icon sukai/love</span>
										<span>isi icon download</span>
										<span>isi icon simpan</span>
									</div>
								</div>
							</a>
							<div className="image-button-container">
								<img src="./foto2.jpg" alt="Course" className="course-image" />
								<div className="tag-course">
									<span>isi icon mata/tlh dibaca</span>
									<span>isi icon panah kanan/tlh teruskan</span>
								</div>
							</div>
						</div>

                        <div className="course-item-horizontal">
							<a href="/studikasusdetail">
								<div className="konten-course-horizontal">
									<p className="title-course">Penerapan Pertanian Presisi (Presisi Agriculture)</p>
									
									<div className="tag-course">
										<span>isi icon sukai/love</span>
										<span>isi icon download</span>
										<span>isi icon simpan</span>
									</div>
								</div>
							</a>
							<div className="image-button-container">
								<img src="./foto2.jpg" alt="Course" className="course-image" />
								<div className="tag-course">
									<span>isi icon mata/tlh dibaca</span>
									<span>isi icon panah kanan/tlh teruskan</span>
								</div>
							</div>
						</div>

                        <div className="course-item-horizontal">
							<a href="/studikasusdetail">
								<div className="konten-course-horizontal">
									<p className="title-course">Penerapan Pertanian Presisi (Presisi Agriculture)</p>
									
									<div className="tag-course">
										<span>isi icon sukai/love</span>
										<span>isi icon download</span>
										<span>isi icon simpan</span>
									</div>
								</div>
							</a>
							<div className="image-button-container">
								<img src="./foto2.jpg" alt="Course" className="course-image" />
								<div className="tag-course">
									<span>isi icon mata/tlh dibaca</span>
									<span>isi icon panah kanan/tlh teruskan</span>
								</div>
							</div>
						</div>

                </div>

            </div>
            <Footer />
		</>
	);
};

export default StudiKasus;