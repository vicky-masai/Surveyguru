import { Routes, Route} from "react-router-dom";
import React from "react";
import Home from "../pages/Home";
import Login from "../pages/Login";
import SignupCard from "../pages/Signup";
import PlanPrice from "../pages/PlanPrice";
import Dashboard from "../pages/Dashboard";
import NotFound from "../pages/Notfound";

function AllRoutes() {
  return (
    <Routes>
      <Route  path="/" element={<Home />} />
      <Route  path="/signup" element={<SignupCard />} />
      <Route  path="/login" element={<Login />}/>
      <Route  path="/price" element={<PlanPrice />}/>
      <Route  path="/dashboard" element={<Dashboard />}/>

      <Route path="*" element={<NotFound />}/>
    </Routes>
  );
}

export default AllRoutes;
