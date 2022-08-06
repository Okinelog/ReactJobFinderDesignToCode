
import { 
	SearchIcon
} from '@heroicons/react/outline'
export default function SearchBar(){
	return (
		<div className="w-full shadow-xl flex justify-between h-full bg-white rounded-xl mr-2">
			<input type="text" placeholder="Search ..." className='w-full h-full p-5 block rounded-l-xl focus:outline-none' />
			<button className='bg-slate-500 block py-3 px-5 rounded-r-xl'>
				<SearchIcon className="h-5 w-5 stroke-2 text-white"/>
			</button>
		</div>
	)
}