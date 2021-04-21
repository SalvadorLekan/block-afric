import TransactionForm from "../components/TransactionForm"

const activities = [
	{
		date: "1/1/21",
		description: "Sent",
		amount: "N100.00"
	},
	{
		date: "2/2/21",
		description: "Received",
		amount: "N200.00"
	},
	{
		date: "3/3/21",
		description: "Sent",
		amount: "N300.00"
	}
]

export default function Wallet() {
	return (
		<>
			<div className="max-w-screen-sm mx-auto shadow-lg mb-4 rounded-lg text-center p-6 gap-6 grid bg-gray-300 overflow-hidden">
				<b className="text-lg">WALLET BALANCE</b>
				<b className="text-lg">TOKEN BALANCE:</b>
				<b className="text-lg">NAIRA BALANCE:</b>
			</div>
			<TransactionForm />
			<div className="bg-gray-400 mx-auto font-bold text-gray-700 max-w-screen-sm">
				<p className="text-white p-4">Recent Activity</p>

				<div className="grid-cols-3 items-center border-b grid py-2 px-4 bg-white">
					<b>Date</b>
					<b className="text-center">Description</b>
					<b className="text-right">Amount</b>
				</div>
				{activities.map((activity, i) => (
					<div key={i} className="grid-cols-3 items-center border-b grid py-2 px-4 bg-white">
						<b>{activity.date}</b>
						<b className="text-center">{activity.description}</b>
						<b className="text-right">{activity.amount}</b>
					</div>
				))}
			</div>
		</>
	)
}
