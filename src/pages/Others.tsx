import { useLocation } from "react-router-dom"

export default function Others() {
	const Location = useLocation()
	return <>{Location.pathname.replace("/", "")}</>
}
