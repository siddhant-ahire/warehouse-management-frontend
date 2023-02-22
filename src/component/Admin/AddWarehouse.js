import React, { Fragment, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./addWarehouse.css";
import {
  getWarehouses,
  clearErrors,
} from "../../actions/warehouseAction";
import { useAlert } from "react-alert";
import MetaData from "../Layout/MetaData";
import { Button } from "@material-ui/core";
import AccountTreeIcon from "@material-ui/icons/AccountTree";
import SpellcheckIcon from "@material-ui/icons/Spellcheck";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import SideBar from "./Sidebar";
import { NEW_WAREHOUSE_RESET } from "../../constants/warehouseConstant";
import { createWarehouse } from "../../actions/warehouseAction";


const AddWarehouse = ({ history }) => {
  const dispatch = useDispatch();
  const alert = useAlert();
  const { warehouses } = useSelector((state) => state.warehouses);
  const { loading, error, success } = useSelector((state) => state.newWarehouse);
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [uniqueCode, setUniqueCode] = useState("");
  const [capacity, setCapacity] = useState("");
  const [status, setStatus] = useState(true);


  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    if (success) {
      alert.success("Warehouse Created Successfully");
      dispatch({ type: NEW_WAREHOUSE_RESET });
      history.push("/warehouses-list");

    }
    dispatch(getWarehouses());
  }, [dispatch, alert, error, history, success]);

  const createWarehouseSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(createWarehouse({ name, capacity, unique_code: uniqueCode, location, status }));
  };

  return (
<Fragment>
      <MetaData title="Create Warehouse" />
      <div className="dashboard">
        <SideBar />
        <div className="newWarehouseContainer">
          <form
            className="createWarehouseForm"
            encType="multipart/form-data"
            onSubmit={createWarehouseSubmitHandler}
          >
            <h1>Create Warehouse</h1>
            <div>
              <SpellcheckIcon />
              <input
                type="text"
                placeholder="Warehouse Name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <SpellcheckIcon />
              <input
                type="text"
                placeholder="Location"
                required
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>
            <div>
              <AttachMoneyIcon />
              <input
                type="number"
                placeholder="Capacity"
                required
                onChange={(e) => setCapacity(e.target.value)}
              />
            </div>
            <div>
              <AttachMoneyIcon />
              <input
                type="number"
                placeholder="Unique Code"
                required
                onChange={(e) => setUniqueCode(e.target.value)}
              />
            </div>
            <Button
              id="createWarehouseBtn"
              type="submit"
              disabled={loading ? true : false}
            >
              Create
            </Button>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default AddWarehouse;
