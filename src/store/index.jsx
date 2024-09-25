import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counter-slice";
import themeReducer from "./slices/theme-slice";
import { Provider } from "react-redux";

const store = configureStore({
	reducer: {
		counter: counterReducer,
		theme: themeReducer,
	},
});
export const StoreProvider = ({ children }) => {
	return <Provider store={store}>{children}</Provider>;
};
