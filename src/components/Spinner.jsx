import "../Styles/Spinner.css"; // Pastikan path file benar
const Spinner = () => {
	return (
		<div
			className="d-flex justify-content-center align-items-center"
			style={{ height: "100vh" }}>
			<div className="spinner-border spinner-custom" role="status">
				<span className="visually-hidden">Loading...</span>
			</div>
		</div>
	);
};

export default Spinner;
