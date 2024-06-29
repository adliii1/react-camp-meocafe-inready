import { createContext, useContext } from "react";
import Button from "../components/ui/Button";
import Child from "./Child";

const PlaygroundContext = createContext();

const PlaygroundProvider = ({ children }) => {
	const a = 1;
	return (
		<PlaygroundContext.Provider value={a}>
			{children}
		</PlaygroundContext.Provider>
	);
};

const Playground = () => {
	const value = 1;
	return (
		<>
			<Child value={value} />
		</>
	);
};

export default Playground;
