import React, { Fragment, useEffect } from "react";
import { DataGrid } from "@material-ui/data-grid";
import "./productList.css";
import { useSelector, useDispatch } from "react-redux";
import {
  getProducts,
  clearErrors,
} from "../../actions/productAction";
import { useAlert } from "react-alert";
import MetaData from "../Layout/MetaData";
import SideBar from "./Sidebar";

const ProductList = ({ history }) => {
  const dispatch = useDispatch();

  const alert = useAlert();

  const { error, products } = useSelector((state) => state.products);
  
  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    dispatch(getProducts());
  }, [dispatch, alert, error, history]);
  
  const columns = [
    { 
      field: "id", 
      headerName: "Product ID", 
      minWidth: 20,
      flex: 0.5,
    },
    {
      field: "product_name",
      headerName: "Name",
      minWidth: 50,
      flex: 0.3,
    },
    {
      field: "quantity",
      headerName: "Quantity",
      minWidth: 100,
      flex: 0.3,
    },
    {
      field: "category_name",
      headerName: "Category",
      minWidth: 20,
      flex: 0.5,
    },
    {
      field: "section_name",
      headerName: "Section",
      minWidth: 20,
      flex: 0.5,
    },
    {
      field: "warehouse_name",
      headerName: "Warehouse",
      minWidth: 20,
      flex: 0.5,
    },
  ];

  const rows = [];

  products &&
    products.forEach((item, index) => {
      rows.push({
        id: index+1,
        product_id: item.product_id,
        product_name: item.product_name,
        quantity: item.quantity,
        category_name: item.category_name,
        section_name: item.section_name,
        warehouse_name: item.warehouse_name,
    });
  });
  console.log(products)

  return (
    <Fragment>
      <MetaData title={`ALL PRODUCTS`} />

      <div className="dashboard">
        <SideBar />
        <div className="productListContainer">
          <h1 id="productListHeading">ALL PRODUCTS</h1>

          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={10}
            disableSelectionOnClick
            className="productListTable"
            autoHeight
          />
        </div>
      </div>
    </Fragment>
  );
};

export default ProductList;
