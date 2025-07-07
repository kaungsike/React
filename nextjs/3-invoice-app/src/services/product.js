import useAccountStore from "@/store/useAccountStore";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

const token = useAccountStore.getState().token;

export const getProducts = (url) => {
  return fetch(url, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }).then((r) => r.json());
};
 