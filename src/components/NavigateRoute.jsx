import { Navigate, useNavigate, Routes, Route } from "react-router-dom";
import Card from "../shared/Card";
import Button from "../shared/Button";

function NavigateRoute() {
	const status = 200;
	const navigate = useNavigate();

	const handleClick = () => {
		console.log("Clicked...");
		navigate("/about");
	};

	if (!status === 200) return <Navigate to="/notfound" />;

	return (
		<div>
			<Card>
				<h1>navigate & useNavigate</h1>
				<div onClick={handleClick}>
					<Button>Click</Button>
				</div>
				<Routes>
					<Route
						path="/show"
						element={
							<div
								style={{
									background: "#0095bf",
									color: "white",
									margin: "1rem auto",
									borderRadius: "8px",
									padding: "1rem",
								}}
							>
								<p>Nested routes....</p>
							</div>
						}
					/>
				</Routes>
			</Card>
		</div>
	);
}
export default NavigateRoute;
