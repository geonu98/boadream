import { AuthProvider } from "../context/AuthContext";
import AdminRoute from "./AdminRoute";

export default function AdminRouteRoot() {
  return (
    <AuthProvider>
      <AdminRoute />
    </AuthProvider>
  );
}
