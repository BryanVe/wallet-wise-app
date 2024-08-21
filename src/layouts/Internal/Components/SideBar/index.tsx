import { Flex, NavLink, Title } from "@mantine/core";
import { Link, useLocation } from "react-router-dom";

const SideBar = () => {
  const { pathname: currentPath } = useLocation();

  type BarSection = {
    id: string;
    label: string;
    path: string;
    // icon: React.ReactNode;
  };

  const BarSections: BarSection[] = [
    {
      id: "inicio",
      label: "Inicio",
      path: "/home",
    },
    {
      id: "categorias",
      label: "Categorias",
      path: "/categories",
      // icon:
    },
  ];

  return (
    <Flex h="100vh" w={300} p="md" direction="column" bg="#2d2d2d">
      <Title order={2} c="#cacaca" mb="sm">
        Wallet Wise
      </Title>
      {BarSections.map((section) => (
        <NavLink
          key={section.id}
          component={Link}
          to={section.path}
          label={section.label}
          active={currentPath === section.path}
          c="#cacaca"
          color="#8b8b8b"

          //   leftSection={<section.icon size="1rem" stroke={1.5} />}
        />
      ))}
    </Flex>
  );
};

export default SideBar;
