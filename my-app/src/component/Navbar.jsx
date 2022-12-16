import React from "react";
import { Link } from "react-router-dom";
import {
  Menu,
  Image,
  MenuButton,
  MenuList,
  MenuItem,
  ButtonGroup,
  Button,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import SignupCard from "../pages/Signup";
function Navbar() {
  return (
    <div className="header">
      <Link to={"/"}><Image src="images/SurveyGuru.png" alt="Dan Abramov" style={{cursor:"pointer"}} /></Link>
      <Menu>
        <MenuButton
          as={Button}
          rightIcon={<ChevronDownIcon />}
          style={{ backgroundColor: "white" }}
        >
          Products
        </MenuButton>
        <MenuList>
          <MenuItem>
            <Link to={"https://www.surveymonkey.com/mp/take-a-tour/"}>
              SurveyGuru
            </Link>
          </MenuItem>
          <MenuItem>
            {" "}
            <Link to={"https://www.surveymonkey.com/mp/enterprise/"}>
              Enterprise
            </Link>
          </MenuItem>
          <MenuItem>
            {" "}
            <Link to={"https://www.surveymonkey.com/apps/?ut_source=homepage&ut_source3=megamenucontrol"}>
              Integration and Plug-ins
            </Link>
          </MenuItem>
        </MenuList>
      </Menu>

      <Menu>
        <MenuButton
          as={Button}
          rightIcon={<ChevronDownIcon />}
          style={{ backgroundColor: "white" }}
        >
          Solutions
        </MenuButton>
        <MenuList>
          <MenuItem>
            <Link to={"https://www.surveymonkey.com/mp/customer-feedback/"}>
              Customers
            </Link>
          </MenuItem>
          <MenuItem>
            <Link to={"https://www.surveymonkey.com/mp/employee-feedback/"}>
              Employees
            </Link>
          </MenuItem>
          <MenuItem>
            <Link to={"https://www.surveymonkey.com/market-research/"}>
              Markets
            </Link>
          </MenuItem>
        </MenuList>
      </Menu>

      <Menu>
        <MenuButton
          as={Button}
          rightIcon={<ChevronDownIcon />}
          style={{ backgroundColor: "white" }}
        >
          Resources
        </MenuButton>
        <MenuList>
          <MenuItem>
            {" "}
            <Link to={"https://www.surveymonkey.com/resources/"}>
              Resources
            </Link>
          </MenuItem>
          <MenuItem>
            {" "}
            <Link to={"https://www.surveymonkey.com/curiosity/"}>
              Curiosity at work
            </Link>
          </MenuItem>
          <MenuItem>
            {" "}
            <Link to={"https://help.surveymonkey.com/en/?ut_source=homepage&ut_source3=megamenucontrol"}>
              Help Center
            </Link>
          </MenuItem>
        </MenuList>
      </Menu>
      <div style={{ fontWeight: "500", cursor: "pointer" }}>
        <Link
          to={"/price"}
          style={{ textDecoration: "none" }}
        >
          Plan & Pricing
        </Link>
      </div>
      <div style={{ display: "flex", alignItems: "center" }}><Link to={"/login"}>
        <div
          style={{ fontWeight: "500", margin: "0px 20px", cursor: "pointer" }}
        >
          Login
        </div></Link>
        <Link to={"/signup"}> <button
          style={{
            backgroundColor: "#FDC713",
            color: "black",
            fontWeight: "400",
            padding: "10px 20px",
            borderRadius: "5px",
          }}>
            Sign up free
        </button></Link>
      </div>
    </div>
  );
}

export default Navbar;
