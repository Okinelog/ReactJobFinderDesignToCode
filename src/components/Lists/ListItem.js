import classNames from "classnames";

export default function ListItem({ icon, text, url, active=false }){
	return (
		<li className=
		{
			classNames({
				"border-l-2 py-3 flex items-center pl-3": true,
				"border-white": !active,
				"border-indigo-700 rounded": active
			})
		}>
			{icon}
			<span className=
			{
				classNames({
					"ml-5": true,
					"text-gray-400": !active,
					"text-indigo-700 font-bold": active
				})
			}>{text}</span>
		</li>
	)
}