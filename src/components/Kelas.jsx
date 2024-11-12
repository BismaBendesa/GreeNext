import Navbar from "./Navbar";
const Kelas = () => {
	const navigate = useNavigate();

	const handleDaftarClick = () => {
		navigate("/detailkls");
	};

	return (
		<>
		<Navbar/>
		<div className="container" style={{ marginBottom: "20%" }}>
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

			{/* -------------- Layout Konten Utama -------- */}
			<div className="main-content">
				{/* ---------- Sidebar Filter --> */}
				<div className="filter">
					<select>
						<option>Jenis Teknologi</option>
						<option>IoT</option>
						<option>Big Data</option>
						<option>Agroekologi</option>
					</select>
					<select>
						<option>Tingkat Kesulitan</option>
						<option>Pemula</option>
						<option>Menengah</option>
						<option>Lanjut</option>
					</select>
					<select>
						<option>Pelatihan</option>
						<option>Gratis</option>
						<option>Berbayar</option>
					</select>
					<select>
						<option>Harga</option>
						<option>Promo</option>
						<option>Terpopuler</option>
					</select>
					<select>
						<option>Sertifikasi</option>
						<option>Terbaru</option>
						<option>Terpopuler</option>
					</select>
				</div>

				{/* ---------------- Daftar Kursus ------------- */}
				<div className="daftar-kursus display-flex flex-direction-column">
					{/* <!-- Kursus 1 --> */}
					<div className="course-item">
						<div className="konten-course">
							<p className="title-course">Pengantar Pertanian Modern</p>
							<p className="deskripsi-course">
								Kursus ini memberikan pemahaman dasar tentang pertanian modern,
								mulai dari praktik pertanian tradisional hingga perkembangan
								teknologi yang diterapkan ...
								<a href="/detailkls" className="next">
									Baca Selengkapnya
								</a>
							</p>
							<div className="tag-course">
								<span>Menengah</span>
								<span>4.8/5</span>
								<span>Gratis</span>
							</div>
						</div>
						<div className="action-section">
							<div className="content">
								<img src="./foto1.jpg" alt="" />
								<a href="/detailkls" className="button-daftar">Daftar Sekarang</a>
							</div>
						</div>
					</div>

					{/* Add onClick to other buttons similarly */}
					<div className="course-item">
						<div className="konten-course">
							<p className="title-course">
								Pertanian Berkelanjutan dan Agreokologi
							</p>
							<p className="deskripsi-course">
								Fokus pada konsep dan praktik pertanian berkelanjutan, kursus
								ini mengajarkan tenang bagaimana meminimalkan dampak lingkungan
								dari aktivitas pertanian ...
								<a href="/detailkls" className="next">
									Baca Selengkapnya
								</a>
							</p>
							<div className="tag-course">
								<span>Menengah</span>
								<span>4.8/5</span>
								<span>Gratis</span>
							</div>
						</div>
						<img src="./foto2.jpg" alt="" />
						<a href="/detailkls" className="button-daftar">Daftar Sekarang</a>
					</div>

					<div className="course-item">
						<div className="konten-course">
							<p className="title-course">Teknik irigasi Cerdas</p>
							<p className="deskripsi-course">
								Kursus ini mengeksplorasi metode irigasi modern yang cerdas
								seperti drip irigation, yang dapat mengoptimalkan penggunaan air
								dalam pertanian ...
								<a href="/detailkls" className="next">
									Baca Selengkapnya
								</a>
							</p>
							<div className="tag-course">
								<span>Menengah</span>
								<span>4.8/5</span>
								<span>Gratis</span>
							</div>
						</div>
						<img src="./foto3.jpg" alt="" />
						<a href="/detailkls" className="button-daftar">Daftar Sekarang</a>
					</div>

					<div className="course-item">
						<div className="konten-course">
							<p className="title-course">Konsep Panduan Pertanian Presisi</p>
							<p className="deskripsi-course">
								Kursus ini secara komprehensif memperkenalkan sistem panduan
								otomatis yang penting untuk pertanian modern ini. dimulai dengan
								gambaran umum tentang ...
								<a href="#" className="next">
									Baca Selengkapnya
								</a>
							</p>
							<div className="tag-course">
								<span>Menengah</span>
								<span>4.8/5</span>
								<span>Gratis</span>
							</div>
						</div>
						<img src="./foto4.jpg" alt="" />
						<button className="button-daftar">Daftar Sekarang</button>
					</div>

					<div className="course-item">
						<div className="konten-course">
							<p className="title-course">
								Pemanfaatan Teknologi IoT dalam Pertanian
							</p>
							<p className="deskripsi-course">
								Kursus ini membahas bagaimana Internet of Things (Iot) daat
								diterapkan untukmeningkatkan efisiensi dan produktivitas
								pertanian. peserta akan belajar tentang ...
								<a href="#" className="next">
									Baca Selengkapnya
								</a>
							</p>
							<div className="tag-course">
								<span>Menengah</span>
								<span>4.8/5</span>
								<span>Gratis</span>
							</div>
						</div>
						<img src="./foto5.jpg" alt="" />
						<button className="button-daftar">Daftar Sekarang</button>
					</div>

					<div className="course-item">
						<div className="konten-course">
							<p className="title-course">
								Pemanfaatan Big data dan AI untuk Pertanian
							</p>
							<p className="deskripsi-course">
								Di era digital, penggunaan Big Data dan kecerdasan buatan AI
								dapat membantu meningkatkan hasil pertanian dan mengurangi
								risiko. Kursus ini menjelaskna ...
								<a href="#" className="next">
									Baca Selengkapnya
								</a>
							</p>
							<div className="tag-course">
								<span>Menengah</span>
								<span>4.8/5</span>
								<span>Gratis</span>
							</div>
						</div>
						<img src="./foto6.jpg" alt="" />
						<button className="button-daftar">Daftar Sekarang</button>
					</div>
				</div>
			</div>

			<div className="pagination">
				<a href="#" className="prev disabled">
					← Sebelumnya
				</a>
				<span className="page-numbers">
					<a href="#" className="page active">
						1
					</a>
					<a href="#" className="page">
						2
					</a>
					<a href="#" className="page">
						3
					</a>
					<span className="dots">...</span>
					<a href="#" className="page">
						12
					</a>
					<a href="#" className="page">
						13
					</a>
				</span>
				<a href="#" className="next">
					Selanjutnya →
				</a>
			</div>
		</div>
		</>
	);
};

export default Kelas;
