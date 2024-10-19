import { FaQuestion } from "react-icons/fa";
import { Link } from "react-router-dom";

function AboutIconLink() {
	return (
		<div className="about-link">
			<Link
				// to={{
				// 	pathname: "/about",
				// 	search: "?sort=name",
				// 	hash: "#hello",
				// }}
				to="/about"
			>
				<FaQuestion className="fa-question" />
			</Link>
		</div>
	);
}
export default AboutIconLink;
