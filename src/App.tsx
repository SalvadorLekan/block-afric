import Header from "./components/Header"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Home from "./pages/Home"
import Nav from "./components/Nav"
import Others from "./pages/Others"
import Wallet from "./pages/Wallet"

export default function App() {
	return (
		<div className="container mx-auto flex flex-col h-screen">
			<Header />
			<BrowserRouter>
				<main className="overflow-auto flex-1">
					<Switch>
						<Route exact path="/" component={Home} />
						<Route exact path="/wallet" component={Wallet} />
						<Route>
							<Others />
						</Route>
					</Switch>
				</main>
				<Nav />
			</BrowserRouter>
		</div>
	)
}
