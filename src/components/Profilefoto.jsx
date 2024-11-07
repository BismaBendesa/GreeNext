import { useNavigate } from "react-router-dom";
import profile from "../assets/profile.png";

const Profilefoto = () => {
	const navigate = useNavigate();

	return (
		<div className="container" id="profilefoto">
			<div className="sidebar">
				<img src={profile} alt="Profile Picture" />
				<h3>Wahyu Rojolele</h3>
				<p>@wahyurojolele123</p>
				
				<div className="button-sidebar">
					<button onClick={() => navigate("/profile")}>Profil</button>
				</div>

				<div className="button-sidebar">
					<button onClick={() => navigate("/fotoprofile")}>Foto</button>
				</div>

				<div className="button-sidebar">
					<button onClick={() => navigate("/pemberitahuan")}>Pemberitahuan</button>
				</div>

				<div className="button-sidebar">
					<button onClick={() => navigate("/privasi")}>Privasi</button>
				</div>

				<div className="button-sidebar">
					<button onClick={() => navigate("/keamanan")}>Keamanan</button>
				</div>

				<div className="button-sidebar">
					<button onClick={() => navigate("/keluar")}>Keluar Akun</button>
				</div>
			</div>

			<main className="content">
				<h1>Foto</h1>
				<p>Tambahkan foto Anda yang bagus untuk profil</p>
				<hr />
				<div className="photo-preview">
					<p>Pratinjau Gambar</p>
					<div className="placeholder-icon">
						<i className="fa-regular fa-user"></i>
					</div>
					<div>
						<label>Tambah atau Ganti Gambar</label>
						<input type="text" value="Tidak ada gambar yang dipilih" readOnly></input>
						{/* <input type="file" id="upload-photo" className="upload-input" /> */}
					</div>
					<button className="upload-button">Unggah Gambar</button>
					<button className="save-button">Simpan Perubahan</button>
				</div>
			</main>
		</div>
	);
};

export default Profilefoto;
