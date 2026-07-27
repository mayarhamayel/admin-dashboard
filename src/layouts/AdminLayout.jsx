import { Layout, Menu } from "antd";
import { Link, Outlet } from "react-router-dom";

const { Header, Sider, Content } = Layout;

function AdminLayout() {
  const menuItems = [
    {
      key: "dashboard",
      label: <Link to="/dashboard">Dashboard</Link>,
    },
    {
      key: "pending",
      label: <Link to="/pending-registrations">Pending Registrations</Link>,
    },
    {
      key: "users",
      label: <Link to="/users-hierarchy">Users Hierarchy</Link>,
    },
    {
      key: "blogs",
      label: <Link to="/blogs">Blogs</Link>,
    },
    {
      key: "news",
      label: <Link to="/news">News</Link>,
    },

    {
      key: "Families",
      label: <Link to="/families">Families</Link>,
    },

    {
      key: "Locations",
      label: <Link to="/Locations">Locations</Link>,
    },

    {
      key: "Cities",
      label: <Link to="/Cities">Cities</Link>,
    },

    {
      key: "Notifications",
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
          className="bg-white flex items-center px-6 shadow"
          style={{
            backgroundColor: "#DEE1E4",
            color: "white",
          }}
        >
          <h2 className="text-xl  text-black">Admin Dashboard</h2>
        </Header>

        <Content className="p-8 bg-gray-100 min-h-screen">
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
}

export default AdminLayout;
