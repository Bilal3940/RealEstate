import { Group, Avatar, Text, Menu, UnstyledButton } from "@mantine/core";

import { IoMdArrowDropdown } from "react-icons/io";

const ProfileMenu = ({ user, logout }) => {
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
          <Menu.Item>Bookings</Menu.Item>
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
