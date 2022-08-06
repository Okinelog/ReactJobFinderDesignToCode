import logo from '../logo.png'
import {ListLeftBarMenu1, ListLeftBarMenu2} from './Lists/Lists'
export default function LeftBar(){
	return (
		<>
			<div className='h-full bg-white p-9'>
				<img className="h-12 mb-6" src={logo} alt="Logo" />
				<div className='flex flex-col w-full h-[calc(100%-100px)] justify-between'>
					<ListLeftBarMenu1 />
					<ListLeftBarMenu2 />
				</div>
			</div>
		</>
	)
}