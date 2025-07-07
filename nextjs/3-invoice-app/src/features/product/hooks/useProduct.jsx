"use client"

import { getProducts } from '@/services/product'
import { useState } from 'react'
import useSWR from 'swr'

const useProduct = () => {

    const [url,setUrl] = useState(process.env.NEXT_PUBLIC_API_URL + "/products")

    const {data,isLoading,error} = useSWR(url,getProducts)

    data && console.log("useProduct data:", data)

  return {
    data,
    isLoading,
    error,
    setUrl
  }
}

export default useProduct