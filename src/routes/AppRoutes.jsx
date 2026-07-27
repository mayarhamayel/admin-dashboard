import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import PendingRegistrations from "../pages/PendingRegistrations";
import UsersHierarchy from "../pages/UsersHierarchy";
import Blogs from "../pages/Blogs";
import News from "../pages/News";
import Families from "../pages/Families";
import Locations from "../pages/Locations";
import Cities from "../pages/Cities";
import  Notifications from "../pages/Notifications" 


import AdminLayout from "../layouts/AdminLayout";
import ProtectedRoute from "./ProtectedRoute";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />

        <Route
          element={
            <ProtectedRoute>
              <AdminLayout />
            </ProtectedRoute>
          }
        >
          <Route path="/dashboard" element={<Dashboard />} />

          <Route path="/Notifications" element={<Notifications />} />

          <Route
            path="/pending-registrations"
            element={<PendingRegistrations />}
          />

          <Route path="/users-hierarchy" element={<UsersHierarchy />} />

          <Route path="/blogs" element={<Blogs />} />

          <Route path="/news" element={<News />} />

          <Route path="/locations" element={<Locations />} />

          <Route path="/cities" element={<Cities />} />

          <Route path="/Families" element={<Families />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
