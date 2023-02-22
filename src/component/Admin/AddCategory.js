import React, { Fragment, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./addCategory.css";
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
import { NEW_CATEGORY_RESET } from "../../constants/categoryConstant";
import { createCategories } from "../../actions/categoryAction";


const AddCategory = ({ history }) => {
  const dispatch = useDispatch();
  const alert = useAlert();
  const { loading, error, success } = useSelector((state) => state.newCategory);
  const [name, setName] = useState("");


  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    if (success) {
      alert.success("Category Created Successfully");
      dispatch({ type: NEW_CATEGORY_RESET });
      history.push("/category-list");

    }
  }, [dispatch, alert, error, history, success]);

  const createCategorySubmitHandler = (e) => {
    e.preventDefault();
    dispatch(createCategories({name}));
  };

  return (
<Fragment>
      <MetaData title="Create Category" />
      <div className="dashboard">
        <SideBar />
        <div className="newCategoryContainer">
          <form
            className="createCategoryForm"
            encType="multipart/form-data"
            onSubmit={createCategorySubmitHandler}
          >
            <h1>Create Category</h1>

            <div>
              <SpellcheckIcon />
              <input
                type="text"
                placeholder="Category Name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <Button
              id="createCategoryBtn"
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

export default AddCategory;
