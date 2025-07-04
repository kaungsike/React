 export const login = (data) => {
  return fetch(process.env.NEXT_PUBLIC_API_URL + "/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(data),
  });
};
