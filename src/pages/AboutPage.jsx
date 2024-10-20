import { Link } from "react-router-dom";
import Card from "../shared/Card";

function AboutPage() {
	return (
		<Card>
			<div className="about">
				<h1>Audience Feedback Project</h1>
				<div>
					<p>
						All the fundamentals of React are covered in this project,
						including...
					</p>
					<strong>
						Components, JSX, Props, State, Styling, Events, Lists & Keys, Forms
						& Context API
					</strong>
					<p>
						<strong>Note</strong> : This app allows users to add, update and
						delete feedback
					</p>
				</div>
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
