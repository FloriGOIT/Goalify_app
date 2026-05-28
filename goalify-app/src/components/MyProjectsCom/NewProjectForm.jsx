import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function NewProjectForm({ setProjects }) {
  const navigate = useNavigate();

  const initialFormData = {
    title: "aaa",
    description: "aaaa",
    progress: 0,
    status: "Active",
    dueDate: new Date().toISOString().split("T")[0],
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProject = {
      id: Date.now(),
      ...formData,
    };
    setProjects((prev) => [...prev, newProject]);
    setFormData(initialFormData);
    navigate("/projects");
  };

  const handleCancel = () => {
    setFormData(initialFormData);
    navigate("/projects");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100 p-6">
      <form
        onSubmit={handleSubmit}
        className="
          w-full
          max-w-[600px]
          bg-white
          rounded-3xl
          shadow-xl
          p-8
          flex
          flex-col
          gap-6
        "
      >
        <div>
          <h1 className="text-3xl font-bold text-slate-900">New Project</h1>

          <p className="text-slate-500 mt-2">
            Create a new goal and track your progress.
          </p>
        </div>

        {/* TITLE */}
        <div className="flex flex-col gap-2">
          <label className="font-medium text-slate-700">Project Title</label>

          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Enter project title..."
            className="
              border
              border-slate-300
              rounded-xl
              px-4
              py-3
              outline-none
              focus:border-blue-500
            "
            required
          />
        </div>

        {/* DESCRIPTION */}
        <div className="flex flex-col gap-2">
          <label className="font-medium text-slate-700">Description</label>

          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Describe your project..."
            rows={5}
            className="
              border
              border-slate-300
              rounded-xl
              px-4
              py-3
              resize-none
              outline-none
              focus:border-blue-500
            "
          />
        </div>

        {/* PROGRESS */}
        <div className="flex flex-col gap-2">
          <label className="font-medium text-slate-700">Progress</label>

          <div className="flex items-center gap-4">
            <input
              type="range"
              name="progress"
              min="0"
              max="100"
              value={formData.progress}
              onChange={handleChange}
              className="w-full"
            />

            <span className="font-semibold text-blue-600 min-w-[50px]">
              {formData.progress}%
            </span>
          </div>
        </div>

        {/* STATUS + DATE */}
        <div className="grid grid-cols-2 gap-4">
          {/* STATUS */}
          <div className="flex flex-col gap-2">
            <label className="font-medium text-slate-700">Status</label>

            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="
                border
                border-slate-300
                rounded-xl
                px-4
                py-3
                outline-none
                focus:border-blue-500
              "
            >
              <option value="Active">Active</option>

              <option value="Paused">Paused</option>

              <option value="Completed">Completed</option>
            </select>
          </div>

          {/* DATE */}
          <div className="flex flex-col gap-2">
            <label className="font-medium text-slate-700">Due Date</label>

            <input
              type="date"
              name="dueDate"
              value={formData.dueDate}
              onChange={handleChange}
              className="
                border
                border-slate-300
                rounded-xl
                px-4
                py-3
                outline-none
                focus:border-blue-500
              "
            />
          </div>
        </div>

        {/* BUTTONS */}
        <div className="flex justify-end gap-3 pt-2">
          <button
            type="button"
            onClick={handleCancel}
            className="
              px-5
              py-3
              rounded-xl
              bg-slate-200
              hover:bg-slate-300
              transition
            "
          >
            Cancel
          </button>

          <button
            type="submit"
            className="
              px-5
              py-3
              rounded-xl
              bg-blue-600
              text-white
              hover:bg-blue-700
              transition
            "
          >
            Create Project
          </button>
        </div>
      </form>
    </div>
  );
}
