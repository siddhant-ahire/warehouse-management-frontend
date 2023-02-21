import React, { Fragment, useEffect } from "react";
import { DataGrid } from "@material-ui/data-grid";
import "./sectionList.css";
import { useSelector, useDispatch } from "react-redux";

import {
  getSections,
  clearErrors,
} from "../../actions/sectionAction";
import { useAlert } from "react-alert";
import MetaData from "../Layout/MetaData";
import SideBar from "./Sidebar";

const SectionList = ({ history }) => {
  const dispatch = useDispatch();

  const alert = useAlert();

  const { error, sections } = useSelector((state) => state.sections);
  
  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    dispatch(getSections());
  }, [dispatch, alert, error, history]);
  
  const columns = [
    { 
      field: "id", 
      headerName: "Section ID", 
      minWidth: 20,
      flex: 0.1,
    },
    {
      field: "name",
      headerName: "Section",
      minWidth: 20,
      flex: 0.3,
    },
    {
      field: "capacity",
      headerName: "Capacity",
      minWidth: 20,
      flex: 0.3,
    },
    {
      field: "warehouse_name",
      headerName: "Warehouse",
      minWidth: 20,
      flex: 0.3,
    },
  ];

  const rows = [];

  sections &&
    sections.forEach((item, index) => {
      rows.push({
        id: index+1,
        section_id: item.section_id,
        name: item.name,
        capacity: item.capacity,
        warehouse_name: item.warehouse_name
    });
  });
  console.log(sections)

  return (
    <Fragment>
      <MetaData title={`ALL SECTIONS`} />

      <div className="dashboard">
        <SideBar />
        <div className="sectionListContainer">
          <h1 id="sectionListHeading">ALL SECTIONS</h1>

          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={10}
            disableSelectionOnClick
            className="sectionListTable"
            autoHeight
          />
        </div>
      </div>
    </Fragment>
  );
};

export default SectionList;
