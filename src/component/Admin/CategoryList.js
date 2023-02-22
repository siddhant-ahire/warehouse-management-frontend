import React, { Fragment, useEffect } from "react";
import { DataGrid } from "@material-ui/data-grid";
import "./categoryList.css";
import { useSelector, useDispatch } from "react-redux";

import {
  getCategories,
  clearErrors,
} from "../../actions/categoryAction";
import { useAlert } from "react-alert";
import MetaData from "../Layout/MetaData";
import SideBar from "./Sidebar";

const CategoryList = ({ history }) => {
  const dispatch = useDispatch();

  const alert = useAlert();

  const { error, categories } = useSelector((state) => state.categories);
  
  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    dispatch(getCategories());
  }, [dispatch, alert, error, history]);
  
  const columns = [
    { 
      field: "id", 
      headerName: "Category ID", 
      minWidth: 20,
      flex: 0.1,
    },
    {
      field: "name",
      headerName: "Category",
      minWidth: 20,
      flex: 0.5,
    },
  ];

  const rows = [];

  categories &&
    categories.forEach((item, index) => {
      rows.push({
        id: index+1,
        category_id: item.category_id,
        name: item.name,
    });
  });
  console.log(categories)

  return (
    <Fragment>
      <MetaData title={`ALL CATEGORIES`} />

      <div className="dashboard">
        <SideBar />
        <div className="categoryListContainer">
          <h1 id="categoryListHeading">ALL CATEGORIES</h1>

          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={10}
            disableSelectionOnClick
            className="categoryListTable"
            autoHeight
          />
        </div>
      </div>
    </Fragment>
  );
};

export default CategoryList;
