import { QueryClientProvider } from "@tanstack/react-query";
import { AuthProvider } from "../../features/auth/context/AuthContext";
import { queryClient } from "../../shared/lib/query/queryClient";

export default function AppProviders({ children }) {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>{children}</AuthProvider>
    </QueryClientProvider>
  );
}
