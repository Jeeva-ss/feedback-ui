import { Link } from "react-router-dom";

function Header({
	text = "Feedback UI",
	bgColor = "rgba(0,0,0,0.4)",
	textColor = "#ff6a95",
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
