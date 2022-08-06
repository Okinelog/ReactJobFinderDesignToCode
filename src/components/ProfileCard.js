
import { 
	PaperClipIcon
} from '@heroicons/react/solid'
export default function ProfileCard(){
	return (
		<div className="justify-center shadow-xl w-8/12 flex flex-col bg-white m-2 p-8 rounded-xl">
			<div className="flex items-center border-b pb-8 mb-8">
				<img className="mr-8 h-28 w-28 rounded-full block" src="https://picsum.photos/400/400" alt="PP" />
				<div className="w-full flex flex-col justify-between h-full">
					<div className="mb-4 h-full w-full flex justify-between items-center">
						<div className="text-2xl font-semibold text-slate-600">George Levinson</div>
						<div><PaperClipIcon className="h-5 w-5 stroke-2 text-indigo-600"/></div>
					</div>
					<div className="text-base text-indigo-600 font-normal">Employee</div>
					<div className="text-base text-slate-600">USA, Illinoise, Chicago</div>
				</div>
			</div>
			<div className="h-full flex flex-col justify-around flex-1">
				<div className="flex w-full justify-between text-slate-600">
					<div className="font-medium">Current Position</div>
					<div className="font-normal">UX/UI Designer</div>
				</div>
				<div className="flex w-full justify-between text-slate-600">
					<div className="font-medium">Industry</div>
					<div className="font-normal">Computer Networking</div>
				</div>
				<div className="flex w-full justify-between text-slate-600">
					<div className="font-medium">Phone Number</div>
					<div className="font-normal">001-541-754-3010</div>
				</div>
				<div className="flex w-full justify-between text-slate-600">
					<div className="font-medium">E-Mail</div>
					<div className="font-normal">okinelog@gmail.com</div>
				</div>
				<div className="flex w-full justify-between text-slate-600">
					<div className="font-medium">LinkedIn</div>
					<div className="font-normal">www.linkedin.com/oki....</div>
				</div>
			</div>
		</div>
	)
}