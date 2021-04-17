import Header from "./components/Header"
import { BrowserRouter, Route } from "react-router-dom"
import Home from "./pages/Home"
import Nav from "./components/Nav"
import Others from "./pages/Others"

export default function App() {
	return (
		<div className="container mx-auto flex flex-col h-screen">
			<Header />
			<BrowserRouter>
				<main className="overflow-auto flex-1">
					<Route exact path="/" component={Home} />
					<Route>
						<Others />
					</Route>
				</main>
				<Nav />
			</BrowserRouter>
		</div>
	)
}
