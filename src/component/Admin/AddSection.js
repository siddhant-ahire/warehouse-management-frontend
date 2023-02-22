import React, { Fragment, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./addSection.css";
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
import { NEW_SECTION_RESET } from "../../constants/sectionConstant";
import { createSection } from "../../actions/sectionAction";


const AddSection = ({ history }) => {
  const dispatch = useDispatch();
  const alert = useAlert();
  const { warehouses } = useSelector((state) => state.warehouses);
  const { loading, error, success } = useSelector((state) => state.newSection);
  const [name, setName] = useState("");
  const [capacity, setCapacity] = useState("");
  const [warehouse, setWarehouse] = useState("");


  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    if (success) {
      alert.success("Section Created Successfully");
      dispatch({ type: NEW_SECTION_RESET });
      history.push("/sections-list");

    }
    dispatch(getWarehouses());
  }, [dispatch, alert, error, history, success]);

  const createSectionSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(createSection({name, capacity, is_whole_section: false, warehouse_id: warehouse}));
  };

  return (
<Fragment>
      <MetaData title="Create Section" />
      <div className="dashboard">
        <SideBar />
        <div className="newSectionContainer">
          <form
            className="createSectionForm"
            encType="multipart/form-data"
            onSubmit={createSectionSubmitHandler}
          >
            <h1>Create Section</h1>

            <div>
              <SpellcheckIcon />
              <input
                type="text"
                placeholder="Section Name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
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
              <AccountTreeIcon />
              <select onChange={(e) => setWarehouse(e.target.value)}>
                <option value="">Choose Warehouse</option>
                {warehouses.map((ware) => (
                  <option key={ware.warehouse_id} value={ware.warehouse_id}>
                    {ware.name} (capacity={ware.capacity})
                  </option>
                ))}
              </select>
            </div>
            <Button
              id="createSectionBtn"
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

export default AddSection;
