import React from "react";
import "./sidebar.css";
import { Link } from "react-router-dom";
import { TreeView, TreeItem } from "@material-ui/lab";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import PostAddIcon from "@material-ui/icons/PostAdd";
import AddIcon from "@material-ui/icons/Add";
import ImportExportIcon from "@material-ui/icons/ImportExport";
import DriveFileMove from "@material-ui/icons/DriveEtaSharp";
import ListAltIcon from "@material-ui/icons/ListAlt";
import DashboardIcon from "@material-ui/icons/Dashboard";
import PeopleIcon from "@material-ui/icons/People";
import RateReviewIcon from "@material-ui/icons/RateReview";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Link to="/">
      </Link>
      <Link to="/">
        <p>
          <DashboardIcon /> Dashboard
        </p>
      </Link>
      <TreeView
        defaultCollapseIcon={<ExpandMoreIcon />}
        defaultExpandIcon={<ImportExportIcon />}
      >
        <TreeItem nodeId="1" label="Warehouse">
          <Link to="/add-warehouse">
            <TreeItem nodeId="3" label="Create" icon={<AddIcon />} />
          </Link>
          <Link to="/warehouses-list">
            <TreeItem nodeId="2" label="All" icon={<PostAddIcon />} />
          </Link>

        </TreeItem>
      </TreeView>
      <TreeView
        defaultCollapseIcon={<ExpandMoreIcon />}
        defaultExpandIcon={<ImportExportIcon />}
      >
        <TreeItem nodeId="1" label="Section">
          <Link to="/add-section">
            <TreeItem nodeId="3" label="Create" icon={<AddIcon />} />
          </Link>
          <Link to="/sections-list">
            <TreeItem nodeId="2" label="All" icon={<PostAddIcon />} />
          </Link>

        </TreeItem>
      </TreeView>
      <TreeView
        defaultCollapseIcon={<ExpandMoreIcon />}
        defaultExpandIcon={<ImportExportIcon />}
      >
        <TreeItem nodeId="1" label="Category">
          <Link to="/add-category">
            <TreeItem nodeId="3" label="Create" icon={<AddIcon />} />
          </Link>
          <Link to="/category-list">
            <TreeItem nodeId="2" label="All" icon={<PostAddIcon />} />
          </Link>

        </TreeItem>
      </TreeView>
      <TreeView
        defaultCollapseIcon={<ExpandMoreIcon />}
        defaultExpandIcon={<ImportExportIcon />}
      >
        <TreeItem nodeId="1" label="Products">
          <Link to="/add-product">
            <TreeItem nodeId="3" label="Create" icon={<AddIcon />} />
          </Link>
          <Link to="/products-list">
            <TreeItem nodeId="2" label="All" icon={<PostAddIcon />} />
          </Link>
          <Link to="/move-product">
            <TreeItem nodeId="2" label="Move" icon={<DriveFileMove />} />
          </Link>

        </TreeItem>
      </TreeView>
    </div>
  );
};

export default Sidebar;
