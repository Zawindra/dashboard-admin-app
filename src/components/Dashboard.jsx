import React, { useContext, useState, useEffect } from "react";
import { AuthContext } from "../AuthContext";
import DynamicForm from "./DynamicForm";

const Dashboard = () => {
  const { user, logout } = useContext(AuthContext);
  const [users, setUsers] = useState([]);
  const [formData, setFormData] = useState([]);

  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    setUsers(storedUsers);
  }, []);

  const handleDeleteUser = (email) => {
    const newUsers = users.filter((u) => u.email !== email);
    setUsers(newUsers);
    localStorage.setItem("users", JSON.stringify(newUsers));
  };

  const handleFormSubmit = (data) => {
    setFormData(data);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364] p-6 ">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-white">
          Welcome, {user?.email}
        </h2>
        <button
          onClick={logout}
          className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
        >
          Logout
        </button>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Admin User Management */}
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h3 className="text-lg font-bold mb-4">User Management</h3>
          <ul className="space-y-2">
            {users.map((u, i) => (
              <li
                key={i}
                className="flex justify-between bg-gray-50 p-2 rounded-lg"
              >
                {u.email}
                <button
                  onClick={() => handleDeleteUser(u.email)}
                  className="text-red-500 hover:text-red-700"
                >
                  Hapus
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Dynamic Form */}
        {/* <DynamicForm onSubmit={handleFormSubmit} /> */}
        <DynamicForm onSubmit={handleFormSubmit} userEmail={user?.email} />

        {/* Hasil Data Form */}
        <div className="bg-white p-6 rounded-xl shadow-md md:col-span-2">
          <h3 className="text-lg font-bold mb-4">Data Form Masuk</h3>
          {formData.length === 0 ? (
            <p className="text-gray-500">Belum ada data</p>
          ) : (
            <ul className="list-disc pl-6">
              {formData.map((f, i) => (
                <li key={i}>
                  <strong>{f.name}</strong>: {f.value}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
