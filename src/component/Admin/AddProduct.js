import React, { Fragment, useEffect, useState } from "react";
import { DataGrid } from "@material-ui/data-grid";
import { useSelector, useDispatch } from "react-redux";
import "./newProduct.css";
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
import { NEW_PRODUCT_RESET } from "../../constants/productConstants";
import { createProduct } from "../../actions/productAction";
import { getCategorys } from "../../actions/categoryAction";
import { getSections } from "../../actions/sectionAction";


const AddProduct = ({ history }) => {
  const dispatch = useDispatch();
  const alert = useAlert();
  const { loading, error, success } = useSelector((state) => state.newProduct);
  const { warehouseError, warehouses } = useSelector((state) => state.warehouses);
  const { categorysError, categorys } = useSelector((state) => state.categorys);
  const { sectionsError, sections } = useSelector((state) => state.sections);
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [section, setSection] = useState("");
  const [category, setCategory] = useState("");
  const [warehouse, setWarehouse] = useState("");


  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    if (success) {
      alert.success("Product Created Successfully");
      history.push("/admin/dashboard");
      dispatch({ type: NEW_PRODUCT_RESET });
    }
    dispatch(getWarehouses());
    dispatch(getCategorys());
    dispatch(getSections());
  }, [dispatch, alert, error, history, success]);

  const createProductSubmitHandler = (e) => {
    e.preventDefault();

    const myForm = new FormData();

    myForm.set("name", name);
    myForm.set("quantity", quantity);
    myForm.set("category_id", category);
    myForm.set("section_id", section);
    dispatch(createProduct(myForm));
  };

    console.log(warehouses,sections,categorys)

  return (
<Fragment>
      <MetaData title="Create Product" />
      <div className="dashboard">
        <SideBar />
        <div className="newProductContainer">
          <form
            className="createProductForm"
            encType="multipart/form-data"
            onSubmit={createProductSubmitHandler}
          >
            <h1>Create Product</h1>

            <div>
              <SpellcheckIcon />
              <input
                type="text"
                placeholder="Product Name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <AttachMoneyIcon />
              <input
                type="number"
                placeholder="Quantity"
                required
                onChange={(e) => setQuantity(e.target.value)}
              />
            </div>
            <div>
              <AccountTreeIcon />
              <select onChange={(e) => setCategory(e.target.value)}>
                <option value="">Choose Category</option>
                {categorys.map((cate) => (
                  <option key={cate.category_id} value={cate.category_id}>
                    {cate.name}
                  </option>
                ))}
              </select>
            </div>
            {/* <div>
              <AccountTreeIcon />
              <select onChange={(e) => setWarehouse(e.target.value)}>
                <option value="">Choose Warehouse</option>
                {warehouses.map((ware) => (
                  <option key={ware.warehouse_id} value={ware.warehouse_id}>
                    {ware.name}
                  </option>
                ))}
              </select>
            </div> */}
            <div>
              <AccountTreeIcon />
              <select onChange={(e) => setSection(e.target.value)}>
                <option value="">Choose Section</option>
                {sections.map((sec) => (
                  <option key={sec.section_id} value={sec.section_id}>
                    {sec.name}
                  </option>
                ))}
              </select>
            </div>


            <Button
              id="createProductBtn"
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

export default AddProduct;
