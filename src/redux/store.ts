import { createStore, combineReducers } from "redux";
import cartReducer from "./cart/reducer";

const rootReducer = combineReducers({
    cartReducer,
});

const store = createStore(rootReducer);

export type RootState = ReturnType<typeof rootReducer>;
export default store;
