"use client";

import { getProducts, PRODUCT_API_URL } from "@/services/product";
import { debounce } from "lodash";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import useSWR from "swr";

const useProduct = () => {
  const router = useRouter();
  const searchRef = useRef(null); // Make sure to set initial null
  const searchParams = useSearchParams();
  const currentParams = Object.fromEntries(searchParams.entries());

  const [url, setUrl] = useState("");

  const { data, isLoading, error } = useSWR(url, getProducts);

  // Update the API URL whenever the router query changes
  useEffect(() => {
    const queryString = new URLSearchParams(currentParams).toString();
    const apiUrl = `${PRODUCT_API_URL}?${queryString}`;
    setUrl(apiUrl);

    // Set input box from param (if available)
    if (searchRef.current) {
      searchRef.current.value = currentParams.q || "";
    }
  }, [searchParams]);

  const updateUrlParams = (newParams) => {
    const updateSearchParams = new URLSearchParams(newParams).toString();
    router.push(`?${updateSearchParams}`);
    setUrl(`${PRODUCT_API_URL}?${updateSearchParams}`);
  };

  const handleSearch = debounce((e) => {
    const value = e.target.value;
    const updateParams = { ...currentParams };

    if (value) {
      updateParams.q = value;
    } else {
      delete updateParams.q;
    }

    updateUrlParams(updateParams);
  }, 1000);

  const handleClearSearch = () => {
    if (searchRef.current) {
      searchRef.current.value = ""; // Clear input value safely
    }

    const updateParams = { ...currentParams };
    delete updateParams.q;
    updateUrlParams(updateParams);
  };

  return {
    data,
    isLoading,
    error,
    setUrl,
    handleSearch,
    handleClearSearch,
    searchRef, // Return ref so component can attach it
  };
};

export default useProduct;
