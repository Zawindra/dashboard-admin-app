import React, { useState, useContext } from "react";
import { AuthProvider, AuthContext } from "./AuthContext";
import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";

function MainApp() {
  const [page, setPage] = useState("login");
  const { user } = useContext(AuthContext);

  // Jika belum login → tampilkan halaman login/register
  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364]">
        {/* Card login/register */}
        <div className="w-full max-w-md"> 
          {page === "login" ? <Login setPage={setPage} /> : <Register setPage={setPage} />}
        </div>
      </div>
    );
  }

  // Jika sudah login → tampilkan dashboard
  return (
    <div className="min-h-screen bg-gradient-to-tr from-[#0f2027] via-[#203a43] to-[#2c5364]">
      <ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>
    </div>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <MainApp />
    </AuthProvider>
  );
}
