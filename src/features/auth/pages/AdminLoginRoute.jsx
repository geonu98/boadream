import { AuthProvider } from "../context/AuthContext";
import AdminLoginPage from "./AdminLoginPage";

export default function AdminLoginRoute() {
  return (
    <AuthProvider>
      <AdminLoginPage />
    </AuthProvider>
  );
}
