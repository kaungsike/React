"use server";

import { revalidateTag } from "next/cache";

const createTask = async (currentState, formData) => {
  const title = formData.get("title");

  const res = await fetch("http://localhost:3001/tasks", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: title,
      status: false,
      created_at: new Date().toISOString(),
    }),
  });

  if (res.ok) {
    const json = await res.json();
    revalidateTag("tasks");
    console.log(json);
  } else {
    throw new Error(json.message || "Failed to create task");
  }
};

export default createTask;
