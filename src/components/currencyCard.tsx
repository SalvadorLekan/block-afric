export default function CurrencyCard(props: CardSchema) {
	return (
		<div className="text-white bg-pink-600 flex flex-col items-center py-4 justify-around">
			<div className="bg-white w-12 flex items-center justify-center h-12 rounded-full">
				<p className={`font-extrabold ${props.className}`}> {props.currency} </p>
			</div>
			<p className="text-xl font-extrabold py-2">{props.amount}</p>
			<p>{props.title}</p>
		</div>
	)
}
