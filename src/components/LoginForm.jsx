import React, { useState } from 'react';
import { z } from 'zod';
import Swal from 'sweetalert2';
import { Box, Button, FormControl, FormLabel, Input, VStack, Heading } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import coheteImage from '../assets/nubes.jpg'; // Asegúrate de que la ruta sea correcta

// Expresión regular para validar el email con extensiones comunes
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

// Expresión regular para validar la contraseña con números y letras
const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

const loginSchema = z.object({
  name: z.string()
    .min(2, { message: "El nombre debe tener más de un carácter" }),
  email: z.string()
    .email({ message: "Email inválido" })
    .regex(emailRegex, { message: "El email debe tener una extensión válida" }),
  password: z.string()
    .min(8, { message: "La contraseña debe tener al menos 8 caracteres" })
    .regex(passwordRegex, { message: "La contraseña debe contener números y letras" }),
  confirmPassword: z.string()
}).refine(data => data.password === data.confirmPassword, {
  message: "Las contraseñas no coinciden",
  path: ["confirmPassword"],
});

function LoginForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const result = loginSchema.safeParse({ name, email, password, confirmPassword });

    if (!result.success) {
      const errorMessages = result.error.errors.map(err => err.message).join(', ');
      Swal.fire('Error', errorMessages, 'error');
    } else {
      Swal.fire('Éxito', 'Inicio de sesión exitoso', 'success').then(() => {
        navigate('/spacex'); // Redirige a la ruta /spacex
      });
    }
  };

  return (
    <Box
      minH="100vh"
      bgImage={`url(${coheteImage})`}
      bgSize="cover"
      bgPosition="center"
      bgRepeat="no-repeat"
      position="relative"
      overflow="hidden"
    >
      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        bg="rgba(0, 0, 0, 0.3)"
        zIndex={1}
      />
      <Box
        maxW="md"
        mx="auto"
        mt={8}
        p={6}
        borderWidth={1}
        borderRadius="lg"
        boxShadow="lg"
        bg="white"
        zIndex={2}
        position="relative"
      >
        <Heading as="h2" size="lg" mb={6} textAlign="center">
          Iniciar Sesión
        </Heading>
        <form onSubmit={handleSubmit}>
          <VStack spacing={4}>
            <FormControl id="name" isRequired>
              <FormLabel>Nombre</FormLabel>
              <Input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </FormControl>
            <FormControl id="email" isRequired>
              <FormLabel>Email</FormLabel>
              <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Contraseña</FormLabel>
              <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </FormControl>
            <FormControl id="confirmPassword" isRequired>
              <FormLabel>Confirmar Contraseña</FormLabel>
              <Input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
            </FormControl>
            <Button type="submit" colorScheme="blue" width="full">
              Iniciar sesión
            </Button>
          </VStack>
        </form>
      </Box>
    </Box>
  );
}

export default LoginForm;