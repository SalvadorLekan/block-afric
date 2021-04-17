import { FaGift, FaHome, FaWallet } from "react-icons/fa"
import { IoIosListBox } from "react-icons/io"
import { AiFillShop } from "react-icons/ai"
import { NavLink } from "react-router-dom"
const navList = [
	{
		icon: FaHome,
		name: "Home",
		to: "/"
	},
	{ icon: IoIosListBox, name: "Activity", to: "/activity" },
	{
		icon: FaWallet,
		name: "Wallet",
		to: "/wallet"
	},
	{
		icon: AiFillShop,
		name: "Market",
		to: "/market"
	},
	{
		icon: FaGift,
		name: "Earn",
		to: "/earn"
	}
]

export default function Nav() {
	return (
		<nav className="py-4 flex-shrink-0 flex-grow-0">
			<ul className="grid grid-flow-col mx-auto max-w-screen-sm w-full">
				{navList.map(item => (
					<li key={item.name}>
						<NavLink
							exact
							to={item.to}
							className="flex flex-col items-center text-red-700 text-opacity-70 font-bold"
							activeClassName="text-opacity-100">
							<item.icon className="text-3xl" /> {item.name}
						</NavLink>
					</li>
				))}
			</ul>
		</nav>
	)
}
