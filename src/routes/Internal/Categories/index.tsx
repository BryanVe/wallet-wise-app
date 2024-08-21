import {
  ActionIcon,
  Box,
  Button,
  Card,
  ColorPicker,
  Flex,
  Group,
  Menu,
  Modal,
  Stack,
  Text,
  TextInput,
  Title,
} from "@mantine/core";
import Icon from "../../../components/Icon";
import { useDisclosure } from "@mantine/hooks";
import { Fragment, useState } from "react";

type Category = {
  id: string;
  name: string;
  descripcion: string;
  color: string;
};

const _Categories: Category[] = [
  {
    id: "1",
    name: "categoria 1",
    descripcion: "...",
    color: "rgba(47, 119, 150, 0.7)",
  },
  {
    id: "2",
    name: "categoria 2",
    descripcion: "...",
    color: "rgba(91, 42, 107, 0.7)",
  },
];

const Categories = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const [colorCategory, onChange] = useState("rgba(47, 119, 150, 0.7)");
  const [editActive, setEditActive] = useState(false);
  return (
    <Flex direction="column" w="100%" mx="auto" gap="sm" p={50}>
      <Modal
        opened={opened}
        onClose={close}
        title={editActive ? "Editar Categoria" : "Nueva Categoria"}
        centered
      >
        <TextInput
          label="Nombre"
          placeholder="Nombre"
          inputWrapperOrder={["label", "error", "input", "description"]}
        />
        <TextInput
          label="Descripcion"
          placeholder="Descripcion"
          inputWrapperOrder={["label", "error", "input", "description"]}
        />
        <Text size="sm">Elige un color</Text>
        <ColorPicker
          format="rgba"
          value={colorCategory}
          onChange={onChange}
          swatches={[
            "#2e2e2e",
            "#868e96",
            "#fa5252",
            "#e64980",
            "#be4bdb",
            "#7950f2",
            "#4c6ef5",
            "#228be6",
            "#15aabf",
            "#12b886",
            "#40c057",
            "#82c91e",
            "#fab005",
            "#fd7e14",
          ]}
        />
        <Button>Confirmar</Button>
      </Modal>

      <Button
        onClick={() => {
          setEditActive(false);
          open();
        }}
        size="sm"
        w="200"
        style={{ alignSelf: "flex-end" }}
      >
        Agregar Categoria
        <Icon style={{ marginLeft: "10" }} type="plus" />
      </Button>

      {_Categories.map((category) => (
        <Card withBorder shadow="sm" radius="md" maw={300} key={category.id}>
          <Card.Section withBorder inheritPadding py="xs" bg={category.color}>
            <Group justify="space-between">
              <Text fw={500}>{category.name}</Text>
              <Menu withinPortal position="bottom-end" shadow="sm">
                <Menu.Target>
                  <Box>
                    <ActionIcon
                      variant="subtle"
                      color="gray"
                      onClick={() => {
                        setEditActive(true);
                        open();
                      }}
                    >
                      <Icon color="black" type="edit" size={20} />
                    </ActionIcon>
                    <ActionIcon variant="subtle" color="gray">
                      <Icon color="black" type="trash" size={20} />
                    </ActionIcon>
                  </Box>
                </Menu.Target>
              </Menu>
            </Group>
          </Card.Section>

          <Text mt="sm" c="dimmed" size="sm">
            {category.descripcion}
          </Text>
        </Card>
      ))}
    </Flex>
  );
};

export default Categories;
