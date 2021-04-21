const data: CardSchema[] = [
	{ amount: "143.00", className: "text-red-500", currency: "AFYA", title: "balance" },
	{ amount: "R21.00", className: "text-blue-500", currency: "ZAR", title: "Equivalent" }
]

export default function TransactionForm() {
	return (
		<form className=" max-w-screen-sm mx-auto" onSubmit={e => e.preventDefault()}>
			<label className="py-4 px-2 block bg-gray-200 text-blue-500 font-extrabold">Select Currency</label>
			<fieldset className="flex my-4">
				<select className="p-2 flex-grow-0 flex-shrink-0">
					{data.map(item => (
						<option key={item.currency} value={item.currency}>
							{item.currency}
						</option>
					))}
				</select>
				<input type="number" className="flex-auto bg-gray-200 p-3" />
			</fieldset>
			<fieldset className="my-6 px-4 flex justify-around">
				<button className="bg-blue-500 text-white p-4 rounded-md">SEND</button>
				<button className="bg-blue-500 text-white p-4 rounded-md">RECEIVE</button>
			</fieldset>
		</form>
	)
}
