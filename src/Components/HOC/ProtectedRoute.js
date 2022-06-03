import { Navigate } from "react-router-dom";
import { useUserContext } from "../Utils/context/index";

const ProtectedRoute = ({ children }) => {
  const user = useUserContext();

  if (!user) {
    return <Navigate to="/login" />;
  }

  return children;
};
export default ProtectedRoute;
