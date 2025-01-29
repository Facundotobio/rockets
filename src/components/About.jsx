import React from 'react';
import { Box, Heading, Text, Button } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

function About() {
    const navigate = useNavigate();

    const handleBack = () => {
        navigate('/spacex');
      };

  return (
    <Box
      maxW="800px"
      mx="auto"
      mt={10}
      p={6}
      borderWidth={1}
      borderRadius="lg"
      boxShadow="lg"
      bg="gray.200"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      minH="40vh"
      marginTop={100}
    >
      <Heading as="h2" size="xl" mb={4} textAlign="center" marginBottom={50}>
        About this page
      </Heading>
      <Text fontSize="lg" textAlign="justify">
      This page was created by Facundo Tobio to practice styling with Chakra UI, login forms with Zod, alerts with SweetAlert2, also to include react icons, loaders and navigation.
       The page has pagination, detailed information and redirection links to youtube with videos of each takeoff.
       The biggest collaboration was made by the SpaceX API, whom I thank for their information and the chance to continue practicing programming. I hope you like it.
      </Text>
    <Button onClick={handleBack} color="white" bg='blue.700' _hover={{ bg: 'blue.900' }} mt={14}>
        Back
      </Button>
    </Box>
  );
}

export default About;