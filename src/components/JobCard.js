
export default function JobCard({title, company, price, type, location}){
	return (
		<div className="w-full p-9 shadow-xl flex flex-col bg-white mb-2 rounded-xl">
			<div className="flex justify-between mb-6">
				<div className="h-full flex flex-col justify-between">
					<div className="text-indigo-500 font-extrabold">{title}</div>
					<div className="text-slate-500 text-sm">{company}</div>
				</div>
				<div className="w-16">
					<img className="h-16 w-16 rounded-lg" src="https://picsum.photos/400/400" alt="" />
				</div>
			</div>
			<div className="flex text-slate-700 font-extrabold text-xl mb-8">
				{price}
			</div>
			<div className="flex w-full">
				<button className="bg-white border border-slate-500 rounded-md py-3 px-4 mr-3 text-slate-500 text-sm">
					{type}
				</button>
				<button className="py-3 px-4 text-slate-500 text-sm bg-indigo-50 rounded-md">
					{location}
				</button>
			</div>
		</div>
	)
}
