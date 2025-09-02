import React, { useContext } from "react";
import { AuthContext } from "../AuthContext";

const ProtectedRoute = ({ children }) => {
  const { user } = useContext(AuthContext);
  if (!user) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <p className="text-red-500 text-xl">⚠️ Anda harus login terlebih dahulu.</p>
      </div>
    );
  }
  return children;
};

export default ProtectedRoute;
