
export default function NavigatorBar(){
	return (
		<div className="shadow-xl w-8/12 flex h-full items-center bg-white m-2 p-5 rounded-xl">
			<div className="relative w-7 h-0.5 bg-slate-500 after:absolute after:content-[' '] after:right-0 after:bg-slate-500 after:w-2 after:h-2 after:rotate-45 after:top-1/2 after:-translate-y-1/2"></div>
			<div className="ml-3 font-medium text-slate-500">
				My Profile
			</div>
		</div>
	)
}