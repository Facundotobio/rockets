import * as API from './services/lauches';
import { useEffect, useState } from 'react';
import logo from './assets/logo.png';
import { Heading, Image, Button, Flex } from '@chakra-ui/react';
import { LaunchItem } from './components/LaunchItem';
import { AiOutlineDoubleLeft, AiOutlineDoubleRight  } from "react-icons/ai";
import { DNA } from 'react-loader-spinner';
import { useNavigate } from 'react-router-dom';

export function App() {
  const [lauches, setLaunches] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const launchesPerPage = 4;
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true); // Iniciar el spinner
      await new Promise(resolve => setTimeout(resolve, 2000)); // Esperar 2 segundos
      const data = await API.getAllLaunches();
      setLaunches(data);
      setLoading(false); // Detener el spinner
    };
  
    fetchData();
  }, []);
  
  // Calcular los lanzamientos a mostrar
  const indexOfLastLaunch = currentPage * launchesPerPage;
  const indexOfFirstLaunch = indexOfLastLaunch - launchesPerPage;
  const currentLaunches = lauches.slice(indexOfFirstLaunch, indexOfLastLaunch);

    // Cambiar de página
  const paginate = (direction) => {
    if (direction === 'next' && currentPage < Math.ceil(lauches.length / launchesPerPage)) {
      setCurrentPage(currentPage + 1);
    } else if (direction === 'prev' && currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleLogout = () => {
    navigate('/'); 
  };

  const handleAbout = () => {
    navigate('/about');
  };

  return (
    <>
      <Flex justify="space-between" align="center">
        <Image src={logo} alt="SpaceX" width={500} height={100} m={6} />
        <Flex align="center" mr={6}>
          <Button color="white" onClick={handleAbout} bg='blue.700' _hover={{ bg: 'blue.900' }} mr={4}>
            About this page
          </Button>
          <Button color="white" onClick={handleLogout} bg='red.500' _hover={{ bg: 'red' }}>
            Logout
          </Button>
        </Flex>
      </Flex>
      <Heading as='h1' size='lg' ml={8} color={'white'} textShadow="13px 13px 12px #000000">SpaceX Launches</Heading>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {loading ? ( // Mostrar el spinner mientras se carga
          <DNA
            visible={true}
            height="80"
            width="80"
            ariaLabel="dna-loading"
            wrapperStyle={{}}
            wrapperClass="dna-wrapper"
          />
        ) : (
          <section style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            {currentLaunches.map(launch => (
              <div style={{ width: '600px', marginBottom: '4px' }} key={launch.flight_number}>
                <LaunchItem launch={launch} />
              </div>
            ))}
          </section>
        )}
        {/* Botones de paginado */}
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '20px', marginBottom: '30px' }}>
          <Button onClick={() => setCurrentPage(1)} boxShadow="14px 8px 16px rgba(0, 0, 0, 0.3)" bg={'red.300'} _hover={{ bg: 'red.200' }} style={{ marginRight: '20px' }}>
            <AiOutlineDoubleLeft />
          </Button>
          <Button bg={'red.200'} _hover={{ bg: 'red.200' }} boxShadow="14px 8px 16px rgba(0, 0, 0, 0.3)" onClick={() => paginate('prev')} disabled={currentPage === 1}>
            <AiOutlineDoubleLeft style={{ marginRight: '20px' }} />
            Previus
          </Button>
          <span style={{ margin: '0 20px', border: '1px solid black', padding: '8px', borderRadius: '80%', background: 'white', fontWeight: 'bold' }}>{currentPage}</span>
          <Button bg={'green.200'} _hover={{ bg: 'green.200' }} boxShadow="14px 8px 16px rgba(0, 0, 0, 0.3)" onClick={() => paginate('next')} disabled={currentPage >= Math.ceil(lauches.length / launchesPerPage)}>
            Next
          </Button>
          <Button onClick={() => setCurrentPage(Math.ceil(lauches.length / launchesPerPage))} boxShadow="14px 8px 16px rgba(0, 0, 0, 0.3)" bg={'green.300'} _hover={{ bg: 'green.200' }} style={{ marginLeft: '20px' }}>
            <AiOutlineDoubleRight />
          </Button>
        </div>
      </div>
    </>
  );
}

export default App;