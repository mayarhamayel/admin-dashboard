import { Layout, Menu } from "antd";
import { Link, Outlet, useNavigate } from "react-router-dom";

import { Button } from "antd";

import {
  DashboardOutlined,
  UserAddOutlined,
  ApartmentOutlined,
  ReadOutlined,
  FileTextOutlined,
  BellOutlined,
  EnvironmentOutlined,
  TeamOutlined,
  PushpinOutlined,
} from "@ant-design/icons";

const { Header, Sider, Content } = Layout;

function AdminLayout() {

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/login");
  };


  const menuItems = [
    {
      key: "dashboard",
      icon: <DashboardOutlined />,
      label: <Link to="/dashboard">Dashboard</Link>,
    },
    {
      key: "pending",
      icon: <UserAddOutlined />,
      label: <Link to="/pending-registrations">Pending Registrations</Link>,
    },
    {
      key: "users",
      icon: <ApartmentOutlined />,
      label: <Link to="/users-hierarchy">Users Hierarchy</Link>,
    },
    {
      key: "blogs",
      icon: <ReadOutlined />,
      label: <Link to="/blogs">Blogs</Link>,
    },
    {
      key: "news",
      icon: <FileTextOutlined />,
      label: <Link to="/news">News</Link>,
    },

    {
      key: "Families",
      icon: <TeamOutlined />,
      label: <Link to="/families">Families</Link>,
    },

    {
      key: "Locations",
      icon: <PushpinOutlined />,
      label: <Link to="/Locations">Locations</Link>,
    },

    {
      key: "Cities",
      icon: <EnvironmentOutlined />,
      label: <Link to="/Cities">Cities</Link>,
    },

    {
      key: "Notifications",
      icon: <BellOutlined />,
      label: <Link to="/notifications">Notifications</Link>,
    },
  ];

  return (
    <Layout className="min-h-screen">
      <Sider
        width={240}
        className="min-h-screen"
        style={{
          background: "#f7fbfe",
        }}
      >
        <div className="text-black text-center text-2xl font-bold py-6">
          Admin Panel
        </div>

        <Menu
          mode="inline"
          items={menuItems}
          className="mt-4"
          style={{
            backgroundColor: "#f7fbfe",
            color: "white",
          }}
        />
      </Sider>

      <Layout>
        <Header
          className="bg-white flex items-center justify-between px-6 shadow"
          style={{
            backgroundColor: "#DEE1E4",
            color: "white",
          }}
        >
          <h2 className="text-xl  text-black">Admin Dashboard</h2>

          <Button danger onClick={handleLogout}>
  Logout
</Button>
        </Header>

        <Content className="p-8 bg-gray-100 min-h-screen">
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
}

export default AdminLayout;
