import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useState, useEffect } from "react";
import Spinner from "../components/Spinner"; // Pastikan path sesuai dengan lokasi Spinner.js
const Tentang = () => {
	const [loading, setLoading] = useState(true); // State untuk mengatur loading spinner

	useEffect(() => {
		const timer = setTimeout(() => {
			setLoading(false);
		}, 3000); // Simulasikan loading selama 3 detik

		return () => clearTimeout(timer);
	}, []);

	// Jika sedang loading, tampilkan spinner
	if (loading) {
		return <Spinner />;
	}
	return (
		<>
			<Navbar />
			<div className="container mt-0">
				<div className="about-section">
					<section className="about">
						<h2 style={{margin:"5rem auto 1rem auto", padding:"0rem 4rem"}}>Tentang Kita</h2>
						<div className="about-content mt-4" style={{display:"flex", padding:"0rem 4rem", gap:"3rem"}}>
							<div className="about-text">
								<p>
									<strong>FarmEduz</strong> adalah platform edukasi pertanian
									berbasis teknologi untuk masyarakat Indonesia, khususnya Gen
									Z.
								</p>
								<br />
								<p>
									Kami menyediakan berbagai course yang dirancang untuk
									memajukan inovasi sektor pertanian masa depan di Indonesia.
								</p>
								<br />
								<p>
									Team <br /> FarmEduz
								</p>
							</div>
							<img src="./about.jpg" className="about-image" />
						</div>
					</section>
				</div>

				<div className="features-section">
					<section className="features text-center">
						<h3>
							Kenapa <span>FarmEduz</span>?
						</h3>
						<div className="feature-list">
							<div className="feature-item">
								<img src="image.png" className="feature-icon" />
								<h4>Sertifikasi</h4>
								<p>
									Setiap kali berhasil menyelesaikan sebuah kelas, kamu akan
									mendapatkan Sertifikat.
								</p>
							</div>

							<div className="feature-item">
								<img src="image2.png" className="feature-icon" />
								<h4>Proses Pembelajaran Personalisasi</h4>
								<p>
									Kamu bebas memilih spesialisasi yang diinginkan agar dapat
									disesuaikan dengan kebutuhan saat ini.
								</p>
							</div>

							<div className="feature-item">
								<img src="image3.png" className="feature-icon" />
								<h4>Pembelajaran Berbasis Video</h4>
								<p>
									Materi secara praktis melalui sesi video, tutorial langkah
									demi langkah, dan studi kasus nyata dari praktisi terbaik.
								</p>
							</div>

							<div className="feature-item">
								<img src="image4.png" className="feature-icon" />
								<h4>Berdasarkan Kebutuhan Pertanian</h4>
								<p>
									Hemat waktu dan biaya! Materi FarmEduz dibuat agar lebih mudah
									dimengerti dan sesuai dengan kebutuhan.
								</p>
							</div>
						</div>
					</section>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default Tentang;
