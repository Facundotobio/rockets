import { Box, Text, Flex, Tag, Button } from '@chakra-ui/react';
import { HiCalendar } from "react-icons/hi";
import dayjs from 'dayjs';
import "dayjs/locale/es";
import { useState } from 'react';
import { LaunchDetailsModal } from './LaunchDetailsModal';

export function LaunchItem({ launch }) {
    const [isOpen, setIsOpen] = useState(false);

    const onOpen = () => setIsOpen(true);
    const onClose = () => setIsOpen(false);

    return (
        <Box key={launch.flight_number} bg={'gray.100'} p={3} m={3} borderRadius={20} maxWidth={580} boxShadow="20px 8px 16px rgba(0, 0, 0, 0.3)">
            <Flex>
                <Text fontSize='2xl'>
                    <strong>Mission: {launch.mission_name}</strong> ({launch.launch_year})
                </Text>
            </Flex>
            <Flex align='center' mr={2}>
                <Text color='gray.700'>Status:</Text>
                <Tag p={4} ml={4} mt={1} height={3} colorScheme={launch.launch_success ? "green" : "red"}>
                    {launch.launch_success ? 'Success' : 'Failure'}
                </Tag>
            </Flex>
            <Flex>
                <Text marginTop={2} fontSize='lg' color={'gray.600'}>
                    Country: {launch.rocket.second_stage.payloads[0].nationality ? launch.rocket.second_stage.payloads[0].nationality : 'No details'}
                </Text>
            </Flex>
            <Flex align='center' marginTop={2}>
                <HiCalendar marginTop={2} color={'orange'} />
                <Text marginLeft={2} fontSize='md' color={'gray.500'}>
                    {' '}{dayjs(launch.launch_date_local).locale('en').format("D MMMM, YYYY")}
                </Text>
            </Flex>
            <Flex justify='flex-end' alignItems='end'>
                <Button colorScheme='blue' fontSize='sm' p={3} m={1} borderRadius={8} onClick={onOpen}>
                    More Details
                </Button>
            </Flex>
            <LaunchDetailsModal isOpen={isOpen} onClose={onClose} launch={launch} />
        </Box>
    );
}