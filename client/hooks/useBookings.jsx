import React, { useContext, useEffect, useRef } from "react";
import { useQuery } from "react-query";
import { useAuth0 } from "@auth0/auth0-react";
import UserDetailContext from "../src/components/UserContext/UserDetailContext";
import { getAllBookingsByUser } from "../src/utils/api";

const useBookings = () => {
  const { userDetails, setUserDetails } = useContext(UserDetailContext);
  const queryRef = useRef();
  const { user } = useAuth0();

  const { booking, isLoading, isError, refetch } = useQuery({
    queryKey: "allBookings",
    queryFn: () => getAllBookingsByUser(user?.email, userDetails?.token),
    onSuccess: (booking) => {
      setUserDetails((prev) => ({ ...prev, bookings: booking }));
    },
    enabled: user !== undefined,
    staleTime: 30000,
  });

  queryRef.current = refetch;

  useEffect(() => {
    queryRef.current && queryRef.current();
  }, [userDetails?.token]);

  return { booking, isError, isLoading, refetch };
};

export default useBookings;
