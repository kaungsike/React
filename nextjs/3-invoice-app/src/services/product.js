import useAccountStore from "@/store/useAccountStore";

export const PRODUCT_API_URL = process.env.NEXT_PUBLIC_API_URL+"/products";

const token = useAccountStore.getState().token;

export const getProducts = () => {
  return fetch(PRODUCT_API_URL,  {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }).then((res) => res.json());
};

export const deleteProduct = (id) => {

  return fetch(PRODUCT_API_URL+"/"+id, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
}