import { Pencil, Trash2 } from "lucide-react";

export default function ProjectCard({
  title,
  description,
  progress,
  status,
  dueDate,
}) {
  return (
    <article className="bg-white rounded-3xl p-4 shadow-md hover:shadow-xl transition duration-300 border border-gray-100 w-100 h-52">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div>
          <h2 className="text-xl font-bold text-gray-800">{title}</h2>

          <p className="text-sm text-gray-500 mt-1">
            {description}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2">
          <button className="px-3 py-1 text-sm rounded-xl bg-blue-100 text-blue-600 hover:bg-blue-200 transition cursor-pointer">
            <Pencil/>
          </button>

          <button className="px-3 py-1 text-sm rounded-xl bg-red-100 text-red-600 hover:bg-red-200 transition cursor-pointer">
            <Trash2/>
          </button>
        </div>
      </div>

      {/* Progress */}
      <div className="mb-5">
        <div className="flex justify-between mb-2">
          <span className="text-sm font-medium text-gray-600">
            Progress
          </span>

          <span className="text-sm font-semibold text-blue-600">
            {progress}%
          </span>
        </div>

        <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
          <div
            className="bg-blue-500 h-3 rounded-full transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between">
        <span
          className={`text-sm font-medium px-3 py-1 rounded-full
            ${
              status === "Completed"
                ? "bg-green-100 text-green-700"
                : status === "Paused"
                ? "bg-gray-200 text-gray-700"
                : "bg-blue-100 text-blue-700"
            }`}
        >
          {status}
        </span>

        <p className="text-sm text-gray-500">
          Due: <span className="font-medium">{dueDate}</span>
        </p>
      </div>
    </article>
  );
}