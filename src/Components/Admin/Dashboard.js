import AdminLayout from "../HOC/AdminLayouts";

const Dashboard = () => {
  return (
    <AdminLayout title={"Dashboard"}>
      <div className="user_dashboard">
        <div>This is Dashboard</div>
      </div>
    </AdminLayout>
  );
};
export default Dashboard;
