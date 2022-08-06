import NavigatorBar from "./Navigator"
import SearchBar from "./SearchBar"
import Button from "./Button"
import { 
	HeartIcon,
	BellIcon
} from '@heroicons/react/solid'

export default function Header(){
	return (
		<div className="w-full flex items-center">
			<NavigatorBar />
			<div className="w-4/12 flex h-full items-center m-2">
				<SearchBar />
				<Button push={true} content={<BellIcon className="h-5 w-5 stroke-2 text-slate-500"/>}/>
				<Button push={true} content={<HeartIcon className="h-5 w-5 stroke-2 text-slate-500"/>}/>
			</div>
		</div>
	)
}