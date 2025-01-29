import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton,
         ModalBody, ModalFooter, Button, Text, Link } from '@chakra-ui/react';

export function LaunchDetailsModal({ isOpen, onClose, launch }) {
    return (
        <Modal isOpen={isOpen} onClose={onClose} borderRadius='2xl'>
            <ModalOverlay />
            <ModalContent borderRadius='2xl'>
                <ModalHeader>Mission Details</ModalHeader>
                <ModalCloseButton/>
                <ModalBody>
                    <Text>{launch.details || 'No details available.'}</Text>
                    <br />
                    {launch.links.video_link && (
                        <Link href={launch.links.video_link} isExternal color='blue.500'>
                            Watch video on YouTube
                        </Link>
                    )}
                </ModalBody>
                <ModalFooter>
                    <Button colorScheme='blue' fontSize='sm' onClick={onClose}>
                        Close
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
}