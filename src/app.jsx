import React from "react";
import { StoreProvider } from "./store";
import { Counter } from "./component/counter";
import { AppRouter } from "./router";

export const App = () => {
	return (
		<StoreProvider>
			<AppRouter />
		</StoreProvider>
	);
};
