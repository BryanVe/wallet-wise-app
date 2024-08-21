import {
  Box,
  Button,
  Flex,
  Group,
  PasswordInput,
  Stack,
  TextInput,
  Title,
} from "@mantine/core";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const navigate = useNavigate();

  return (
    <Flex direction="column" h="100vh" p="md">
      <Group flex={1} justify="space-evenly" align="center">
        <Box w={500}>
          <Stack>
            <Title>Iniciar Sesion</Title>

            <TextInput
              label="Correo Electronico"
              placeholder="ejemplo@gmail.com"
              inputWrapperOrder={["label", "error", "input", "description"]}
            />

            <PasswordInput
              label="Contraseña"
              placeholder="Ingresa tu contraseña"
            />

            <Button onClick={() => navigate("/home")}>Ingresar</Button>
          </Stack>
        </Box>
      </Group>
    </Flex>
  );
};

export default SignIn;
