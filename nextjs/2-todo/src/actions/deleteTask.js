"use server";

import { revalidateTag } from "next/cache";

const deleteTask = async (currentState, formData) => {
  const id = formData.get("id")

  const res = await fetch("http://localhost:3001/tasks/"+id, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },

  });

  console.log(res);

  revalidateTag("tasks");

//   if (res.ok) {
//     const json = await res.json();
//     revalidateTag("tasks");
//     console.log(json);
//   } else {
//     throw new Error(json.message || "Failed to create task");
//   }
};

export default deleteTask;
