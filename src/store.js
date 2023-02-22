import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { newProductReducer, productsReducer } from "./reducers/productReducer";
import { userReducer } from "./reducers/userReducer";
import { newWarehouseReducer, warehousesReducer } from "./reducers/warehouseReducer";
import { newSectionReducer, sectionsReducer } from "./reducers/sectionReducer";
import { categoriesReducer, newCategoryReducer } from "./reducers/categoryReducer";


const reducer = combineReducers({
  products: productsReducer,
  newProduct: newProductReducer,
  user: userReducer,
  warehouses: warehousesReducer,
  newWarehouse: newWarehouseReducer,
  sections: sectionsReducer,
  newSection: newSectionReducer,
  categories: categoriesReducer,
  newCategory: newCategoryReducer
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
