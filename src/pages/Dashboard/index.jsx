import StatisticCard from "../../components/dashboard/StatisticCard";
import { getDashboardStatistics } from "../../services/dashboardService";

import {
  UserOutlined,
  UserAddOutlined,
  CheckCircleOutlined,
  CloseCircleOutlined,
  ReadOutlined,
  FileTextOutlined,
  BellOutlined,
} from "@ant-design/icons";

function Dashboard() {
  const statistics = getDashboardStatistics();

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatisticCard
          title="Total Users"
          value={statistics.totalUsers}
          icon={<UserOutlined />}
          bgColor="#2563eb"
        />

        <StatisticCard
          title="Pending Registrations"
          value={statistics.pendingRegistrations}
          icon={<UserAddOutlined />}
          bgColor="#f59e0b"
        />

        <StatisticCard
          title="Approved Users"
          value={statistics.approvedUsers}
          icon={<CheckCircleOutlined />}
          bgColor="#16a34a"
        />

        <StatisticCard
          title="Rejected Users"
          value={statistics.rejectedUsers}
          icon={<CloseCircleOutlined />}
          bgColor="#dc2626"
        />

        <StatisticCard
          title="Pending Blogs"
          value={statistics.pendingBlogs}
          icon={<ReadOutlined />}
          bgColor="#7c3aed"
        />

        <StatisticCard
          title="Total News"
          value={statistics.totalNews}
          icon={<FileTextOutlined />}
          bgColor="#0891b2"
        />

        <StatisticCard
          title="Sent Notifications"
          value={statistics.sentNotifications}
          icon={<BellOutlined />}
          bgColor="#ea580c"
        />
      </div>
    </div>
  );
}

export default Dashboard;