import { Group, Avatar, Text, Menu, UnstyledButton } from "@mantine/core";

import { IoMdArrowDropdown } from "react-icons/io";
import UserDetailContext from "../UserContext/UserDetailContext";
import { useContext, useEffect } from "react";
import { useMutation } from "react-query";
import { getAllBookingsByUser } from "../../utils/api";
const ProfileMenu = ({ user, logout }) => {
  const {
    userDetails: { token, bookings},
    setuserDetails,
  } = useContext(UserDetailContext);
  console.log(bookings)
  const {mutate} =useMutation({
    mutationFn:()=>getAllBookingsByUser(user?.email), // Implement this function
    onSuccess:(response)=>setDetails(response),
    onError:(response)=>toast.error("Error fetching bookings:", response),
    });
    useEffect(()=>{
      mutate()
  
    },[])
    const setDetails = (response) => {
      setuserDetails({
      bookings: response.data.bookedVisits,
    }); 

  }
  return (
    <Group position="center">
      <Menu withArrow>
        <Menu.Target>
          <Group>
            <Avatar src={user?.picture} radius="xl" />
          </Group>
        </Menu.Target>
        <Menu.Dropdown>
          <Menu.Item>Favorites</Menu.Item>
          <Menu.Item onClick={()=>{
            console.log(bookings? bookings:"no bookings")
          }} >Bookings</Menu.Item>
          <Menu.Item onClick={()=>{
            localStorage.clear();
            logout()
          }}  >Logout</Menu.Item>
        </Menu.Dropdown>
      </Menu>
    </Group>
  );
};

export default ProfileMenu;
