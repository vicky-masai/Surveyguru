import React from "react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { ChevronDownIcon, ExternalLinkIcon } from "@chakra-ui/icons";
function Footer() {
  return (
    <div className="footer">
      <div className="wdt">
        <div>
          <h2>Community:</h2>
          <Link href="#" isExternal>Developers <ExternalLinkIcon mx="2px" /></Link>
          <Link href="#" isExternal>Facebook <ExternalLinkIcon mx="2px" /></Link>
          <Link href="#" isExternal>Twitter<ExternalLinkIcon mx="2px" /></Link>
          <Link href="#" isExternal>Linkedin <ExternalLinkIcon mx="2px" /></Link>
          <Link href="#" isExternal>Our Blog <ExternalLinkIcon mx="2px" /></Link>
          <Link href="#" isExternal>Instagram <ExternalLinkIcon mx="2px" /></Link>
          <Link href="#" isExternal>Youtube <ExternalLinkIcon mx="2px" /></Link>
        </div>
        <div>
          <h2>About Us:</h2>
          <Link href="#" isExternal>Leadership Team<ExternalLinkIcon mx="2px" /></Link>
          <Link href="#" isExternal>Boad of Directors<ExternalLinkIcon mx="2px" /></Link>
          <Link href="#" isExternal>Investor Relationship<ExternalLinkIcon mx="2px" /></Link>
          <Link href="#" isExternal>App Directory<ExternalLinkIcon mx="2px" /></Link>
          <Link href="#" isExternal>Newsroom<ExternalLinkIcon mx="2px" /></Link>
          <Link href="#" isExternal>Office Locations <ExternalLinkIcon mx="2px" /></Link>
          <Link href="#" isExternal>Imprint<ExternalLinkIcon mx="2px" /></Link>
        </div>
        <div>
          <h2>Policies:</h2>
          <Link href="#" isExternal>Terms of Use<ExternalLinkIcon mx="2px" /></Link>
          <Link href="#" isExternal>Privacy Notice<ExternalLinkIcon mx="2px" /></Link>
          <Link href="#" isExternal>California Privacy Notice<ExternalLinkIcon mx="2px" /></Link>
          <Link href="#" isExternal>Acceptable Uses Policy<ExternalLinkIcon mx="2px" /></Link>
          <Link href="#" isExternal>Security Statement<ExternalLinkIcon mx="2px" /></Link>
          <Link href="#" isExternal>GDPR Compliance<ExternalLinkIcon mx="2px" /></Link>
          <Link href="#" isExternal>Email Opt-In<ExternalLinkIcon mx="2px" /></Link>
        </div>
        <div>
          <h2>Use Cases:</h2>
          <Link href="#" isExternal>Online Polls<ExternalLinkIcon mx="2px" /></Link>
          <Link href="#" isExternal>Facebook Surveys<ExternalLinkIcon mx="2px" /></Link>
          <Link href="#" isExternal>Survey Template<ExternalLinkIcon mx="2px" /></Link>
          <Link href="#" isExternal>Scheduling Polls<ExternalLinkIcon mx="2px" /></Link>
          <Link href="#" isExternal>Google Forms vs. SurveyMonkey<ExternalLinkIcon mx="2px" /></Link>
          <Link href="#" isExternal>Free Survey Templates<ExternalLinkIcon mx="2px" /></Link>
        </div>
      </div>
      <center>
        <hr
          style={{ width: "95%", marginBottom: "-60px", marginTop: "40px" }}
        />
      </center>
      <div
        style={{
          width: "100%",
          height: "280px",
          margin: "20px 0px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div style={{ width: "420px", marginTop: "80px", marginLeft: "40px" }}>
          <Menu>
            <MenuButton
              as={Button}
              rightIcon={<ChevronDownIcon />}
              style={{ backgroundColor: "black", color: "white" }}
            >
              English
            </MenuButton>
            <MenuList>
              <MenuItem>English(US)</MenuItem>
              <MenuItem> English(UK)</MenuItem>
              <MenuItem> Dutch</MenuItem>
            </MenuList>
          </Menu>
          <p style={{ margin: "20px 0px", fontWeight: "400" }}>
            SurveyGuru is brought to you by momentive.ai. Shape what's next with
            AI‑driven insights and experience management solutions built for the
            pace of modern business.
          </p>
          <p>Copyright © 1999-2022 Momentive</p>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column-reverse",
            marginRight: "20px",
          }}
        >
          <div>
            <img src="images/trust.png" alt="trust" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
