import { Link } from "react-router-dom";

function Header({
	text = "Feedback UI",
	bgColor = "#333",
	textColor = "#f98156",
	footer,
}) {
	const headerStyles = {
		backgroundColor: bgColor,
		color: textColor,
	};

	return (
		<header style={headerStyles}>
			<div className="container">
				<Link to="/" style={{ textDecoration: "none" }}>
					<h2>{text}</h2>
				</Link>
			</div>
		</header>
	);
}

export default Header;
