import React from "react";
import { BrowserRouter as Router, Switch, Route, BrowserRouter } from "react-router-dom";
import {
  Menu,
  Image,
  MenuButton,
  MenuList,
  MenuItem,
  ButtonGroup,
  Button,
  Link,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import SignupCard from "./Signup";
function Navbar() {
  return (
    <div className="header">
      <Image onClick={()=>window.location.replace("/")}src="images/SurveyGuru.png" alt="Dan Abramov" style={{cursor:"pointer"}} />
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
            <Link href="https://www.surveymonkey.com/mp/take-a-tour/">
              SurveyGuru
            </Link>
          </MenuItem>
          <MenuItem>
            {" "}
            <Link href="https://www.surveymonkey.com/mp/enterprise/">
              Enterprise
            </Link>
          </MenuItem>
          <MenuItem>
            {" "}
            <Link href="https://www.surveymonkey.com/apps/?ut_source=homepage&ut_source3=megamenucontrol">
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
            <Link href="https://www.surveymonkey.com/mp/customer-feedback/">
              Customers
            </Link>
          </MenuItem>
          <MenuItem>
            <Link href="https://www.surveymonkey.com/mp/employee-feedback/">
              Employees
            </Link>
          </MenuItem>
          <MenuItem>
            <Link href="https://www.surveymonkey.com/market-research/">
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
            <Link href="https://www.surveymonkey.com/resources/">
              Resources
            </Link>
          </MenuItem>
          <MenuItem>
            {" "}
            <Link href="https://www.surveymonkey.com/curiosity/">
              Curiosity at work
            </Link>
          </MenuItem>
          <MenuItem>
            {" "}
            <Link href="https://help.surveymonkey.com/en/?ut_source=homepage&ut_source3=megamenucontrol">
              Help Center
            </Link>
          </MenuItem>
        </MenuList>
      </Menu>
      <div style={{ fontWeight: "500", cursor: "pointer" }}>
        <Link
          href="#"
          style={{ textDecoration: "none" }}
        >
          Plan & Pricing
        </Link>
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <div
          style={{ fontWeight: "500", margin: "0px 20px", cursor: "pointer" }}
        >
          Login
        </div>
        <button onClick={()=>window.location.replace("/signup")}
          style={{
            backgroundColor: "#FDC713",
            color: "black",
            fontWeight: "400",
            padding: "10px 20px",
            borderRadius: "5px",
          }}>
          <Router>
            <Link to="/signup">Sign up free</Link>
          </Router>
        </button>
      </div>
    </div>
  );
}

export default Navbar;
