"use client";
import deleteTask from "@/actions/deleteTask";
import React, { useActionState } from "react";

const DeleteListForm = ({ id }) => {

    const [state,formAction,isPending] = useActionState(deleteTask);

  return (
    <form action={formAction}>
      {" "}
      <input type="text" className="hidden" name='id' defaultValue={id} id="" />
      <button className="mt-3 inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-lg hover:bg-red-700 transition-colors shadow-sm">
        🗑️ Delete
      </button>
    </form>
  );
};

export default DeleteListForm;
