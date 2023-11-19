import React from "react";
import { useQuery } from "react-query";
import { fetchProperty } from "../src/utils/api";

const useProperty = (id) => {
  const { data, isError, isLoading, refetch } = useQuery(
    ["property", id],
    ()=>fetchProperty(id),
    { refetchOnWindowFocus: false }
  );
  return {
    data,
    isError,
    isLoading,
    refetch,
  };
};

export default useProperty;
