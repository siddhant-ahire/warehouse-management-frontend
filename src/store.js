import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { newProductReducer, productsReducer } from "./reducers/productReducer";
import { userReducer } from "./reducers/userReducer";
import { warehousesReducer } from "./reducers/warehouseReducer";
import { sectionsReducer } from "./reducers/sectionReducer";
import { categorysReducer } from "./reducers/categoryReducer";


const reducer = combineReducers({
  products: productsReducer,
  newProduct: newProductReducer,
  user: userReducer,
  warehouses: warehousesReducer,
  sections: sectionsReducer,
  categorys: categorysReducer
});

let initialState = {
  products: [],
  warehouses: [],
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
