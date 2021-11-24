import React from "react";
import Acordeon from "./componentes/acordeon";
import Hero from "./componentes/hero";

function App() {
	return (
		<div className="App">
			<div className="container">
				<div className="row">
					<div className="col">
						<h1 className="visually-hidden">Heroes examples</h1>
						<Hero />
					</div>
				</div>
				<div className="row">
					<div className="col">
						<Acordeon />
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
