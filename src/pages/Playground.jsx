import { useContext } from "react";
import Button from "../components/ui/Button";
import Child from "./Child";


const Playground = () => {
	const value = 1;
	return (
		<>
			<Child value={value} />
		</>
	);
};

export default Playground;
