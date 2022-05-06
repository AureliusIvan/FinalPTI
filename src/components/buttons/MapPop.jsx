import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Divider,
  Text,
  Box
} from '@chakra-ui/react';
import { useDisclosure } from '@chakra-ui/react';
import React, { useState } from 'react';

function MapPop(props) {
  const PopUp = () => (
    <ModalOverlay
      bg="rgba(0,0,0, 0.6)"
      backdropFilter="blur(5px) hue-rotate(90deg)"
    />
  );
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [overlay, setOverlay] = useState(<PopUp />);
  return (
    <>
      <Button
        onClick={() => {
          setOverlay(<PopUp />);
          onOpen();
        }}
      >
        MAP
      </Button>

      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        {overlay}
        <ModalContent width="90%" pb={3} shadow={'2px 2px 6px #fd6a6a'}>
          <ModalHeader
            bgColor={'red.100'}
            textAlign="center"
            fontWeight="normal"
          >
            <Box bgColor=''>MAP</Box>
          </ModalHeader>
          <ModalCloseButton mt={2} />
          <Divider />
          <ModalBody
            bgColor="blue.200"
            margin="10px"
            textAlign="center"
            gap="10px"
          >
            <Button onClick={props.home}>home</Button>
            <Button onClick={props.cafe}>cafe</Button>
            <Button onClick={props.univ}>UMN</Button>
            <Button onClick={props.mall}>Mall</Button>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

export default MapPop;