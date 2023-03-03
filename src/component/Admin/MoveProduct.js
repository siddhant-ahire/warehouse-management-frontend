import React, { Fragment, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./addProduct.css";
import {
  getWarehouses,
  clearErrors,
} from "../../actions/warehouseAction";
import { useAlert } from "react-alert";
import MetaData from "../Layout/MetaData";
import { Button } from "@material-ui/core";
import AccountTreeIcon from "@material-ui/icons/AccountTree";
import SideBar from "./Sidebar";
import { NEW_PRODUCT_RESET } from "../../constants/productConstants";
import { getProducts, moveProduct } from "../../actions/productAction";
import { getSections } from "../../actions/sectionAction";


const MoveProduct = ({ history }) => {
  const dispatch = useDispatch();
  const alert = useAlert();
  const { loading, error, success } = useSelector((state) => state.newProduct);
  const { products } = useSelector((state) => state.products);

  const { warehouses } = useSelector((state) => state.warehouses);
  const { sections } = useSelector((state) => state.sections);
  const [warehouseSections, setWarehouseSections] = useState([]);
  const [sectionEnable, setSectionEnable] = useState(true);
  const [section, setSection] = useState("");
  const [product, setProduct] = useState("");
  const [warehouse, setWarehouse] = useState("");


  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    if (success) {
      alert.success("Product Moved Successfully");
      dispatch({ type: NEW_PRODUCT_RESET });
      history.push("/products-list");
    }
    if(warehouse) {
      setWarehouseSections(sections.filter(sec => sec.warehouse_id == warehouse))
      setSectionEnable(false);
      return
    }
    dispatch(getProducts());
    dispatch(getWarehouses());
    dispatch(getSections());
  }, [dispatch, alert, error, history, success, warehouse]);

  const moveProductSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(moveProduct({product_id: product, new_section_id: section}));
  };

    // console.log(warehouses,sections,categories)

  return (
<Fragment>
      <MetaData title="Create Product" />
      <div className="dashboard">
        <SideBar />
        <div className="newProductContainer">
          <form
            className="createProductForm"
            encType="multipart/form-data"
            onSubmit={moveProductSubmitHandler}
          >
            <h1>Move Product</h1>
            <div>
              <AccountTreeIcon />
              <select onChange={(e) => setProduct(e.target.value)}>
                <option value="" selected disabled>Choose Product</option>
                {products && products.map((prod) => (
                  <option key={prod.product_id} value={prod.product_id}>
                    {prod.product_name} (Qty: {prod.quantity})
                  </option>
                ))}
              </select>
            </div>
            <div>
              <AccountTreeIcon />
              <select onChange={(e) => setWarehouse(e.target.value)}>
                <option value="" selected disabled>Choose Warehouse</option>
                {warehouses && warehouses.map((ware) => (
                  <option key={ware.warehouse_id} value={ware.warehouse_id}>
                    {ware.name}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <AccountTreeIcon />
              <select onChange={(e) => setSection(e.target.value)} disabled={sectionEnable}>
                <option value="" selected disabled>Choose Section</option>
                {warehouseSections.map((sec) => (
                  <option key={sec.section_id} value={sec.section_id}>
                    {sec.name} (Qty: {sec.capacity})
                  </option>
                ))}
              </select>
            </div>


            <Button
              id="createProductBtn"
              type="submit"
              disabled={loading ? true : false}
            >
              Move
            </Button>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default MoveProduct;
