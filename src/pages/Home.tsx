import CurrencyCard from "../components/currencyCard"
import { GiBlood, GiLungs, GiRibbon } from "react-icons/gi"
import TransactionForm from "../components/TransactionForm"
const data: CardSchema[] = [
	{ amount: "143.00", className: "text-red-500", currency: "AFYA", title: "balance" },
	{ amount: "R21.00", className: "text-blue-500", currency: "ZAR", title: "Equivalent" }
]

const activities: Activity[] = [
	{ code: "A100", icon: GiRibbon, title: "HIV Blood Draw Test", className: "text-red-700" },
	{ code: "A30", icon: GiLungs, title: "TB Radiology XRay", className: "text-blue-600" },
	{ code: "A10", icon: GiBlood, title: "Blood Pressure Check", className: "text-red-700" }
]
export default function Home() {
	return (
		<>
			<div className="max-w-screen-sm mx-auto shadow-lg mb-4 rounded-md grid-cols-2 grid overflow-hidden">
				{data.map(item => (
					<CurrencyCard key={item.title} {...item} />
				))}
			</div>
			<TransactionForm />
			<div className="bg-gray-400 mx-auto font-bold text-gray-700 max-w-screen-sm">
				<p className="text-white p-4">Recent Activity</p>
				{activities.map(item => (
					<div key={item.code} className="grid-cols-12 items-center border-b grid py-2 px-4 bg-white">
						<item.icon className={`text-5xl col-span-2 ${item.className}`} />
						<p className="col-span-8 px-2">{item.title}</p>
						<p>{item.code}</p>
					</div>
				))}
			</div>
		</>
	)
}
