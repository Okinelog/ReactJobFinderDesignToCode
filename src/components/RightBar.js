import Header from "./Header"
import ProfileCard from "./ProfileCard"
import JobCard from "./JobCard"
import StatusCard from "./StatusCard"

export default function RightBar(){
	return (
		<div className="w-full p-9">
			<Header />
			<div className="flex">
				<ProfileCard />
				<div className="flex flex-col w-4/12 m-2">
					<JobCard title="Senior UI/UX Designer" company="Softserve Corp" price="$ 14 000 - 30 000" type="Remote" location="Illinoise, Chicago" />
					<JobCard title="Senior UI/UX Designer" company="Softserve Corp" price="$ 14 000 - 30 000" type="Full Time" location="Virginia, Richmond" />
				</div>
			</div>
			<div className="flex">
				<StatusCard title="Applied Jobs" day="3 month" value="70" color="text-amber-400" />
				<StatusCard title="Viewed By" day="3 day" value="40" color="text-indigo-600" />
				<StatusCard title="Invited" day="1 month" value="50" color="text-green-500" 	/>

			</div>
		</div>
	)
}