type CardSchema = {
	className: string
	currency: string
	amount: string
	title: string
}
type Activity = {
	icon: (props: any) => JSX.Element
	title: string
	code: string
	className: string
}
