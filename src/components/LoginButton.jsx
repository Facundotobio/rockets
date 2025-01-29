import React from 'react';
import { Button, Heading, Text } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import logo from './../assets/logo.png';
import { Box } from '@chakra-ui/react'; 

const LoginButton = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    const isAuthenticated = true; // Simulación de autenticación exitosa

    if (isAuthenticated) {
      navigate('/spacex'); // Redirigir a la página principal
    }
  };

  return (
    <>
    <Box position="relative" height="100vh">
      <Box
        position="absolute"
        top={-360}
        left={20}
        right={0}
        bottom={0}
        backgroundImage={`url(${logo})`}
        backgroundRepeat="no-repeat"
        backgroundSize="contain"
        backgroundPosition="center"
        zIndex={-1} 
      />
    </Box>
      <Box zIndex={1} position="relative" marginTop={-350} align="center">
        <Heading as="h1" size="lg" mb={10} >
        Welcome to the unofficial site of SpaceX
        </Heading>
        <Text mb={4} fontSize='xl' width='90%'>
        This website was created in order to practice styling with the Chakra UI library, consolidate knowledge with the React library and generate a login method with Auth0.
        We incorporated react-loader-spinner spinners, links to referential videos, react-icons icons, pagination, we also used the dayjs library for date management and the great contribution was made by the SpaceX API.
        </Text>
        <Button colorScheme="blue" onClick={handleLogin} marginTop={10}>
         Log in
        </Button>
      </Box>
      <Box textAlign="center" padding={4} backgroundColor="blue.700" position="absolute" bottom={-88} left={0} right={0}>
      <Text color='white' fontSize='sm'>Website created by Facundo Tobio ®</Text>
    </Box>
    </>
  );
};

export default LoginButton;