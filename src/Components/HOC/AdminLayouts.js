import AdminNav from "../Admin/nav/AdminNav";

const AdminLayouts = ({ children, title }) => {
  return (
    <div className="admin_container">
      <div className="admin_left_nav">
        <AdminNav />
      </div>
      <div className="admin_right">
        <h2>{title}</h2>
        {children}
      </div>
    </div>
  );
};
export default AdminLayouts;
