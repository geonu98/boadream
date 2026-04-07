import { createContext, useContext, useEffect, useState } from "react";
import { authService } from "../api/authService";
import { supabase } from "../../../shared/lib/supabase/client";

const AuthContext = createContext(null);

const initialState = {
  session: null,
  user: null,
  profile: null,
  isAdmin: false,
  isLoading: true,
};

export function AuthProvider({ children }) {
  const [authState, setAuthState] = useState(initialState);

  useEffect(() => {
    if (!supabase) {
      setAuthState({
        session: null,
        user: null,
        profile: null,
        isAdmin: false,
        isLoading: false,
      });
      return undefined;
    }

    const refreshAuthState = async () => {
      try {
        const sessionData = await authService.getCurrentSession();
        const session = sessionData.session ?? null;

        if (!session?.user) {
          setAuthState({
            session: null,
            user: null,
            profile: null,
            isAdmin: false,
            isLoading: false,
          });
          return;
        }

        const profile = await authService.getCurrentAdminProfile();
        const isAdmin = Boolean(profile?.is_active);

        setAuthState({
          session,
          user: session.user,
          profile: isAdmin ? profile : null,
          isAdmin,
          isLoading: false,
        });
      } catch {
        setAuthState({
          session: null,
          user: null,
          profile: null,
          isAdmin: false,
          isLoading: false,
        });
      }
    };

    refreshAuthState();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(() => {
      refreshAuthState();
    });

    return () => subscription.unsubscribe();
  }, []);

  const login = async ({ email, password }) => {
    if (!supabase) {
      throw new Error("Supabase 환경변수가 없어 관리자 로그인을 사용할 수 없습니다.");
    }

    await authService.signInAdmin({ email, password });
    const profile = await authService.getCurrentAdminProfile();

    if (!profile?.is_active) {
      await authService.signOutAdmin();
      throw new Error("admin_profiles에 등록된 활성 관리자 계정만 로그인할 수 있습니다.");
    }

    const sessionData = await authService.getCurrentSession();
    setAuthState({
      session: sessionData.session ?? null,
      user: sessionData.session?.user ?? null,
      profile,
      isAdmin: true,
      isLoading: false,
    });

    return profile;
  };

  const logout = async () => {
    if (!supabase) {
      setAuthState({
        session: null,
        user: null,
        profile: null,
        isAdmin: false,
        isLoading: false,
      });
      return;
    }

    await authService.signOutAdmin();
    setAuthState({
      session: null,
      user: null,
      profile: null,
      isAdmin: false,
      isLoading: false,
    });
  };

  return <AuthContext.Provider value={{ ...authState, login, logout }}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within AuthProvider.");
  }

  return context;
}
