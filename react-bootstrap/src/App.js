import React from "react";
import Acordeon from "./componentes/acordeon";
import Hero from "./componentes/hero";

function App() {
	return (
		<div class="App">
			<div class="container">
				<div class="row">
					<div class="col">
						<h1 class="visually-hidden">Heroes examples</h1>
						<Hero />
					</div>
				</div>
				<div class="row">
					<div class="col">
						<Acordeon />
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
