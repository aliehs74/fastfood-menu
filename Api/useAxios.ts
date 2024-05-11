"use client";

import axios from "axios";
import { useState, useEffect, useCallback } from "react";
const axiosInstance = axios.create({
  baseURL: "https://react-mini-projects-api.classbon.com",
});
const useAxios = (axiosParams: any) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  const fetchData = useCallback(async () => {
    try {
      const result = await axiosInstance.request(axiosParams);
      setResponse(result.data);
      console.log("result:", result, "response:", response);
    } catch (error: any) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }, [axiosParams, response]);

  useEffect(() => {
    fetchData();
  }, [axiosParams.url, fetchData]);

  return [response, error, loading];
};

export default useAxios;
