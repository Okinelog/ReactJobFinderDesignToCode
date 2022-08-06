import { 
	ViewGridIcon,
	SearchIcon,
	FolderIcon,
	MailIcon,
	HeartIcon,
	GlobeIcon,
	ClipboardListIcon,
	InformationCircleIcon,
	KeyIcon,
	RefreshIcon
} from '@heroicons/react/outline'
import { UserIcon } from '@heroicons/react/solid'
import ListItem from './ListItem'
export function ListLeftBarMenu1(){
	return (
		<>
			<ul>
				<ListItem icon={<ViewGridIcon className="h-7 w-7 stroke-1 text-gray-400"/>} text="Dashboard" url="." />
				<ListItem icon={<SearchIcon className="h-7 w-7 stroke-1 text-gray-400"/>} text="Vacancies" url="." />
				<ListItem icon={<FolderIcon className="h-7 w-7 stroke-1 text-gray-400"/>} text="Applications" url="." />
				<ListItem icon={<MailIcon className="h-7 w-7 stroke-1 text-gray-400"/>} text="Messages" url="." />
				<ListItem icon={<HeartIcon className="h-7 w-7 stroke-1 text-gray-400"/>} text="Statistics" url="." />
				<ListItem icon={<GlobeIcon className="h-7 w-7 stroke-1 text-gray-400"/>} text="News" url="." />
				<ListItem icon={<ClipboardListIcon className="h-7 w-7 stroke-1 text-gray-400"/>} text="Schedule" url="." />
				<ListItem active={true} icon={<UserIcon className="h-7 w-7 stroke-1 text-indigo-700"/>} text="My Profile" url="." />
				<ListItem icon={<InformationCircleIcon className="h-7 w-7 stroke-1 text-gray-400"/>} text="Help" url="." />
			</ul>
		</>
	)
}
export function ListLeftBarMenu2(){
	return (
		<>
			<ul className=''>
				<ListItem icon={<KeyIcon className="h-7 w-7 stroke-1 text-gray-400"/>} text="Log Out" url="." />
				<ListItem icon={<RefreshIcon className="h-7 w-7 stroke-1 text-gray-400"/>} text="Change User" url="." />
			</ul>
		</>
	)
}