import React, { useState } from "react";

const DynamicForm = ({ onSubmit, userEmail }) => {
  const [fields, setFields] = useState([{ name: "", value: "", email: userEmail }]);
  const [error, setError] = useState("");

  const handleChange = (i, key, val) => {
    const newFields = [...fields];
    newFields[i][key] = val;
    setFields(newFields);
  };

  const addField = () =>
    setFields([...fields, { name: "", value: "", email: userEmail }]);

  const deleteField = (i) => {
    const newFields = fields.filter((_, idx) => idx !== i);
    setFields(newFields);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (fields.some((f) => !f.name || !f.value)) {
      setError("Semua field harus diisi!");
      return;
    }
    setError("");
    onSubmit(fields);
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <h3 className="text-lg font-bold mb-4">Dynamic Form</h3>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        {fields.map((f, i) => (
          <div key={i} className="flex gap-2 items-center">
            <input
              type="text"
              placeholder="Field Name"
              className="border p-2 flex-1 rounded-lg"
              value={f.name}
              onChange={(e) => handleChange(i, "name", e.target.value)}
            />
            <input
              type="text"
              placeholder="Value"
              className="border p-2 flex-1 rounded-lg"
              value={f.value}
              onChange={(e) => handleChange(i, "value", e.target.value)}
            />
            <input
              type="text"
              readOnly
              className="border p-2 flex-1 rounded-lg bg-gray-100 text-gray-600"
              value={f.email}
            />
            <button
              type="button"
              onClick={() => deleteField(i)}
              className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600"
            >
              Delete
            </button>
          </div>
        ))}
        {error && <p className="text-red-500 text-sm">{error}</p>}
        <div className="flex gap-2 mt-3">
          <button
            type="button"
            onClick={addField}
            className="bg-gray-300 px-3 py-1 rounded-lg hover:bg-gray-400"
          >
            + Add Field
          </button>
          <button
            type="submit"
            className="bg-blue-500 text-white px-3 py-1 rounded-lg hover:bg-blue-600"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default DynamicForm;