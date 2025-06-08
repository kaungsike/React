import React from "react";
import DeleteListForm from "./DeleteListForm";

const TaskList = ({ task: { id, title, status, created_at } }) => {
  return (
    <div className="p-5 bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition-shadow space-y-3">
      {/* Title and Status */}
      <div className="flex items-start justify-between">
        <div>
          <h3
            className={`text-xl font-semibold ${
              status ? "line-through text-gray-500" : "text-gray-800"
            }`}
          >
            {title}
          </h3>
          <p className="text-sm text-gray-400">
            Created: {new Date(created_at).toLocaleString()}
          </p>
        </div>
        <span
          className={`text-xs font-semibold px-3 py-1 rounded-full ${
            status
              ? "bg-green-100 text-green-700"
              : "bg-yellow-100 text-yellow-700"
          }`}
        >
          {status ? "Done" : "Pending"}
        </span>
      </div>

      {/* Delete Action */}
      <div className="pt-2 border-t border-gray-100">
        <DeleteListForm id={id} />
      </div>
    </div>
  );
};

export default TaskList;
