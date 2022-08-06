import LeftBar from "./components/LeftBar";
import RightBar from "./components/RightBar";
function App() {
	return (
		<div className="w-full h-full flex items-center justify-between">
			<LeftBar/>
			<RightBar />
		</div>
	);
}

export default App;
