import useAccountStore from "@/store/useAccountStore";

export const PRODUCT_API_URL = process.env.NEXT_PUBLIC_API_URL + "/products";

const token = useAccountStore.getState().token;

export const getProducts = (url) => {
  return fetch(url, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }).then((res) => res.json());
};

export const createProduct = (data) => {
  return fetch(PRODUCT_API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  });
};

export const updateProduct = (id, data) => {
  return fetch(`${PRODUCT_API_URL}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  });
};

export const deleteProduct = (id) => {
  return fetch(PRODUCT_API_URL + "/" + id, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
