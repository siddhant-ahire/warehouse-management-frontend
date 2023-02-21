import React, { Fragment, useEffect } from "react";
import { DataGrid } from "@material-ui/data-grid";
import "./warehouseList.css";
import { useSelector, useDispatch } from "react-redux";

import {
  getWarehouses,
  clearErrors,
} from "../../actions/warehouseAction";
import { useAlert } from "react-alert";
import MetaData from "../Layout/MetaData";
import SideBar from "./Sidebar";

const WarehouseList = ({ history }) => {
  const dispatch = useDispatch();

  const alert = useAlert();

  const { error, warehouses } = useSelector((state) => state.warehouses);
  
  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    dispatch(getWarehouses());
  }, [dispatch, alert, error, history]);
  
  const columns = [
    { 
      field: "id", 
      headerName: "Warehouse ID", 
      minWidth: 20,
      flex: 0.1,
    },
    {
      field: "name",
      headerName: "Warehouse",
      minWidth: 20,
      flex: 0.5,
    },
    {
      field: "location",
      headerName: "Location",
      minWidth: 20,
      flex: 0.5,
    },
    {
      field: "unique_code",
      headerName: "Unique Code",
      minWidth: 20,
      flex: 0.5,
    },
    {
      field: "total_capacity",
      headerName: "Total Capacity",
      minWidth: 20,
      flex: 0.5,
    },
    {
      field: "status",
      headerName: "Status",
      minWidth: 20,
      flex: 0.5,
    },
  ];

  const rows = [];

  warehouses &&
    warehouses.forEach((item, index) => {
      rows.push({
        id: index+1,
        warehouse_id: item.warehouse_id,
        name: item.name,
        location: item.location,
        unique_code: item.unique_code,
        total_capacity: item.total_capacity,
        status: item.status
    });
  });
  console.log(warehouses)

  return (
    <Fragment>
      <MetaData title={`ALL WAREHOUSES`} />

      <div className="dashboard">
        <SideBar />
        <div className="warehouseListContainer">
          <h1 id="warehouseListHeading">ALL WAREHOUSES</h1>

          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={10}
            disableSelectionOnClick
            className="warehouseListTable"
            autoHeight
          />
        </div>
      </div>
    </Fragment>
  );
};

export default WarehouseList;
