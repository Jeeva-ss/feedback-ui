import { Link } from "react-router-dom";
import Card from "../shared/Card";

function AboutPage() {
	return (
		<Card>
			<div className="about">
				<h1>About This Project</h1>
				<p>
					All the fundamentals of React are covered in this project,
					including...
					<br />
					<strong>
						Components, JSX, Props, State (Component & App Level), Styling,
						Events, Lists & Keys, Forms & Context API
					</strong>
					<p>
						<strong>Note</strong> : This app allows users to add, update and
						delete feedback
					</p>
				</p>
				<p>
					<strong>React Version</strong> : 18.3.1
				</p>
				<p>
					<Link to="/">Back to home</Link>
				</p>
			</div>
		</Card>
	);
}
export default AboutPage;
