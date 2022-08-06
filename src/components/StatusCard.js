
export default function StatusCard({title, day, value, color}){
	return (
		<div className="shadow-xl w-full flex justify-between bg-white m-2 p-8 rounded-xl">
			<div className="flex justify-between flex-col">
                <div className="font-semibold text-slate-500">{title}</div>
                <div className="font-medium text-sm text-slate-300">During {day}</div>
			</div>
            <div className="inline-flex items-center justify-center rounded-full">
                <svg class="w-20 h-20">
                    <circle class="text-slate-300" stroke-width="10" stroke="currentColor" fill="transparent" r="30" cx="40" cy="40" />
                    <circle class={color} stroke-width="10" stroke-dasharray="200" stroke-dashoffset={200 / 100 * value} stroke-linecap="round" stroke="currentColor" fill="transparent" r="30" cx="40" cy="40"/>
                </svg>
                <span class={"absolute text-xl " + color}>{100 - value}</span>
            </div>
		</div>
	)
}