import { createContext, useContext } from "react";
import Button from "../components/ui/Button";
import Child from "./Child";

export const PlaygroundContext = createContext();

export const PlaygroundProvider = ({ children }) => {
	const value = {
		a: 1,
	};
	return (
		<PlaygroundContext.Provider value={value}>
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
