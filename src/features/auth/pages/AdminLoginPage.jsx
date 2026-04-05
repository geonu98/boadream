import { useState } from "react";
import { useLocation, useNavigate, Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const initialValues = {
  email: "",
  password: "",
};

export default function AdminLoginPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const { isAdmin, isLoading, login } = useAuth();
  const [values, setValues] = useState(initialValues);
  const [errorMessage, setErrorMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isLoading && isAdmin) {
    return <Navigate to="/admin/inquiries" replace />;
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrorMessage("");
    setIsSubmitting(true);

    try {
      await login(values);
      const redirectPath = location.state?.from && location.state.from.startsWith("/admin")
        ? location.state.from
        : "/admin/inquiries";

      navigate(redirectPath, { replace: true });
    } catch (error) {
      setErrorMessage(
        error instanceof Error ? error.message : "로그인에 실패했습니다. 입력값을 다시 확인해주세요.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="admin-auth-page">
      <section className="admin-auth-card">
        <p className="admin-auth-eyebrow">Admin Login</p>
        <h1>보아드림 관리자 로그인</h1>
        <p className="admin-auth-description">
          Supabase Auth 계정으로 로그인한 뒤, `admin_profiles`에 등록된 관리자만 접근할 수 있습니다.
        </p>

        <form className="admin-auth-form" onSubmit={handleSubmit}>
          <label className="admin-auth-field">
            <span>이메일</span>
            <input
              type="email"
              name="email"
              value={values.email}
              onChange={handleChange}
              placeholder="admin@example.com"
              required
            />
          </label>

          <label className="admin-auth-field">
            <span>비밀번호</span>
            <input
              type="password"
              name="password"
              value={values.password}
              onChange={handleChange}
              placeholder="비밀번호를 입력해주세요"
              required
            />
          </label>

          <button type="submit" className="button button-solid button-small admin-auth-submit" disabled={isSubmitting}>
            {isSubmitting ? "로그인 중..." : "로그인"}
          </button>
        </form>

        {errorMessage ? <p className="admin-auth-error">{errorMessage}</p> : null}
      </section>
    </main>
  );
}
