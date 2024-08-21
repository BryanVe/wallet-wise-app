import { Flex } from "@mantine/core";
import SideBar from "./Components/SideBar";
import { Outlet } from "react-router-dom";

const InternalLayout = () => {
  return (
    <Flex>
      <SideBar />
      <Outlet />
    </Flex>
  );
};

export default InternalLayout;
