import classNames from "classnames";

export default function Button({content, push=false}){
	return (
		<div className={
			classNames({
				"flex items-center p-5 rounded-xl bg-white mx-2 shadow-xl": true,
				"relative after:absolute after:content-[' '] after:top-[calc(50%-5px)] after:-translate-y-1/2 after:right-[calc(50%-7px)] after:translate-x-1/2 after:bg-rose-500 after:w-2.5 after:h-2.5 after:border-[2px] after:rounded-full": push
			})
			}>
			{content}
		</div>
	)
}