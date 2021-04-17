import { IoMdNotifications } from "react-icons/io"
import { FaStarOfDavid, FaUserCircle } from "react-icons/fa"
export default function Header() {
	return (
		<header className="text-3xl flex items-center justify-between py-4 px-2 flex-grow-0 flex-shrink-0">
			<div className="flex items-center">
				<FaStarOfDavid className="text-blue-700" />
				<h1 className="font-goldman font-bold text-pink-600">ribbon</h1>
			</div>
			<div className="grid grid-flow-col gap-4 text-red-500">
				<FaUserCircle />
				<IoMdNotifications />
			</div>
		</header>
	)
}
